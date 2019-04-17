import React, { Component } from 'react';
import {connect} from "react-redux";
import {addReminder, deleteReminder, clearReminders} from "./store/actions"
import './App.css';
import Reminders from "./Reminders";

class App extends Component {
    txtReminder = null;
    txtDueDate = null;

    constructor(props) {
        super(props);
        this.txtReminder = React.createRef();
        this.txtDueDate = React.createRef();
    }

    onAddReminder = () => {
        this.props.addReminder(this.txtReminder.current.value, this.txtDueDate.current.value);
    };
    onDeleteReminder = (id) => {
        this.props.deleteReminder(id);
    };
    onClearClicked = () => {
        this.props.clearReminders();
    };
  render() {
    return (
      <div className="App">
          <div className={"title"}>
              Reminder Pro
          </div>
          <div className={"form-inline reminder-form"}>
              <div className={"form-group"}>
                  <input ref={this.txtReminder} className={"form-control"} placeholder={"I have to..."}/>
                  <input ref={this.txtDueDate} type={"datetime-local"} className={"form-control"}
                         placeholder={"due date..."}/>
              </div>
              <button onClick={this.onAddReminder} type={"button"} className={"btn btn-success"}>Add Reminder</button>
          </div>
          <Reminders reminders={this.props.reminders} clicked={this.onDeleteReminder}
                     clearClicked={this.onClearClicked}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        reminders: state
    }
};

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
