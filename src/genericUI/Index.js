import React from 'react';
import Input from './InputComponent'

import AbsoluteWindow from './AbsoluteWindow';
import TimeoutAlert from './TimeoutAlert';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    }
  }

  render() {
    return (
      // [
      // <AbsoluteWindow key="1">
      //   {`${this.state.value}`}<br/>
      // </AbsoluteWindow>,
      // <button key="2" onClick={e => this.setState({
      //     value: !this.state.value
      //   })}>update</button>,
      <TimeoutAlert />
      // ]
  );
  }
}

export default Index;
