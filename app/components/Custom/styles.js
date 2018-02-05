import _ from 'lodash';
import {StyleSheet, Dimensions} from 'react-native';
import config, {defStyles, defFonts} from '../../configs';
import PropTypes from 'prop-types';

/**
 * Defined own pairs of PropTypes
 * */

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
    numberOrString: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
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

export const font = {
    _value: {
        fontFamily: config.isIOS
            ? 'System'
            : 'sans-serif',
        fontSize: value(defFonts.size.default),
        fontWeight: 'normal',
        color: defFonts.color.default
    },

    get sm() {
        return this.size(defFonts.size.sm);
    },

    get md() {
        return this.size(defFonts.size.md);
    },

    get lg() {
        return this.size(defFonts.size.lg);
    },

    get xl() {
        return this.size(defFonts.size.xl);
    },

    get bold() {
        return this.weight('bold');
    },

    size(size) {
        this._value.fontSize = value(size);
        return this;
    },

    weight(weight) {
        this._value.fontWeight = weight;
        return this;
    },

    color(color) {
        this._value.color = color;
        return this;
    },

    get get() {
        const res = {...this._value};
        this._value = this.def();
        return res;
    },

    def() {
        return {
            fontFamily: config.isIOS
                ? 'System'
                : 'sans-serif',
            fontSize: value(defFonts.size.default),
            fontWeight: 'normal',
            color: defFonts.color.default
        }
    }
};