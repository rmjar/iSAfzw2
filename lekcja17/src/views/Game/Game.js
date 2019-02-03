import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Title, Button, Column } from "rbx";
import { Divider } from "../../components";
import styles from "./styles.module.scss";

class Game extends Component {
  render() {
    return (
      <Container textAlign="centered" fluid>
        <Column.Group>
          <Column size={6}>
            <Title className={styles.timer}>Points: 4</Title>
          </Column>
          <Column size={6}>
            <Title className={styles.timer}>Time: 0:30</Title>
          </Column>
        </Column.Group>

        <Card>
          <Card.Content>
            <Divider />
            <Title>Firebase</Title>
            <Divider />

            <Button
              as={Link}
              to="/summary"
              className={styles.button}
              size="medium"
              color="info"
              rounded
            >
              Done!
            </Button>
          </Card.Content>
        </Card>

        <Button
          as={Link}
          to="/summary"
          className={styles.button}
          size="medium"
          color="dark"
          rounded
        >
          End game
        </Button>
      </Container>
    );
  }
}

export default Game;
