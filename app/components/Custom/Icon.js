import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PT, value} from './styles';
import {defStyles} from "../../configs";
import Assets from "../../assets";

export const IconType = {
    Local: 0,
    Material: 1,
    Ion: 2
};

const defProps = {
    type: IconType.Local,

    source: undefined,
    uri: undefined,
    mode: defStyles.icon.mode,

    name: undefined,

    size: defStyles.icon.size,
    color: defStyles.icon.color,
    style: {}
};

const defPropTypes = {
    type: PropTypes.number.isRequired,

    source: PropTypes.string,
    uri: PropTypes.string,
    mode: PropTypes.string,

    name: PropTypes.string,

    size: PropTypes.number,
    color: PropTypes.string,
    style: PT.objectOrNumberOrArray
};

function Custom(props) {
    switch (props.type) {
        case IconType.Local:
            return <Image.Custom {...props}/>;

        case IconType.Material:
            return <MaterialIcons {...props}/>;

        case IconType.Ion:
            return <IonIcons {...props}/>;
    }
}

Custom.defaultProps = defProps;
Custom.propTypes = defPropTypes;

export default Custom;