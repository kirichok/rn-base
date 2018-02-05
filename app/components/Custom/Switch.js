import React from 'react';

import {
    Switch as RNSwitch,
    Text
} from 'react-native';

import {create, font} from "./styles";
import {defStyles} from "../../configs";
import {Row} from "./Base";


function Custom({text = 'Switch', style = {}, textStyle = {}, disabled = false, value = false, flex = false}) {

    style = [style, flex ? styles.flex : {}];
    textStyle = [styles.text, textStyle];

    return <Row style={style}>
        <Text style={textStyle}>{text}</Text>
        <RNSwitch {...{value, disabled}}/>
    </Row>
}

export default Custom;

const styles = create({
    text: {
        flex: 1,
        ...font
            .size(defStyles.switch.font.size)
            .color(defStyles.switch.font.color)
            .get
    },

    flex: {
        flex: 1
    }

});