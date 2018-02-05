import Axios from 'axios';
import qs from 'qs';

import {createAction} from 'redux-actions';
import {toAPI} from '../../utils';
import config from '../../configs'

export {createAction};

const PENDING = new RegExp('.pending', 'gi'),
    FULFILLED = new RegExp('.fulfilled', 'gi'),
    REJECTED = new RegExp('.rejected', 'gi');

export default class BaseModule {
    constructor(url, state) {
        this.name = this.constructor.name;
        this.url = config.SERVER_API + url;
        // TODO: Where JWT need save?
        this.jwt = '';
        this.initalState = {
            loading: false,
            error: null,
            ...state
        };
        this.createActions();
    }

    createActions() {
        this.ACTIONS = {
            GET: `${this.name}/get`,
            POST: `${this.name}/post`,
            PUT: `${this.name}/put`,
            DELETE: `${this.name}/delete`,
        };

        this.GET = createAction(this.ACTIONS.GET, async (data) => await this.send('GET', data));
        this.POST = createAction(this.ACTIONS.POST, async (data) => await this.send('POST', data));
        this.PUT = createAction(this.ACTIONS.PUT, async (data) => await this.send('PUT', data));
        this.DELETE = createAction(this.ACTIONS.DELETE, async (data) => await this.send('DELETE', data));

        /*this.GET = data => async (dispatch, getState) => {
            dispatch({
                type: `${this.name}/get`,
                payload: await this.send('GET', data)
            });
        };*/
    };

    initAction(name, handle) {
        this.ACTIONS[name.toUpperCase()] = `${this.name}/${name.toLowerCase()}`;
        this[name.toUpperCase()] = createAction(this.ACTIONS[name.toUpperCase()], handle);
    }

    async send(method, data = {}, additionalHeaders = {}) {
        const isFormData = data && data instanceof FormData,
            headers = {
                'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
                ...additionalHeaders
            };

        // TODO: Where JWT need save?
        if (this.jwt) {
            headers['AUTHORIZATION'] = this.jwt;
        }

        return await toAPI(Axios({
            method,
            headers,
            url: this.url,

            params: method === 'GET' ? (data ? data : undefined) : undefined,
            data: method !== 'GET' ? (isFormData ? data : JSON.stringify(data)) : undefined,

            paramsSerializer: function (params) {
                return qs.stringify(params);
            },
        }));
    };

    onPending(state, type, payload) {
        return {};
    };

    onFulfilled(state, type, payload) {
        return {};
    };

    onRejected(state, type, payload) {
        return {};
    };

    getReducer(state = this.initalState, {type, payload}) {
        switch (true) {
            case type.match(PENDING):
                return {
                    ...state,
                    ...this.onPending(state, type.replace(PENDING, ''), payload),
                    loading: true,
                    error: false
                };

            case type.match(FULFILLED):
                return {
                    ...state,
                    ...this.onFulfilled(state, type.replace(FULFILLED, ''), payload),
                    loading: false,
                    error: false
                };

            case type.match(REJECTED):
                return {
                    ...state,
                    ...this.onRejected(state, type.replace(REJECTED, ''), payload),
                    loading: false,
                    error: payload
                };
        }
        return state;
    }
}

class EventModule extends BaseModule {
    constructor() {
        super('/events', {});
    }

    createActions() {
        super.createActions();
    }

    onFulfilled(state, type, payload) {
        return {};
    }

    getReducer(state, {type, payload}) {
        switch (type) {
            //...
        }

        return super.getReducer();
    }
}

new EventModule();