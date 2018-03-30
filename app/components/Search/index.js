import React, {Component} from 'react';

import {
    Row, Col,
    TextInput,
    Button,
    Icon
} from "../Custom";

import {IconType} from "../Custom/Icon";
import {font} from "../Custom/styles";

function Input({value = '', onChange = null, left = 'search', right = 'close', style = {}, rounded}) {

    style = [{
        backgroundColor: '#696969',
        borderRadius: 20,
        height: 40,
        paddingLeft: 10,
        paddingRight: 5
    }, style];

    return <Row style={style}>
        <Icon size={24} type={IconType.Material} name={left}/>
        <TextInput.Custom
            value={value}
            onChange={onChange}
            style={{flex: 1, ...font.size(16).get}}
            onBlur={() => {
                console.log('ON BLUR');
            }}
        />
        {/*<Button.Icon
            icon={{
                size: 24,
                type: IconType.Material,
                name: right
            }}
            radius={20}
            height={34}
            style={{
                width: 34,
                height: 34
            }}
            onPress={() => {onChange && onChange('')}}
        />*/}
    </Row>
}

function Bar(props) {
    return <Row>
        <Input style={{flex: 1}} {...props}/>

        <Button.Text
            text={'Cancel'}
            style={{button: {width: 80}}}
            onPress={() => {
            }}
        />

    </Row>
}

export default {Input, Bar};