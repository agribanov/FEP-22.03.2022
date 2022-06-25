import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import UserRow from './UserRow';

export default class UsersList extends EventEmitter {
    static template = `<div class="list">
        <div class="row">
            <div class="three columns">Name</div>
            <div class="three columns">Surname</div>
            <div class="three columns">Email</div>
            <div class="three columns">Actions</div>
        </div>
        <div class="list-container"></div>
    </div>`;

    static containerSelector = '.list-container';

    constructor(collection) {
        super();
        this._collection = collection;

        this._collection.on('update', this.renderList);
        this._collection.on('add', this.renderUser);
        this.init();
    }

    init() {
        this.$el = $(UsersList.template);
        this._$listContainer = this.$el.find(UsersList.containerSelector);
    }

    renderList = (list) => {
        console.log(list);
        this._$listContainer.append(
            list.map((model) => this._wrapRow(model).$el),
        );
    };

    renderUser = (model) => {
        this._$listContainer.append(this._wrapRow(model).$el);
    };

    _wrapRow(model) {
        const rowView = new UserRow(model);
        rowView.on('edit', (model) => this.trigger('edit', model));

        return rowView;
    }
}
