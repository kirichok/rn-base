import React from 'react';
import {Text} from 'react-native';
import {Row, Col} from "./Base";
import {color, create, font, value} from "./styles";

const defProps = {
    actions: [],
    text: 'Label',
    style: null,
    fontStyle: font.md.bold.get
};

function Label(props) {
    return <Row style={[styles.wrap, props.style]}>
        <Col >
            <Text style={props.fontStyle}>{props.text}</Text>
            <Row>{props.children}</Row>
        </Col>
    </Row>;
}

Label.defaultProps = defProps;




export {Label}

const styles = create({
    wrap: {
        marginVertical: value(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        ...font.sm.color(color.label.text).get
    },
});