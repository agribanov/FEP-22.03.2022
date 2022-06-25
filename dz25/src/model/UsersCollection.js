import EventEmitter from '../EventEmitter';
import UserModel from './UserModel';

export default class UsersCollection extends EventEmitter {
    constructor(apiUrl) {
        super();

        this.list = [];
        this._url = apiUrl;
    }

    fetchList() {
        return fetch(this._url)
            .then((res) => res.json())
            .then((data) => {
                this.list = data.map(this._wrapModel);
                this.trigger('update', this.list);
            });
    }

    // toggleTodo(todoId) {
    //     const todoItem = this.list.find(({ id }) => id == todoId);

    //     if (!todoItem) {
    //         return console.error('Id not found', todoId);
    //     }

    //     todoItem.isDone = !todoItem.isDone;

    //     return fetch(this._url + todoId, {
    //         method: 'PUT',
    //         body: JSON.stringify(todoItem),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    // }

    removeUser(userId) {
        // this.list = this.list.filter(({ id }) => id != todoId);
        // return fetch(this._url + todoId, {
        //     method: 'DELETE',
        // });
    }

    createUser(newUser) {
        return fetch(this._url, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                this.list.push(data);
                this.trigger('add', data);
            });
    }

    get(id) {
        return this.list.find((model) => model.id === id);
    }

    _wrapModel = (data) => {
        const model = new UserModel(this._url, data);
        model.on(
            'delete',
            () => (this.list = this.list.filter((m) => m !== model)),
        );

        return model;
    };
}
