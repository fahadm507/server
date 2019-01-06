import React, { Component } from "react";
import M from "materialize-css";
import { Redirect } from "react-router-dom";

class NewGoal extends Component {
  state = {
    title: "",
    description: "",
    dueDate: new Date()
  };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
      M.Datepicker.init(elems, { defaultDate: new Date() });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleNewGoal(this.state);

    this.setState({
      title: "",
      description: "",
      dueDate: new Date()
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.newGoalCreated) {
      return <Redirect to="/goals" />;
    }
    return (
      <div className="container">
        <form className="col m12" name="newGoal" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8">
              <input
                placeholder=""
                id="goal_title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                className="validate"
              />
              <label htmlFor="goal_title">Goal title</label>
            </div>
            <div />
          </div>

          <div className="row">
            <div className="input-field col s8">
              <input
                id="due-date"
                name="dueDate"
                onChange={this.handleChange}
                value={this.state.dueDate}
                type="date"
                className="datepicker"
              />
              <label htmlFor="due_date">Pick a due date</label>
            </div>

            <div />
          </div>

          <div className="row">
            <div className="input-field col s8">
              <textarea
                id="goal-description"
                name="description"
                className="materialize-textarea"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <label htmlFor="description">Describe your goal</label>
            </div>
          </div>
          <div className="row">
            <div className="col s8">
              <button
                value="Submit"
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                <i className="material-icons right">Save</i>
              </button>
              <div />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewGoal;
