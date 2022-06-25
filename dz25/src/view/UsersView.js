import $ from 'jquery';
import UsersForm from './UsersForm';
import UsersList from './UsersList';

export default class UsersView {
    static template = '<div class="u-full-width u-full-height"></div>';
    constructor($container, collection) {
        this._collection = collection;
        this.init();
        this.$el.appendTo($container);

        this._$listView = new UsersList(collection);
        this.$el.append(this._$listView.$el);

        this._$listView.on('edit', this.editModel);

        this._$formView = new UsersForm();
        this.$el.append(this._$formView.$el);

        this._$formView.on('save', this.saveData);
    }

    init() {
        this.$el = $(UsersView.template);
    }

    saveData = (data) => {
        if (data.id) {
            const model = this._collection.get(data.id);

            model.set(data);

            model.save();
        } else {
            this._collection.createUser(data);
        }
    };

    editModel = (model) => {
        this._$formView.fill(model);
    };
}
