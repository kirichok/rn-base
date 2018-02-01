import PropTypes from 'prop-types';
import React from 'react';

import {
    TouchableOpacity,
    Text as RNText,
    View,
} from 'react-native';

import {create, value, font, color, PT} from './styles';
import CustomIcon, {IconType} from './Icon';
import CustomImage from './Image';
import {defStyles} from "../../configs";

const defProps = {
    children: null,

    disabled: false,
    onPress: null,

    style: {},

    activeOpacity: 0.75,
    height: value(40),
    radius: 0,
    flex: false
};

const defPropTypes = {
    onPress: PropTypes.func.isRequired,
    style: PT.objectOrNumber,
    disabled: PropTypes.bool,
    activeOpacity: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    flex: PropTypes.bool,
};

/**
 * Custom  Button component
 * */

function Custom(props) {
    const onPress = props.disabled ? null : props.onPress,
        style = [
            styles.wrap,
            props.flex ? styles.flex : {},
            {borderRadius: props.radius},
            props.style
        ],
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
    icon: CustomIcon.Custom.defaultProps
};
Icon.propTypes = {
    ...defPropTypes,
    icon: PropTypes.shape(CustomIcon.Custom.PropTypes),
};
Icon.displayName = 'Button:Icon';

/**
 * Image as Button
 * */

function Image(props) {
    const imageStyle = [styles.image, props.image.style];

    return <Custom {...props}>
        <CustomImage.Custom {...props.image} style={imageStyle}/>
    </Custom>
}

Image.defaultProps = {
    ...defProps,
    image: CustomImage.Custom.defaultProps,
};
Image.propTypes = {
    ...defPropTypes,
    image: PropTypes.shape(CustomImage.Custom.PropTypes),
};
Image.displayName = 'Button:Image';

/**
 * Icon as Button
 * */

function BackgroundImage(props) {
    const imageStyle = [styles.image, props.image.style];

    return <Custom {...props}>
        <CustomImage.Background {...props.image} style={imageStyle}>
            {props.children}
        </CustomImage.Background>
    </Custom>
}

BackgroundImage.defaultProps = {
    ...defProps,
    image: CustomImage.Background.defaultProps,
};
BackgroundImage.propTypes = {
    ...defPropTypes,
    image: PropTypes.shape(CustomImage.Background.PropTypes),
};
BackgroundImage.displayName = 'Button:BackgroundImage';

/**
 * Default styles for Button
 * */

const styles = create({
    flex: {
        flex: 1
    },
    wrap: {
        backgroundColor: color.button.background,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    text: font.md.weight('400').color(color.button.text).get,

    icon: {},
    image: {}
});

export default {Custom, Text, Icon, Image, BackgroundImage};