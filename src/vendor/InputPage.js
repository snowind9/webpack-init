import React from 'react';

class InputPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}

    this.add = this.add.bind(this);
  }

  add(e) {
    this.props.onSubmit(e);
  }

  render() {
    return (<div>
      <input text='value' ref='input'></input>
      <label className='pure-button pure-button-primary' onClick={e => this.add(this.refs.input.value)}>Add</label>
    </div>)
  }
}

export default InputPage;
