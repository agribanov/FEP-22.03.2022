import React, { Component } from 'react';

export default class StudentForm extends Component {
    state = {
        name: '',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.onNewStudentNameChange}
                />
                <button>Save</button>
            </form>
        );
    }

    onNewStudentNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
            name: this.state.name,
        };

        this.props.onSave(newStudent);
    };
}
