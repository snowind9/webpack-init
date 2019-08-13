import React from 'react';
import Sortable from './Sortable';
import uuid from 'uuid';
import InputPage from './InputPage';

// And here's how to use the <Sortable /> component:
class MySortableComponent extends React.Component {
  constructor(props) {
    super(props);

    // Use this flag to disable/enable the <Sortable />
    this.state = {
      isEnabled: true,
      list: [
        {
          item: 'ReactJS',
          id: uuid()
        }, {
          item: 'JSX',
          id: uuid()
        }, {
          item: 'JavaScript',
          id: uuid()
        }, {
          item: 'jQuery',
          id: uuid()
        }, {
          item: 'jQuery UI',
          id: uuid()
        }
      ]
    };

    this.toggleEnableability = this.toggleEnableability.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleEnableability() {
    this.setState({
      isEnabled: !this.state.isEnabled
    });
  }

  handleOnChange(items) {
    let newSortItems = items.map(item => {
      let id = this.state.list.find(value => value.item === item).id;
      return {item, id}
    });

    this.setState({list: newSortItems});
  }

  addItem(e) {
    e.preventDefault();
    this.props.onClick(<InputPage onSubmit={this.onSubmit} />);
  }

  onSubmit(value) {
    this.props.onClick();
    let id = uuid()
    this.setState({
      list: [
        {
          item: value,
          id
        },
        ...this.state.list
      ]
    });
  }

  render() {
    return (<div>
      <button type="button" onClick={this.toggleEnableability}>
        Toggle enable/disable
      </button>
      <Sortable opacity={0.8} data={this.state.list} enable={this.state.isEnabled} onChange={this.handleOnChange} onClick={(e) => this.props.onClick(e)}/>
      <button onClick={(e) => this.addItem(e)}>
        add
      </button>
    </div>);
  }
}

export default MySortableComponent;
