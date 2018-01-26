import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this._handleClick=this._handleClick.bind(this)
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is hom~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={this._handleClick}>自增</button>
            </div>
        )
    }
}