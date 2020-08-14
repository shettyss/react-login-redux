import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class HomePage extends React.Component {
  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        <p>Welcome</p>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
