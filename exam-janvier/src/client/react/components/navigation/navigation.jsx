import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

//CHANGE WHAT MUST BE CHANGED TO HANDLE FAKE AUTHENTICATION

class NavigationClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthentified: true };

    this.isAuthentified = this.isAuthentified.bind(this);
    this.toggleAuthentication = this.toggleAuthentication.bind(this);
  }

  isAuthentified() {
    console.log("isAuthentified => " + this.state.isAuthentified);
    localStorage.setItem("isAuthentified", this.state.isAuthentified);
    return this.state.isAuthentified;
  }

  toggleAuthentication() {
    this.setState({ isAuthentified: !this.state.isAuthentified });
    localStorage.setItem("isAuthentified", !this.state.isAuthentified);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/tasks">
            Tasks
          </Nav.Link>
          <Nav.Link as={Link} to="/addTask">
            Add
          </Nav.Link>
        </Nav>
        {/* ADD HERE A CHECKBOX TO TOGGLE AUTHENTICATION ON/OFF*/}
        <Form.Check
          type="checkbox"
          label="authentified"
          checked={this.isAuthentified()}
          onChange={this.toggleAuthentication}
        />
      </Navbar>
    );
  }
}

export default NavigationClassComponent;
