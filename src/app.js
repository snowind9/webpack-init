import React from 'react';
import {connect} from 'react-redux';
import {getInitialNotes, addNewNote, removeNote} from './store/actions';
import Sample from './Sample';
import MySortableComponent from './MySortableComponent';


class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        update: true,
      };
    }

    update (e) {
      e.preventDefault();
      let update = !this.state.update;
      this.setState({'update': update})
    }

    overlay(e) {
      e.preventDefault();
      $('#overlay').css({display: 'block'})
    }

    componentWillMount() {
      this.props.getNotes();
    }

    render() {
      console.log('render');
      let state = this.state.update? 'true': 'false';
      let detail = this.props.note.map((item,index) => <p key={index}>{item.title}</p>);
        return (
          <div>
            <p>name:{this.props.name}</p>
            <div>detail:{detail}</div>
            <Sample value={state}/>
            <button onClick={e => this.update(e)}> button </button>
            <MySortableComponent />
            <div id= 'overlay' style={{display:`none`}}>overlay</div>
            <button onClick={e => this.overlay(e)}> button </button>
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
