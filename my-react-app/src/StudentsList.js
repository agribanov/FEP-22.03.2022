import React, { Component } from 'react';

export default class StudentsList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map((student) => (
                    <li
                        key={student.id}
                        onClick={() => this.props.onRemove(student.id)}
                    >
                        {student.name}
                    </li>
                ))}
            </ul>
        );
    }
}
