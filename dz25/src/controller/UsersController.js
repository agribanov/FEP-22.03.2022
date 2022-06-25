import { API_URL } from '../config';
import UsersCollection from '../model/UsersCollection';
import UsersView from '../view/UsersView';

export default class UsersController {
    constructor($container) {
        console.log('controller started', $container);

        this._collection = new UsersCollection(API_URL);
        this._view = new UsersView($container, this._collection);

        this._collection.fetchList();
    }
}
