//Responsible for view layer setup
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import MyGoals from "./goals/MyGoals";
import NewGoal from "./goals/NewGoal";
import M from "materialize-css";

import { Landing } from "./Landing";

class App extends Component {
  state = {
    user_id: null,
    goals: [
      { title: "Get a great job in 3 months", id: 1 },
      { title: "Lose 50 pounds in 6 months", id: 2 },
      { title: "Build a goals app in 6 months", id: 3 },
      { title: "Become more productive and valuable", id: 4 }
    ],
    newGoalCreated: false
  };

  async componentDidMount() {
    try {
      const res = await axios.get("/api/current_user");
      if (res.status == 200 && res.data) {
        this.setState({
          user_id: res.data.googleId
        });
      } else {
        this.setState({
          user_id: false
        });
      }
    } catch (e) {
      console.log("error: ", e);
      this.setState({
        user_id: false
      });
    }
    //Initialize Materialize javascript components
    M.AutoInit();
  }

  handleNewGoal = newGoal => {
    this.setState({
      goals: [...this.state.goals, newGoal],
      newGoalCreated: true
    });
  };

  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            {this.state.user_id ? <Redirect to="/goals" /> : <Header />}
            <Route exact path="/" component={Landing} />

            <Route
              exact
              path="/goals"
              component={() => <MyGoals goals={this.state.goals} />}
            />

            <Route exact path="/goals/:id" />

            <Route
              exact
              path="/goals/new"
              component={() => (
                <NewGoal
                  handleNewGoal={this.handleNewGoal}
                  newGoalCreated={this.state.newGoalCreated}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
