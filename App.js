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
                <TextInput.Label />

                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <Button.Text onPress={() => {}}/>
                <Button.Icon onPress={() => {}}/>
                <Button.Image onPress={() => {}}/>
                <Button.Image image={{source: 'react'}} onPress={() => {}}/>
                <Button.BackgroundImage
                    style={{
                        marginHorizontal: 30
                    }}
                    height={60}
                    image={{
                        uri: 'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        mode: 'contain'
                    }}
                    onPress={() => {}}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
