//Responsible for view layer setup
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

import { Landing } from "./Landing";
const NewGoal = () => <h4>New Goal</h4>;
const Goals = () => <h4>My Goals</h4>;

class App extends Component {
  state = { user_id: null };

  async componentDidMount() {
    try {
      const res = await axios.get("/api/current_user");
      console.log("user is ", res);
      if (res.status == 200 && res.data) {
        this.setState({ user_id: res.data.googleId });
      } else {
        this.setState({ user_id: false });
      }
    } catch (e) {
      console.log("error: ", e);
      this.setState({ user_id: false });
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header user_id={this.state.user_id} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/goals" component={Goals} />
            <Route path="/goals/new" component={NewGoal} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
