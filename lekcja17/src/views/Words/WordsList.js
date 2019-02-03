import React, { Component } from "react";
import { List } from "rbx";

import { firestore } from "../../firebase";
import WordItem from "./WordItem";
import styles from "./styles.module.scss";

class WordsList extends Component {
  state = {
    words: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("words")
      .onSnapshot(snapshot => {
        const words = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.setState({ words });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { words } = this.state;
    if (!words.length) return null;

    return (
      <List className={styles.wordList}>
        {words.map(word => (
          <WordItem word={word} key={word.id} edit={this.props.edit} />
        ))}
      </List>
    );
  }
}

export default WordsList;
