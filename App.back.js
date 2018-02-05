/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Switch,
} from 'react-native';

import {Col, Row} from './app/components/Common/Base';
import Button from './app/components/Common/Button';
import Image from './app/components/Common/Image';
import TextInput from './app/components/Common/TextInput';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <TextInput.Labeled/>

                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <Button.Text
                    radius={10}
                    text={'Hello'}
                    style={{
                        marginHorizontal: 10
                    }}
                    onPress={emptyCall}
                />
                <Button.Icon onPress={emptyCall}/>

                <Row>
                    <Button.Image flex onPress={emptyCall}/>
                    <Button.Image flex image={{source: 'react'}} onPress={emptyCall}/>
                </Row>

                <Col flex>
                    <View style={{flex: 1, backgroundColor: 'red'}}/>
                    <Button.Image onPress={emptyCall}/>
                    <Button.Image image={{source: 'react'}} onPress={emptyCall}/>
                </Col>


                <Button.BackgroundImage
                    style={{
                        marginHorizontal: 30
                    }}
                    height={60}
                    image={{
                        uri: 'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        mode: 'contain'
                    }}
                    onPress={emptyCall}
                >
                    <View/>
                </Button.BackgroundImage>

                <Image.Background
                    height={100}
                    uri={'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
                    mode={'contain'}
                >
                    <Text>Hello</Text>
                </Image.Background>

                <Switch value={true}/>
                <Switch value={false}/>
            </View>
        );
    }
}

function emptyCall() {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
