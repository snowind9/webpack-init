import React from 'react';

export default class Border extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    let windowBorder = {
      display: 'flex',
      flex: '1',
      background: this.props.borderColor || '#cecece',
      height: '100%'
    }

    let content = {
      display: 'flex',
      flex: '1',
      background: this.props.background || '#ffffff',
      margin: '.5em'
    }
    return (<div style={windowBorder}>
      <div style={content}>
        {this.props.children}
      </div>
    </div>);
  }
}
