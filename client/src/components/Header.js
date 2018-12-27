import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.user_id) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log("props for header component", this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            className="left brand-logo"
            to={this.props.user_id ? "/goals" : "/"}
          >
            SmartGoals
          </Link>

          <ul className="right">
            {this.props.user_id && (
              <React.Fragment>
                <li>
                  <a href="/goals">My Goals</a>
                </li>
                <li>
                  <a href="/goals/new">New Goal</a>
                </li>
              </React.Fragment>
            )}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
