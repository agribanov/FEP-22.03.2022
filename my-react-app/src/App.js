import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    state = {
        name: 'Alex',
        showName: 'true',
    };

    render() {
        return (
            <div>
                <br />
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.onNameInputChange}
                />
                <select>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.onNameInputChange}
                />
                = RESULT
            </div>
        );
    }

    onButtonClick = () => {
        this.setState({
            showName: !this.state.showName,
        });
        console.log('aksdf', this);
    };

    onNameInputChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };
}
