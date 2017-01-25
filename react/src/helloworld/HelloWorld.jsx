import React from 'react';

export default class HelloWorld extends React.Component {

    static defaultProps = {
        message: 'hello world'
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired
    }

    state = {
        visible: true
    }

    constructor(props) {
        super(props);
        this.state.name = props.name;
    }

    handleOnToggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        let displayVal = this.state.visible ? "block" : "none";
        return (
            <div>
                <button onClick={this.handleOnToggle.bind(this)} type="button">toggle</button>
                <h1 style={{ display: displayVal }}>{this.props.message} {this.state.name}</h1>
            </div>
        );
    }
}