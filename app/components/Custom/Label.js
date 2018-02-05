import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Text} from 'react-native';
import {Row, Col} from "./Base";
import {color, create, font, value, PT} from "./styles";
import {defStyles} from "../../configs";

const defProps = {
    text: 'Label',
    textEmpty: 'Enter Label',
    style: null,
    fontStyle: font.sm.get,
    fontStyleEmpty: font.md.get
};

const defPropTypes = {
    text: PropTypes.string,
    textEmpty: PropTypes.string,
    style: PT.objectOrNumberOrArray,
    fontStyle: PT.objectOrNumber,
    fontStyleEmpty: PT.objectOrNumber
};

function Custom(props) {
    const style = [styles.wrap, props.label.top];
    return <Row style={props.style}>
        <Col style={styles.wrap}>
            <Text style={props.fontStyle}>{props.text}</Text>
            <Row>{props.children}</Row>
        </Col>
    </Row>;
}
Custom.defaultProps = defProps;
Custom.propTypes = defPropTypes;


class Floating extends Component {
    constructor(props) {
        super(props);

        const {
            focused,
            floating: {
                inline,
                focus
            }
        } = props;

        this.state = {
            focused,
        };

        this._focused = new Animated.Value(focused ? 1 : 0);

        this.style = {
            position: 'absolute',
            // left: 0,
            left: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: [inline.left, focus.left],
            }),
            top: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: [inline.top, focus.top],
            }),
            fontSize: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: [inline.size, focus.size],
            }),
            color: this._focused.interpolate({
                inputRange: [0, 1],
                outputRange: [inline.color, focus.color],
            }),
        };
    }

    componentWillReceiveProps(next) {
        if (this.state.focused !== next.focused) {
            this.setState({
                focused: next.focused
            });
        }
    }

    componentDidUpdate() {
        Animated.timing(this._focused, {
            toValue: this.state.focused ? 1 : 0,
            duration: 200,
        }).start();
    }

    render() {
        const {
            text = {
                inline: 'I',
                focus: 'F',
            },
            style,
            height,
            children
        } = this.props;

        const {
            focused
        } = this.state;

        const wrap = height === defStyles.label.height ? styles.wrap : [styles.wrap, {paddingTop: height}];

        return <Row style={style}>
            <Col style={wrap}>
                <Animated.Text style={this.style}>{focused ? text.focus : text.inline}</Animated.Text>
                {children}
            </Col>
        </Row>;
    }
}

Floating.defaultProps = {
    focused: false,
    text: {
        inline: 'Inline Text',
        focus: 'Focus Text'
    },
    height: defStyles.label.height,
    floating: defStyles.label,
    style: {}
};

Floating.propTypes = {
    children: PropTypes.any,
    focused: PropTypes.bool,
    text: PropTypes.shape({
        inline: PropTypes.string,
        focus: PropTypes.string
    }),
    height: PropTypes.number,
    floating: PropTypes.object,
    style: PT.objectOrNumberOrArray
};

export default {Custom, Floating}

const styles = create({
    wrap: {
        flex: 1,
        paddingTop: defStyles.label.height
    },
    text: {
        ...font.sm.color(color.label.text).get
    },
});