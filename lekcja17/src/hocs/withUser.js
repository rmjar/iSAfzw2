import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "./withAuth";

const withUser = WrappedComponent => {
  class WithUser extends Component {
    render() {
      const {
        location: { pathname }
      } = this.props;

      return (
        <UserContext.Consumer>
          {({ user, updateUserProfile }) => {
            if (user && pathname === "/signin") {
              return <Redirect to="/" />;
            } else if (!user && pathname !== "/signin") {
              return <Redirect to="/signin" />;
            } else {
              return (
                <WrappedComponent
                  user={user}
                  updateUserProfile={updateUserProfile}
                  {...this.props}
                />
              );
            }
          }}
        </UserContext.Consumer>
      );
    }
  }

  return WithUser;
};

export default withUser;
