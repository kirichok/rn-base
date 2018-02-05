import React from 'react';
import PropTypes from 'prop-types';

import {
    Platform,
} from 'react-native';

import {
    Col,
    Row,
} from './Base';

import {create, value} from "./styles";
import {defStyles} from "../../configs";

export function Sheet({children}) {
    return <Col style={styles.container}>
        {children}
    </Col>;
}

export function Header({actions, transparent = false, withShadow = false}) {
    return <Row style={[styles.header, transparent ? styles.transparent : null, withShadow ? styles.shadow : null]}>
        <Row style={styles.wrapAction}>
            {Array.isArray(actions) && actions.map(
                (action, index) => <action.element {...action.props} key={index}/>
            )}
        </Row>
    </Row>
}

const styles = create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: defStyles.sheet.backgroundColor.solid
    },

    header: {
        paddingTop: Platform.OS === 'ios' ? value(20) : value(10),
        position: 'absolute',
        backgroundColor: defStyles.sheet.backgroundColor.solid,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },

    transparent: {
        backgroundColor: defStyles.sheet.backgroundColor.opacity,
    },

    wrapAction: {
        flex: 1,
    },

    shadow: defStyles.shadow,
});