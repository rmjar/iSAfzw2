import React, { Component } from "react";
import { Container } from "rbx";

import WordsList from "./WordsList";
import AddNewWord from "./AddNewWord";

class Words extends Component {
  state = { id: "", expected: "" };

  edit = ({ id, expected }) => {
    this.setState({ id, expected });
  };

  onChange = expected => this.setState(expected);

  render() {
    const { id, expected } = this.state;

    return (
      <Container fluid>
        <AddNewWord id={id} expected={expected} onChange={this.onChange} />
        <WordsList edit={this.edit} />
      </Container>
    );
  }
}

export default Words;
