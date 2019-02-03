import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Section, Hero, Title, Container } from "rbx";
import styles from "./App.module.scss";
import "rbx/index.css";

import withAuth from "./hocs/withAuth";
import Home from "./views/Home";
import Words from "./views/Words";
import Game from "./views/Game";
import Summary from "./views/Summary";
import SignIn from "./views/SignIn";
import ProfilePage from "./views/ProfilePage";
// import SignUp from "./views/SignUp";

class App extends Component {
  render() {
    return (
      <>
        <Hero color="info">
          <Hero.Body>
            <Container textAlign="centered">
              <Title>Firebase Taboo</Title>
              <Title as="h2" subtitle>
                Play taboo online!
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
        <Section className={styles.section}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/words" component={Words} />
              <Route path="/game" component={Game} />
              <Route path="/summary" component={Summary} />
              <Route path="/profile" component={ProfilePage} />
              {/* <Route path="/signup" component={SignUp} /> */}
              <Route path="/signin" component={SignIn} />
              <Route component={Home} />
            </Switch>
          </Router>
        </Section>
      </>
    );
  }
}

export default withAuth(App);
