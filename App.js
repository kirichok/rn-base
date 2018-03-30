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
} from 'react-native';

import {
    Col, Row,
    Switch,
    Button,
    TextInput,
    Image
} from './app/components/Custom';

import Search from './app/components/Search';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class GetChildsName extends Component {
    render() {

        // console.log(Array.isArray(this.props.children) && this.props.children.map(child => child.type.displayName));

        return <View style={styles.container}>
            {this.props.children}
        </View>
    }
}

export default class App extends Component<{}> {
    state = {
        value: ''
    };

    render() {
        console.log(Button.Text.styleBuilder());
        return (
            <GetChildsName >
                <TextInput.Labeled/>

                <TextInput.Masked mask={''}/>

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
                    style={Button.Text.styleBuilder()}
                    // style={{marginHorizontal: 10}}
                    onPress={emptyCall}
                />

                <Search.Input value={this.state.value} onChange={(value) => {
                    this.setState({value});
                }}/>

                <Search.Bar value={this.state.value} onChange={(value) => {
                    this.setState({value});
                }}/>

                <Button.Icon disabled onPress={emptyCall}/>

                <Row>
                    <Button.Image flex onPress={emptyCall}/>
                    <Button.Image flex image={{source: 'react'}} onPress={emptyCall}/>
                </Row>

                <Row>
                    <Switch flex value={true}/>
                    <Switch flex value={true}/>
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
            </GetChildsName>
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
