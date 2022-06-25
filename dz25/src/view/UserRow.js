import $ from 'jquery';
import EventEmitter from '../EventEmitter';
import { interpolate } from '../../../common/js/utils';

export default class UserRow extends EventEmitter {
    static template = `
        <div class="row">
        </div>
`;

    static userTemplate = `<div class="three columns">{{name}}</div>
    <div class="three columns">{{surname}}</div>
    <div class="three columns">{{email}}</div>
    <div class="three columns">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </div>`;

    static deleteButtonSelector = '.delete-btn';
    static editButtonSelector = '.edit-btn';
    constructor(model) {
        super();

        this._model = model;
        this._model.on('delete', this.deleteRow);
        this._model.on('update', this.updateRow);

        this.init();
    }

    init() {
        this.$el = $(UserRow.template);
        this.renderRow();
        this.$el.on('click', UserRow.deleteButtonSelector, () =>
            this._model.delete(),
        );
        this.$el.on('click', UserRow.editButtonSelector, () =>
            this.trigger('edit', this._model),
        );
    }

    renderRow() {
        this.$el.empty();
        this.$el.html(interpolate(UserRow.userTemplate, this._model));
    }

    deleteRow = () => {
        this.$el.remove();
    };

    updateRow = () => {
        this.renderRow();
    };
}
