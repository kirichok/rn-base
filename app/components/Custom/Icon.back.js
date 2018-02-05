import React from 'react';
import PropTypes from 'prop-types';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PT} from './styles';

export const IconType = {
    Material: 1,
    Ion: 2
};

const defProps = {
    type: IconType.Material,
    name: undefined,
    size: 20,
    color: '#000',
    style: {}
};

const defPropTypes = {
    type: PropTypes.number.isRequired,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    style: PT.objectOrNumberOrArray
};

function Custom(props) {
    switch (props.type) {
        case IconType.Material:
            return <MaterialIcons {...props}/>;

        case IconType.Ion:
            return <IonIcons {...props}/>;
    }
}

Custom.defaultProps = defProps;
Custom.propTypes = defPropTypes;

export default {Custom};