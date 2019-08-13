import React from 'react';
import ReactDOM from 'react-dom';

import {subscribeToTimer, addNumber_on, addNumber_emit} from './subscribeToTimer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet',
      number: 0
    };
    // subscribeToTimer((err, timestamp) => this.setState({timestamp}));

    addNumber_on(number => this.setState({number}));
  }

  onClick() {
    addNumber_emit(this.state.number + 1);
  }

  render() {
    return (<div>
      <h1>This is the number value: {this.state.number}</h1>
      <input/>
      <button onClick={() => this.onClick()}>
        button
      </button>
    </div>);
  }
}

export default App;
