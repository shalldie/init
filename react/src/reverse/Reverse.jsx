import React from 'react';

export default class Reverse extends React.Component {

    static defaultProps = {
        message: 'hello world'
    }

    static propTypes = {
        message: React.PropTypes.string
    }

    state = {

    }

    constructor(props) {
        super(props);
        this.state.message = this.props.message
    }

    handleOnReverse() {
        let msg = this.state.message.split('').reverse().join('');
        this.setState({
            message: msg
        });
    }

    handleOnInput() {
        let msg = this.refs.testInput.value;
        this.setState({
            message: msg
        });
    }

    render() {

        return (
            <div>
                <button onClick={this.handleOnReverse.bind(this)}>Reverse</button>
                <h1>{this.state.message}</h1>
                <input ref="testInput" onChange={this.handleOnInput.bind(this)} type="text" value={this.state.message} />
            </div>
        );
    }
}