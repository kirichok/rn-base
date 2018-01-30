import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground} from 'react-native';
import {PT, value} from './styles';
import Assets from '../../assets';

/**
 * Default props & propTypes
 * */

const defProps = {
    source: undefined,
    uri: undefined,
    style: {},
    mode: 'contain'
};

const defPropTypes = {
    source: PropTypes.string,
    uri: PropTypes.string,
    style: PT.objectOrNumberOrArray,
    mode: PropTypes.string
};

/**
 * Custom image component
 * */

function Custom(props) {
    const {
        source,
        uri,
        size,
        color,
        style,
        mode
    } = props;

    return <Image
        source={getSource(source, uri)}
        style={[{
            height: value(size),
            width: value(size),
            tintColor: color ? color : null
        }, style]}
        resizeMode={mode}
    />
}

Custom.defaultProps = {
    ...defProps,
    size: 20,
    color: '#000',
};
Custom.propTypes = {
    ...defPropTypes,
    size: PropTypes.number,
    color: PropTypes.string,
};

/**
 * Background image component
 * */

function Background(props) {
    const {
        source,
        uri,
        style,
        children,
        mode,

        height,
        width
    } = props;

    return <ImageBackground
        source={getSource(source, uri)}
        style={[{width, height}, style]}
        resizeMode={mode}
    >
        {children}
    </ImageBackground>
}
Background.defaultProps = {
    ...defProps,
    children: null,
    mode: 'cover',
    height: '100%',
    width: '100%'
};
Background.propTypes = {
    ...defPropTypes,
    children: PropTypes.any,
    height: PT.numberOrString,
    width: PT.numberOrString,
};

function getSource(source, uri) {
    return source ? Assets.get(source) : (uri ? {uri} : Assets.get());
}

export default {Custom, Background};
