import _ from 'lodash';
import React from 'react';
import {Text, View} from 'react-native';

const _style = {
    component: MyComponent.builder.style.button.fontWeight('bold').bold.get
};

function getStyles(defauts, props, fields) {
    if (_.isArray(fields)) {
        return _.map(fields, field => getField(defaults, props, field));
    } else if (_.isString(fields)) {
        return getField(defaults, props, fields);
    } else {
        throw new Error('Wrong arguments for getting styles');
    }
}

function getField(defaults, props, field) {
    return _.has(props, field)
        ? [defaults[field], props[field]]
        : defaults[field]
}

function MyComponent({style, text}) {
    const {
        component
    } = getStyles(_style, style, ['component']);
    return <View style={component}>
        <Text></Text>
    </View>
}

MyComponent.builder = {
    get style() {
        return {
            button: textStyles
        };
        // return new textStyles();
    }
};

class textStyles {
    constructor() {
        this.style = {
            fontWeight: 'normal'
        }
    }

    fontWeigth = value => {
        this.style.fontWeight = value;
        return this;
    };

    get bold() {
        this.fontWeigth('bold');
        return this;
    }

    get get() {
        return this.style;
    }
}

// console.log((new __textStyles()).bold.get);

const defaults = {
    fontWeight: 'normal'
};

// const textStyles = {
//     _value: {...defaults},
//
//     fontWeight(value = 'normal') {
//         this._value.fontWeight = value;
//         return this;
//     },
//
//     get bold() {
//         this.fontWeight('bold');
//         return this;
//     },
//
//     get get() {
//         const value = this._value;
//         this._value = {...defaults};
//         return value;
//     }
// };

console.log(MyComponent.builder.style.button.fontWeight('bold').bold.get);


export default