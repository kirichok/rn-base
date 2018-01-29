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

export function Sheet({actions, children, transparent = false, withShadow = false}) {
    return <Col style={styles.container}>
        <Row style={[styles.header, transparent ? styles.transparent : null, withShadow ? styles.shadow : null]}>
            <Row style={styles.wrapAction}>
                {Array.isArray(actions) && actions.map(
                    (action, index) => <action.element {...action.props} key={index}/>
                )}
            </Row>
        </Row>
        {children}
    </Col>;
}

const BACKGROUND = 'rgb(243, 243, 243)',
    BACKGROUND_A = 'rgba(243, 243, 243, 0.87)',
    SHADOW = 'rgba(0, 0, 0, 0.04)';


const styles = create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: BACKGROUND
    },

    header: {
        paddingTop: Platform.OS === 'ios' ? value(20) : value(10),
        position: 'absolute',
        backgroundColor: BACKGROUND,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },

    transparent: {
        backgroundColor: BACKGROUND_A,
    },

    wrapAction: {
        flex: 1,
        alignItems: 'center',
    },

    shadow: {
        shadowColor: SHADOW,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
    },
});