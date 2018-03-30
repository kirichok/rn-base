import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    View, Text,
    Animated,
    TextInput as RNTextInput,
} from 'react-native';

import {defFonts, defStyles} from '../../configs';
import {PT, font, value as styleValues} from './styles';
import Label from './Label';
import {Row} from "./Base";

// VALIDATOR
// Phone: /^[+\(]*[0-9]{1,3}[-\s\.\(\]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{7,10}$/g
// NEW: ^[+\(]*[0-9]{1,3}[-\s\.\(]{0,2}[0-9]{1,3}[)\s\-]{0,1}[-\s\./0-9]{7,10}$
// (541)754-3010
// +1-541-754-3010
// 1-541-754-3010
// 001-541-754-3010
// 191 541 754 3010
// +380(63)66-77-919
// 063-66-77-919
// (063) 66 77 919
// (063)-66-77-919


const defProps = {
    onChange: null,
    value: '',
    style: {},

    keyboard: 'default',
    secure: false,
    editable: true,
    focus: false
};

const defPropTypes = {
    onChange: PropTypes.func.isRequired,
    value: PT.numberOrString,
    style: PT.objectOrNumberOrArray,

    keyboard: PropTypes.string,
    secure: PropTypes.bool,
    editable: PropTypes.bool,
    focus: PropTypes.bool,
};

/**
 * Custom TextInput component
 * */

function Custom(props) {
    const {
        onChange,
        value,

        keyboard,
        secure,
        editable,
        focus,

        onFocus,
        onBlur,
        onKeyPress
        //ref
    } = props;

    const style = [styles.input, props.style];

    return <RNTextInput
        // ref={input => typeof ref === 'function' && ref(input)}
        value={'' + value}
        style={style}

        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}

        underlineColorAndroid={'transparent'}
        autoCapitalize={'none'}
        keyboardType={keyboard}

        autoCorrect={false}
        secureTextEntry={secure}
        editable={editable}
        autoFocus={focus}

        clearButtonMode={'while-editing'}
    />
}
Custom.defaultProps = defProps;
Custom.propTypes = defPropTypes;
Custom.displayName = 'TextInput';


class Labeled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: this.props.focus,
        };
    }

    onFocus = () => {
        this.setState({focused: true});
    };

    onBlur = () => {
        this.setState({focused: false});
    };

    render() {
        return <Label.Floating
            {...this.props.label}
            focused={this.state.focused}
        >
            <Custom
                {...this.props}
                onChange={() => {
                }}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            />
        </Label.Floating>;
    }
}

Labeled.defaultProps = {
    ...defProps,
    label: Label.Floating.defaultProps
};
Labeled.displayName = 'TextInput.Labeled';


class Masked extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: this.props.focus,
            value: ''
        };
    }

    onFocus = () => {
        this.setState({focused: true});
    };

    onBlur = () => {
        this.setState({focused: false});
    };

    render() {
        return <Row>
            <Text>{this.state.value}</Text>
            <Custom
                {...this.props}
                style={[this.props.style, {flex: 1}]}
                value={''}
                onChange={value => {
                    // this.setState(prev => ({value: prev.value}));
                }}
                onKeyPress={e => {
                    let {
                        value
                    } = this.state;

                    switch (e.nativeEvent.key){
                        case 'Backspace':
                            if (value) {
                                value = value.slice(0, -1);
                            }
                            break;

                        default:
                            value += e.nativeEvent.key
                    }
                    this.setState({value});
                }}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            />
        </Row>
    }
}

Masked.defaultProps = {
    ...defProps,
    mask: PropTypes.string
    //label: Label.Floating.defaultProps
};


const styles = {
    input: font.get,

    shadow: {
        textShadowColor: defStyles.text.shadow.color,
        textShadowOffset: defStyles.text.shadow.offset,
        textShadowRadius: defStyles.text.shadow.radius
    }
};


export default {Custom, Labeled, Masked}
