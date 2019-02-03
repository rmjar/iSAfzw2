import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Button, Image } from "rbx";

import withUser from "../../hocs/withUser";
import { signOut } from "../../firebase";
import styles from "./styles.module.scss";

class Home extends Component {
  render() {
    const { user } = this.props;

    return (
      <Container
        breakpoint="tablet"
        textAlign="centered"
        display="flex"
        className={styles.container}
      >
        <Link to="/profile">
          <Image.Container size={128} className={styles.avatar}>
            <Image
              rounded
              src={user ? user.photoURL : `http://placekitten.com/200/200`}
            />
          </Image.Container>
        </Link>
        <Title className={styles.title}>
          Hey <strong>{user && user.displayName}</strong>!
        </Title>
        <Button
          as={Link}
          to="/game"
          color="light"
          size="medium"
          rounded
          className={styles.button}
        >
          Start New Game
        </Button>

        <Button
          as={Link}
          to="/words"
          color="info"
          size="medium"
          rounded
          className={styles.button}
        >
          List of words
        </Button>

        <Button
          color="info"
          size="medium"
          rounded
          className={styles.button}
          onClick={signOut}
        >
          Sign Out
        </Button>
      </Container>
    );
  }
}

export default withUser(Home);
