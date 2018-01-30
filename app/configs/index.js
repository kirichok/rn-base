import {
    Platform,
} from 'react-native';

import {
    isTablet,
    getBuildNumber,
    getVersion
} from 'react-native-device-info';

const PARAMS = {
    DEV: {
        STRIPE_ID: 1,
        GOOGLE_API: '1',
        SERVER_API: 'http://dev.test.com/api/'
    },
    PROD: {
        STRIPE_ID: 2,
        GOOGLE_API: '2',
        SERVER_API: 'http://prod.test.com/api/'
    },
    get (IS_DEV = false, additional = {}) {
        return {
            ...(IS_DEV ? this.DEV : this.PROD),
            ...additional,
            IS_DEV,
        }
    }
};

const params = {
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',

    isTablet: isTablet(),
    isPhone: !isTablet(),
};

export default PARAMS.get(true, params);



