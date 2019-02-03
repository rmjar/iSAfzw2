import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { List, Icon, Column } from "rbx";

import { firestore } from "../../firebase";
import styles from "./styles.module.scss";

class WordItem extends Component {
  handleRemove = () => {
    const { id } = this.props.word;
    const wordRef = firestore.doc(`words/${id}`);
    wordRef.delete();
  };

  handleEdit = () => {
    const { word } = this.props;
    this.props.edit(word);
  };

  render() {
    const {
      word: { expected }
    } = this.props;

    return (
      <List.Item>
        <Column.Group>
          <Column size={10}>{expected}</Column>
          <Column size={1}>
            <Icon
              size="small"
              className={styles.icon}
              onClick={this.handleEdit}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Icon>
          </Column>
          <Column size={1}>
            <Icon
              size="small"
              className={styles.icon}
              onClick={this.handleRemove}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Icon>
          </Column>
        </Column.Group>
      </List.Item>
    );
  }
}

export default WordItem;
