import React, { Component } from 'react';

export default class NewTodoForm extends Component {
    state = {
        title: '',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="ten columns">
                        <input
                            type="text"
                            className="u-full-width"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                        <span
                            id="errorContainer"
                            className="error hidden"
                        ></span>
                    </div>
                    <div className="two columns">
                        <button
                            type="submit"
                            id="addBtn"
                            className="u-full-width"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        );
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: this.state.title,
        });

        this.setState({
            title: '',
        });
    };
}
