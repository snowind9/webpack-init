import React from 'react';
import {connect} from 'react-redux';
import {getInitialNotes, addNewNote, removeNote} from './store/actions';
import Sample from './Sample';
import MySortableComponent from './vendor/MySortableComponent';
import ModalBox from './genericUI/ModalBox';
import TodoList from './sample/TodoList';
import CSSTransitionExample from './sample/CSSTransitionExample';

import PureCssApp from './genericUI/PureCssApp';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        update: false,
        detailContent: "",
      };

      this.popup = this.popup.bind(this);
    }

    update (e) {
      e.preventDefault();
      let update = !this.state.update;
      this.setState({'update': update});
    }

    overlay(e) {
      e.preventDefault();
      $('#overlay').css({display: 'block'})
    }

    componentWillMount() {
      this.props.getNotes();
    }

    popup(value) {
      let detailContent = (<div>{this.props.note[value].title}</div>);
      this.setState({detailContent});
      this.refs.modal.show();
    }

    render() {
      let state = this.state.update ? 'true': 'false';
      let detail = this.props.note.map(
        (item, index) =>
          <li key={index} onClick={e => this.popup(index)}>
            {item.title}
          </li>
      );
        return (
          <div>
            <form className="pure-form pure-form-aligned">
              <fieldset>
                <div className="pure-control-group">
                  <label>Name</label>
                  <span>{this.props.name}</span>
                </div>

                <label>Detail List</label>
                <ul>
                  {detail}
                </ul>

                <Sample value={state}/>
                <button onClick={e => this.update(e)}> change </button>
                <MySortableComponent />
                <div id= 'overlay' style={{display:`none`}}>overlay</div>
                <button className='pure-u-1-3 pure-button button-f pure-button-primary' onClick={e => this.overlay(e)}> button </button>
                <ModalBox ref="modal">
                  {this.state.detailContent}
                </ModalBox>
              </fieldset>
            </form>
          </div>
        );
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNotes: () => dispatch(getInitialNotes()),
})

const mapStateToProps = state => ({
  note: state.note,
  name: state.name,
})

export default connect(state => state,mapDispatchToProps)(App);
