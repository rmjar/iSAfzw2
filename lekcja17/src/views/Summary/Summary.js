import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Table, Button } from "rbx";
import styles from "./styles.module.scss";

class Summary extends Component {
  render() {
    return (
      <Container textAlign="centered" fluid>
        <Title className={styles.summary}>Game Summary:</Title>

        <Table fullwidth>
          <Table.Head>
            <Table.Row>
              <Table.Heading>Player</Table.Heading>
              <Table.Heading>Score</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Piotr</Table.Cell>
              <Table.Cell>20</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Kamil</Table.Cell>
              <Table.Cell>15</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button
          as={Link}
          to="/"
          className={styles.button}
          size="medium"
          color="dark"
          rounded
        >
          Back to dashboard
        </Button>
      </Container>
    );
  }
}

export default Summary;
