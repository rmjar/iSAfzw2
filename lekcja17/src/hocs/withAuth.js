import React, { Component, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    state = {
      user: null,
      isLoading: true
    };

    componentDidMount = () => {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        if (user) {
          const { photoURL, displayName, uid } = user;
          this.setState({
            user: { photoURL, displayName, uid },
            isLoading: false
          });
        } else {
          this.setState({
            user: null,
            isLoading: false
          });
        }
      });
    };

    componentWillUnmount = () => {
      this.unsubscribeFromAuth();
    };

    updateUserProfile = ({
      displayName = this.state.user.displayName,
      photoURL = this.state.user.photoURL
    }) => {
      this.setState(state => ({
        user: { ...state.user, displayName, photoURL }
      }));
    };

    render() {
      const { user, isLoading } = this.state;
      if (isLoading) return null;

      return (
        <UserContext.Provider
          value={{ user, updateUserProfile: this.updateUserProfile }}
        >
          <WrappedComponent {...this.props} />
        </UserContext.Provider>
      );
    }
  }

  return WithAuth;
};

export default withAuth;
