import Base, {createAction} from './base';
import {toAPI} from "../../utils";

class ExampleModule extends Base {
    constructor() {
        super('/example', {
            data: []
        });
    }

    createActions() {
        super.createActions();

        this.initAction('ME', async (data) => await this.send('GET', data));

        // this.ACTIONS['ME'] = `${this.name}/me`;
        // this.ME = createAction(this.ACTIONS['ME'], async (data) => await this.send('GET', data));
    }

    onFulfilled(state, type, payload) {
        switch (type) {
            case this.ACTIONS.ME:
                break;
        }

        return {};
    }

    getReducer(state, {type, payload}) {
        switch (type) {
            //...
        }

        return super.getReducer();
    }
}

new ExampleModule ();