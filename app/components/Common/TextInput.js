import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    Animated,
    TextInput as RNTextInput,
} from 'react-native';
import {Row, Col} from "./Base";
import {PT, value} from './styles';

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

class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,

        }
    }

    componentWillMount() {
        this._focused = new Animated.Value(this.getText() ? 0 : 1);
    }

    componentDidUpdate() {
        Animated.timing(this._focused, {
            toValue: this.state.focused ? 1 : 0,
            duration: 200,
        }).start();
    }

    getText = () => '' + this.props.text;

    onFocus = () => {
        this.setState({focused: true});
    };

    onBlur = () => {
        this.setState({focused: false});
    };

    render() {
        const {
            label = 'Label',

        } = this.props;

        const style = {
            position: 'absolute',
            left: 0,
            top: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0],
            }),
            fontSize: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 14],
            }),
            color: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: ['#aaa', '#000'],
            }),
        };

        return <Row>
            <Col style={{
                flex: 1,
                paddingTop: value(20)
            }}>
                <Animated.Text style={style}>{label}</Animated.Text>
                <Custom
                    onChange={() => {}}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
            </Col>
        </Row>;
    }
}



const styles = {
    input: {

    },

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
Custom.PropTypes = defPropTypes;

export default {Custom, Label}
