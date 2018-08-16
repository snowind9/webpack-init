import React from 'react';
import './inputComponent.scss';

class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <div className="input-prepend input-prepend--name">
    			<span className="add-on">{this.props.label}</span>
    			<input
            className="input-large ime-double"
            tabIndex={this.props.tabIndex}
            placeholder={this.props.placeholder}
            type="text"
            maxLength={this.props.maxLength}
            style={{"backgroundColor": "rgb(255, 204, 204)"}} />
  			</div>
      </div>
    );
  }
}

export default Input;
