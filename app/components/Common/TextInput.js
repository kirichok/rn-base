import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    Animated,
    TextInput as RNTextInput,
} from 'react-native';

import {defStyles} from '../../configs';
import {PT} from './styles';
import Label from './Label';

/**
 * Custom TextInput component
 * */

function Custom(props) {
    const {
        onChange,
        text,

        keyboard,
        secure,
        editable,
        focus,

        onFocus,
        onBlur,
    } = props;

    const style = [styles.input, props.style];

    return <RNTextInput
        value={'' + text}
        style={style}

        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}

        underlineColorAndroid={'transparent'}
        autoCapitalize={'none'}
        keyboardType={keyboard}

        autoCorrect={false}
        secureTextEntry={secure}
        editable={editable}
        autoFocus={focus}
    />
}

class Label1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
    }

    onFocus = () => {
        this.setState({focused: true});
    };

    onBlur = () => {
        this.setState({focused: false});
    };

    render() {
        return <Label.Floating
            focused={this.state.focused}
            text={{
                inline: 'Inline Label',
                focus: 'Label',
            }}

            floating={defStyles.label}
        >
            <Custom
                onChange={() => {
                }}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            />
        </Label.Floating>;
    }
}


const styles = {
    input: {},

};

const defProps = {
    onChange: null,
    text: '',
    style: {},

    keyboard: 'default',
    secure: false,
    editable: true,
    focus: false
};

const defPropTypes = {
    onChange: PropTypes.func.isRequired,
    text: PT.numberOrString,
    style: PT.objectOrNumberOrArray,

    keyboard: PropTypes.string,
    secure: PropTypes.bool,
    editable: PropTypes.bool,
    focus: PropTypes.bool,
};

Custom.defaultProps = defProps;
Custom.propTypes = defPropTypes;

export default {Custom, Label1}
