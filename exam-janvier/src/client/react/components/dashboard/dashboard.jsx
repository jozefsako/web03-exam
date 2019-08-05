import React from 'react';
import { Alert } from 'react-bootstrap';

class DashboardClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Alert variant='info'>
        Hello !
        </Alert>
    );
  }
}

export default DashboardClassComponent;