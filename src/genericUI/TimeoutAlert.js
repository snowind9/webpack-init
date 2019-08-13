import React from 'react';
import {Alert, Button} from 'reactstrap';

class TimeoutAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  render() {
    let showAlert = (time = 1000) => {
      this.setState({visible: true});
      setTimeout(() => {
        this.setState({visible: false});
      }, time)
    };

    return (<div>
      <Alert color="warning" isOpen={this.state.visible}>
        <strong>Holy guacamole!</strong>
        Best check yo self, you're not looking too good.
      </Alert>
      <Button color="danger" onClick={e => showAlert()}>visible</Button>
    </div>);
  }
}

export default TimeoutAlert;
