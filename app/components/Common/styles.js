import _ from 'lodash';
import {StyleSheet, Dimensions} from 'react-native';
import config from '../../configs';
import PropTypes from 'prop-types';

export const PT = {
    objectOrNumber: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
    ]),

    objectOrNumberOrArray: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array,
    ]),
};

/**
 * Window size
 * */

export const dimensions = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

/**
 * Default color
 * */

export const color = {
    background: '#e4e4e4',
    text: '#222',

    button: {
        background: '#696969',
        text: '#eee',
    },

    label: {
        text: '#555'
    }
};

/**
 * Create cached styles
 * */

const baseStyles = {
    container: {}
};

export function create(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides});
}

/**
 * Stretch values based on window size
 */

const CONST_WIDTH = 375;
const DELTA = dimensions.width / CONST_WIDTH;
const calcSize = size => Math.round(DELTA * size);
const values = {};

export const value = (v) => {
    if (typeof v !== 'number') {
        return 0;
    }
    if (!_.has(values, v)) {
        values[v] = config.isPhone ? calcSize(v) : v;
    }
    return values[v];
};

/**
 * Get font.
 * Note: at the end need call get.
 *
 * Examples:
 * font.xl.bold.get return for iOS:
 * {
 *      fontFamily: 'System',
 *      fontSize: 40,
 *      fontWeight: 'bold',
 *      color: '#4a4a4a'
 * }
 *
 * font.get return for iOS (gets default):
 * {
 *      fontFamily: 'System',
 *      fontSize: 16,
 *      fontWeight: 'normal',
 *      color: '#4a4a4a'
 * }
 * */

const FONT_SIZE_SM = 10,
    FONT_SIZE_DEF = 16,
    FONT_SIZE_MD = 20,
    FONT_SIZE_LG = 30,
    FONT_SIZE_XL = 40;

export const font = {
    _value: {
        fontFamily: config.isIOS
            ? 'System'
            : 'sans-serif',
        fontSize: value(FONT_SIZE_DEF),
        fontWeight: 'normal',
        color: '#4a4a4a'
    },

    get sm() {
        return this.size(FONT_SIZE_SM);
    },

    get md() {
        return this.size(FONT_SIZE_MD);
    },

    get lg() {
        return this.size(FONT_SIZE_LG);
    },

    get xl() {
        return this.size(FONT_SIZE_XL);
    },

    get bold() {
        return this.weight('bold');
    },

    size(value) {
        this._value.fontSize = value;
        return this;
    },

    weight(value) {
        this._value.fontWeight = value;
        return this;
    },

    color(value) {
        this._value.color = value;
        return this;
    },

    colorDefault(value) {
        this._value.color = color;
        return this;
    },

    get get() {
        const res = this._value;
        this._value = this.def();
        return res;
    },

    def() {
        return {
            fontFamily: config.isIOS
                ? 'System'
                : 'sans-serif',
            fontSize: value(FONT_SIZE_DEF),
            fontWeight: 'normal',
            color: '#4a4a4a'
        }
    }
};