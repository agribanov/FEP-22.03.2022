import './App.css';

import React, { Component } from 'react';

import StudentForm from './StudentForm';
import StudentsList from './StudentsList';

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                name: 'Alex',
                age: 22,
            },
            {
                id: 2,
                name: 'Bob',
                age: 22,
            },
            {
                id: 3,
                name: 'John',
                age: 22,
            },
            {
                id: 4,
                name: 'Charly',
                age: 22,
            },
        ],
    };

    render() {
        return (
            <>
                <StudentsList
                    list={this.state.list}
                    onRemove={this.removeStudent}
                />
                <StudentForm onSave={this.createStudent} />
            </>
        );
    }

    removeStudent = (id) => {
        this.setState({
            list: this.state.list.filter((student) => student.id !== id),
        });
    };

    createStudent = (newStudent) => {
        this.setState({
            list: [...this.state.list, { ...newStudent, id: Date.now() }],
        });
    };
}
