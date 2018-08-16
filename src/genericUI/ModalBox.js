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

  toggle(children) {
    this.setState({
      open: !this.state.open,
      children: children,
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
                   {this.state.children}
                </div>
            </CSSTransition>
          </div>
        )}
      </CSSTransition>
    );
  }
}

export default ModalBox;
