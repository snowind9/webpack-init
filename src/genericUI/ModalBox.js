import React from 'react';

import './modalBox.scss';
import { CSSTransition } from 'react-transition-group';
class ModalBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open : false,
    }
  }

  show() {
    this.setState({
      open: true,
    })
  }

  render () {
    return (
      <CSSTransition
        in={this.state.open}
        timeout={100}
        classNames="modal"
        unmountOnExit
        onExited={() => {this.setState({open: false})}}>
        {state=> (
          <div className={`modal`}>
          <label className="modal__bg"></label>
            <CSSTransition in={state === 'entered'} timeout={300} classNames="content" unmountOnExit>
                <div className={`modal__inner`} >
                  <label className="modal__close" onClick={e => this.setState({open: false})}></label>
                   {this.props.children}
                </div>
            </CSSTransition>
          </div>
        )}
      </CSSTransition>
    );
  }
}

export default ModalBox;
