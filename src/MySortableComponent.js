import React from 'react';
import Sortable from './Sortable';
// And here's how to use the <Sortable /> component:
class MySortableComponent extends React.Component {
    constructor(props) {
        super(props);

        // Use this flag to disable/enable the <Sortable />
        this.state = {
          isEnabled: true,
          list: ['ReactJS', 'JSX', 'JavaScript', 'jQuery', 'jQuery UI'],
        };

        this.toggleEnableability = this.toggleEnableability.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    toggleEnableability() {
        this.setState({ isEnabled: ! this.state.isEnabled });
    }

    handleOnChange(event, ui) {
        // Attach any custom behavior here
        console.log('DOM changed!', event, ui);
    }

    addItem() {
      this.setState({ list: ["added item",...this.state.list, ] });
    }

    render() {
        return (
            <div>
                <button type="button"
                    onClick={this.toggleEnableability}>
                    Toggle enable/disable
                </button>
                <Sortable
                    opacity={0.8}
                    data={this.state.list}
                    enable={this.state.isEnabled}
                    onChange={this.handleOnChange} />
                <button onClick={this.addItem}> add </button>
            </div>
        );
    }
}

export default MySortableComponent;
