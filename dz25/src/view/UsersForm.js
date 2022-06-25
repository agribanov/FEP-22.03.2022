import $ from 'jquery';
import EventEmitter from '../EventEmitter';

export default class UsersForm extends EventEmitter {
    static template = `
        <form class="row">
            <div class="three columns"><input type="hidden" name="id" /><input type="text" name="name" /></div>
            <div class="three columns"><input type="text" name="surname" /></div>
            <div class="three columns"><input type="text" name="email" /></div>
            <div class="three columns"><button type="submit">Save</button></div>
        </form>`;
    constructor() {
        super();

        this.init();
    }

    init() {
        this.$el = $(UsersForm.template);
        this.$el.on('submit', (e) => {
            e.preventDefault();

            const formData = this._getFormData();

            this.trigger('save', formData);
            this.reset();
        });

        this._$inputs = this.$el.find('input');
    }

    _getFormData() {
        const formData = {};

        this.$el
            .serializeArray()
            .forEach(({ name, value }) => (formData[name] = value));

        return formData;
    }

    fill(model) {
        this._$inputs.each((_, input) => {
            input.value = model[input.name];
        });
    }

    reset() {
        this._$inputs.each((_, input) => {
            input.value = '';
        });
    }
}
