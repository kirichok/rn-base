import React from 'react';

import {View} from 'react-native';

import {
    Row, Col,
    TextInput,
    Button,
    Icon
} from "../Custom";

import {IconType} from "../Custom/Icon";

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
            style={{flex: 1}}
        />
        <Button.Icon
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
        />
    </Row>
}

function Bar(props) {
    return <Row>
        <Input style={{flex: 1}} {...props}/>

        <Button.Text
            text={'Cancel'}
            style={{width: 80}}
            onPress={() => {
            }}
        />

    </Row>
}

export default {Input, Bar};