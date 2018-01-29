import PropTypes from 'prop-types';
import React from 'react';

import {
    TouchableOpacity,
    Text as RNText,
    View,
} from 'react-native';

import {create, value, font, color, PT} from './styles';
import CustomIcon, {IconType} from './Icon';

const defProps = {
    children: null,

    disabled: false,
    onPress: null,

    style: {},

    activeOpacity: 0.75,
    height: value(40),
    radius: 0
};

const defPropTypes = {
    onPress: PropTypes.func.isRequired,
    style: PT.objectOrNumber,
    disabled: PropTypes.bool,
    activeOpacity: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number
};

/**
 * Custom
 * */

function Custom(props) {
    const onPress = props.disabled ? null : props.onPress,
        style = [styles.wrap, {borderRadius: props.radius}, props.style],
        container = [styles.container, {height: props.height}];

    return <TouchableOpacity activeOpacity={props.activeOpacity} style={style} onPress={onPress}>
        <View style={container}>
            {props.children}
        </View>
    </TouchableOpacity>
}

Custom.defaultProps = defProps;
Custom.propTypes = defPropTypes;
Custom.displayName = 'Button:Custom';

/**
 * Button with text
 * */

function Text(props) {
    const textStyle = [styles.text, props.textStyle];

    return <Custom {...props}>
        <RNText style={textStyle}>{props.text}</RNText>
    </Custom>
}

Text.defaultProps = {
    ...defProps,

    text: 'Text',
    textStyle: {}
};
Text.propTypes = {
    ...defPropTypes,

    text: PropTypes.string,
    textStyle: PT.objectOrNumber,
};
Text.displayName = 'Button:Text';

/**
 * Icon as Button
 * */

function Icon(props) {
    const iconStyle = [styles.icon, props.icon.style];

    return <Custom {...props}>
        <CustomIcon.Custom {...props.icon} style={iconStyle}/>
    </Custom>
}

Icon.defaultProps = {
    ...defProps,

    icon: CustomIcon.defProps,
};
Icon.propTypes = {
    ...defPropTypes,

    icon: PropTypes.shape(CustomIcon.defPropTypes),
};
Icon.displayName = 'Button:Icon';

/**
 * Icon as Button
 * */

function Image(props) {
    const imageStyle = [styles.image, props.imageStyle];

    return <Custom {...props}>

    </Custom>
}

Image.defaultProps = {
    ...defProps,

    image: {
        name: '',
        style: null
    },
};
Image.propTypes = {
    ...defPropTypes,

    image: PropTypes.string,
    imageStyle: PT.objectOrNumber,
};
Image.displayName = 'Button:Image';

/**
 * Default styles for Button
 * */

const styles = create({
    wrap: {
        backgroundColor: color.button.background,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: font.md.weight('400').color(color.button.text).get,

    icon: {}
});

export default {Custom, Text, Icon, Image};