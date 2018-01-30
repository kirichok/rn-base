import _ from 'lodash';

const Assets = {
    not_found: require('./not_found.png'),
    react: require('./react.png'),

    get(name) {
        console.log('GET ASSET:', name);
        const image =_.get(this, name);
        if (image) {
            return image;
        } else {
            return this.not_found;
        }
    }
};

export default Assets;