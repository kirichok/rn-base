import React, {Component} from 'react';








export default class Form extends Component {
    onChange = (onChange,/*TODO: Need handle for setting valid or invalid value*/ validation) => value => {
        if (!validation) {
            return onChange(value);
        }

        onChange(value);
    };



    render() {
        const {
            children
        } = this.props;

        const elements = children.map((item, index)=> {
            item.props.onChange = this.onChange(item.props.onChange, item.props.validation);
            return <item.element {...item.props} key={index}/>;
        });

        return <>
            {elements}
        </>
    }
}