import React from 'react';
import {connect} from 'react-redux';
import {getInitialNotes, addNewNote, removeNote} from './store/actions';

class App extends React.Component {

    componentWillMount() {
      this.props.getNotes();
    }

    render() {
        return (this.props.name);
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNotes: () => dispatch(getInitialNotes()),

})

const mapStateToProps = state => ({
  notes: state.notes,
  name:state.name
})

export default connect(state => state,mapDispatchToProps)(App);
