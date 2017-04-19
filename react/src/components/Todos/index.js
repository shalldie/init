import React, { Component } from 'react';
import classNames from 'classnames';

import './index.less';

export default class Todos extends Component {
    static defaultProps = {
        list: []
    }

    static propTypes = {
        list: React.PropTypes.array.isRequired
    }

    state = {
        stateType: 0
    }

    constructor(props) {
        super(props);
        this.state.list = props.list;
    }

    handleAdd() {
        let list = this.state.list;
        list.push({
            text: this.refs.tb.value,
            state: 1
        });
        this.setState({ list });
    }

    handleToggleState(index) {
        let list = this.state.list;
        list[index].state = Math.abs(list[index].state - 1);
        this.setState({ list });
    }

    handleCheckState(stateType) {
        this.setState({ stateType });
    }

    render() {
        let ulClass = classNames({
            "todos-ul": true
        });

        let lis = this.state.list.map((item, index) => {
            if (this.state.stateType == 0 || (this.state.stateType - 1 == item.state)) {
                return (
                    <li key={index}
                        onClick={() => this.handleToggleState(index)}
                        style={{ textDecoration: item.state == 1 ? "none" : "line-through" }}
                    >
                        {item.text}
                    </li>)
            }
        });

        return (
            <div>
                <div>
                    <input ref="tb" type="text" />
                    <button onClick={() => this.handleAdd()} type="button">ADD</button>
                </div>
                <div>
                    <button onClick={() => this.handleCheckState(0)} type="button">All</button>
                    <button onClick={() => this.handleCheckState(2)} type="button">Active</button>
                    <button onClick={() => this.handleCheckState(1)} type="button">Deleted</button>
                </div>
                <ul className={ulClass}>
                    {lis}
                </ul>
            </div>
        );
    }
}

