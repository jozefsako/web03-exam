import React from "react";
import { Alert } from "react-bootstrap";

class DashboardClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Alert variant="info">Hello ! {localStorage.getItem("user")} </Alert>
    );
  }
}

export default DashboardClassComponent;
