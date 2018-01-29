import React from 'react';
import {
    Col,
    Row,
} from './Component';

export function Notification({action, children}) {
    return <Col>
        {children}
    </Col>;
}

