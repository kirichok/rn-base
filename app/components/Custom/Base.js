import React from 'react';

import {
    View,
    KeyboardAvoidingView
} from 'react-native';

import {create} from "./styles";

const styles = create({
    col: {
        flexDirection: 'column'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    flex: {
        flex: 1
    }
});

export function Row({style = {}, children = null}) {
    return <View style={[styles.row, style]}>{children}</View>
}

export function Col({style = {}, flex = false, children = null}) {
    return <View style={[styles.col, flex ? styles.flex : {}, style]}>
        {children}
    </View>
}

