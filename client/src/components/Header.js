import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav class="top-nav">
          <div className="nav-wrapper">
            <Link className="left brand-logo" to="/">
              SmartGoals
            </Link>

            <ul className="right">
              <li>
                <a href="/auth/google">Login with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
