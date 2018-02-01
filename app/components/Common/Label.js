import React, {Component} from 'react';
import {Animated, Text} from 'react-native';
import {Row, Col} from "./Base";
import {color, create, font, value} from "./styles";
import {defStyles} from "../../configs";

const defProps = {
    text: 'Label',
    textEmpty: 'Enter Label',
    style: null,
    fontStyle: font.sm.get,
    fontStyleEmpty: font.md.get
};

function Custom(props) {
    const style = [styles.wrap, props.label.top]
    return <Row>
        <Col style={styles.wrap} >
            <Text style={props.fontStyle}>{props.text}</Text>
            <Row>{props.children}</Row>
        </Col>
    </Row>;
}

Custom.defaultProps = defProps;


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
            style: {
                top
            },
            height,
            children
        } = this.props;

        const {
            focused
        } = this.state;

        const style = [styles.wrap, this.props.style];

        const wrap = height === defStyles.label.height ? styles.wrap : [styles.wrap, {paddingTop: height}];

        return <Row>
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