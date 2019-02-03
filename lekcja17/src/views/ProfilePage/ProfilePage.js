import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Title, Button, Container, Input, File, Image } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { auth, storage } from "../../firebase";
import withUser from "../../hocs/withUser";
import styles from "./styles.module.scss";

class ProfilePage extends Component {
  state = {
    displayName: this.props.user.displayName,
    photoURL: this.props.user.photoURL,
    file: null,
    success: false
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value, success: false });
  };

  handleChangePhoto = event => {
    const file = event.target.files[0];
    const photoURL = URL.createObjectURL(file);

    this.setState({ photoURL, file, success: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { displayName, file } = this.state;
    const user = auth.currentUser;
    const { uid } = this.props.user;

    if (displayName) {
      user.updateProfile({ displayName });
      this.props.updateUserProfile({ displayName });
      this.setState({ success: true });
    }

    if (file) {
      storage
        .ref()
        .child(`user-photos/${uid}/${file.name}`)
        .put(file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => {
          user.updateProfile({ photoURL });
          this.props.updateUserProfile({ photoURL });
          this.setState({ success: true });
        });
    }
  };

  render() {
    const { displayName, photoURL, success } = this.state;

    return (
      <Container textAlign="centered" className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <Title className={styles.title}>Edit your profile</Title>
          <Image.Container size={128} className={styles.avatar}>
            <Image rounded src={photoURL} />
          </Image.Container>
          <File align="centered" hasName className={styles.fileUpload}>
            <File.Label>
              <File.Input
                name="resume"
                type="file"
                onChange={this.handleChangePhoto}
              />
              <File.CTA className={styles.fileUploadButton}>
                <File.Icon>
                  <FontAwesomeIcon icon={faUpload} />
                </File.Icon>
                <File.Label as="span">Upload Avatar</File.Label>
              </File.CTA>
            </File.Label>
          </File>

          <Input
            type="text"
            size="medium"
            rounded
            placeholder="Enter your name..."
            className={styles.input}
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
          />

          <Button color="info" size="medium" rounded className={styles.button}>
            {success ? "Data updated!" : "Save"}
          </Button>
        </form>
        <Button
          as={Link}
          to="/"
          className={styles.backButton}
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

export default withUser(ProfilePage);
