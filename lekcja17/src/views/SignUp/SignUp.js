import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Title, Button, Container, Input, File } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

class SignUp extends Component {
  render() {
    return (
      <Container textAlign="centered" className={styles.container}>
        <Title className={styles.title}>Create new account</Title>
        <Input
          type="text"
          size="medium"
          rounded
          placeholder="Enter your name..."
          className={styles.input}
        />
        <Input
          type="text"
          size="medium"
          rounded
          placeholder="Enter your email..."
          className={styles.input}
        />
        <Input
          type="password"
          size="medium"
          rounded
          placeholder="Password..."
          className={styles.input}
        />
        <Input
          type="password"
          size="medium"
          rounded
          placeholder="Repeat password..."
          className={styles.input}
        />

        <File align="centered" hasName className={styles.fileUpload}>
          <File.Label>
            <File.Input name="resume" />
            <File.CTA className={styles.fileUploadButton}>
              <File.Icon>
                <FontAwesomeIcon icon={faUpload} />
              </File.Icon>
              <File.Label as="span">Upload Avatar</File.Label>
            </File.CTA>
          </File.Label>
        </File>

        <Button
          as={Link}
          to="/"
          color="info"
          size="medium"
          rounded
          className={styles.button}
        >
          Sign Up
        </Button>
      </Container>
    );
  }
}

export default SignUp;
