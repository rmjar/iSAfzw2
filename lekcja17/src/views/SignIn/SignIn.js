import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Title } from "rbx";
import { signInWithGoogle } from "../../firebase";

import withUser from "../../hocs/withUser";
import styles from "./styles.module.scss";

class SignIn extends Component {
  render() {
    return (
      <Container
        breakpoint="tablet"
        textAlign="centered"
        display="flex"
        className={styles.container}
      >
        <Title className={styles.title}>Login to your account</Title>

        <Button
          as={Link}
          to="/"
          color="info"
          size="medium"
          rounded
          className={styles.button}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>

        {/* <Input
          type="text"
          size="medium"
          rounded
          placeholder="Enter your name..."
          className={styles.input}
        />
        <Input
          type="password"
          size="medium"
          rounded
          placeholder="Enter your password..."
          className={styles.input}
        />
        <Button
          as={Link}
          to="/"
          color="info"
          size="medium"
          rounded
          className={styles.button}
        >
          Sign In
        </Button> */}

        {/* <Divider />

        <Button
          as={Link}
          to="/signup"
          className={styles.button}
          size="medium"
          color="light"
          rounded
        >
          Sign Up
        </Button> */}
      </Container>
    );
  }
}

export default withUser(SignIn);
