import React from "react";
import Component from "./component.jsx";
import ServiceTasks from "./../../../services/tasks";
import sendApirequest from "../../../utils/api.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id_task) {
    let obj = { id: id_task};
    console.log(obj);
    sendApirequest({
      url: "/api/tasks/delete/" + id_task,
      method: "PUT",
    })
      .then(res => {
        this.fetchTasks();
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchTasks() {
    console.log("fetchTasks()");
    // ServiceTasks.retrieveAll();
    sendApirequest({ url: "/api/tasks" })
      .then(res => {
        this.setState({ tasks: res });
      })
      .catch(err => {
        console.log(err);
        this.setState({ tasks: [] });
      });
  }

  componentDidMount() {
    console.log("ComponentDidMount()");
    this.fetchTasks();
    // this.setState({ tasks: localStorage.getItem("tasks") });
  }

  render() {
    return <Component tasks={this.state.tasks} handleDelete={this.handleDelete} />;
  }
}

export default Container;
