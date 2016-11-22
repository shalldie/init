import React from 'react';
import addons from 'react-addons';

export default class Button extends React.Component {
    /**
     * 默认参数
     * 
     * @static
     * 
     * @memberOf Button
     */
    static defaultProps = {
        name: 'tom'
    }

    /**
     * 组件参数要求
     * 
     * @static
     * 
     * @memberOf Button
     */
    static propTypes = {
        name: React.PropTypes.string.isRequired
    }

    /**
     * 默认状态
     * 
     * 
     * @memberOf Button
     */
    state = {
        hasLiked: false
    }

    constructor(props) {
        super(props);

        this.state.name = props.name;
    }

    /**
     * 组件 dom 已经插入
     * 
     * 
     * @memberOf Button
     */
    componentDidMount() {

    }

    handleOnChange(ex) {
        this.setState({
            name: ex.target.value
        });
    }

    handleToggleLike() {
        this.setState({
            hasLiked: !this.state.hasLiked
        })
    }

    render() {
        let cx = addons.classSet;

        let zanClass = cx({
            hello: true,
            world: this.state.name.length > 5
        });

        return (
            <div>
                <h4>Hello~ {this.state.name}</h4>
                <input className={zanClass} type="text" value={this.state.name} onChange={this.handleOnChange.bind(this)} />
                <p>{this.state.hasLiked ? '取消赞' : '赞一个'}</p>
                <button onClick={this.handleToggleLike.bind(this)} type="button">toggleState</button>
            </div>
        );
    }
}