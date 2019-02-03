import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Column, Input, Field, Label } from "rbx";
import { firestore } from "../../firebase";
import styles from "./styles.module.scss";

class AddNewWord extends Component {
  handleChange = event => {
    const { name, value } = event.target;

    this.props.onChange({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { expected, id } = this.props;

    if (id) {
      const wordRef = firestore.collection("words").doc(id);

      wordRef.update({ expected });
    } else {
      firestore.collection("words").add({ expected });
    }

    this.props.onChange({ expected: "", id: "" });
  };

  render() {
    const { expected, id } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <Column size={12}>
          <Field>
            <Label className={styles.label}>Expected word</Label>
            <Input
              type="text"
              name="expected"
              value={expected}
              rounded
              placeholder="Enter word..."
              className={styles.input}
              onChange={this.handleChange}
            />
          </Field>
        </Column>

        <Column size={12}>
          <Column.Group>
            <Column size={8}>
              <Link to="/" className={styles.backLink}>
                Back to dashboard
              </Link>
            </Column>
            <Column size={4}>
              <Button color="info" rounded className={styles.button}>
                {!id ? "Add New" : "Save"}
              </Button>
            </Column>
          </Column.Group>
        </Column>
      </form>
    );
  }
}

export default AddNewWord;
