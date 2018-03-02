import React from 'react';
import {
    Modal as RNModal
} from 'react-native'
import {
    Col,
    Row,
} from './Base';

export function Modal({show, actions, children}) {
    return <Col>
        {children}
    </Col>;
}