import React from 'react';
import PropTyps from 'prop-types';

class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getChildContext() {
        const {store} = this.props;
        return {
            store
        };
    }
    render() {
        console.log(this.props);
        return (<React.Fragment>{React.Children.only(this.props.children)}</React.Fragment>);
    }
}
Provider.childContextTypes = {
    store: PropTyps.object.isRequired
}
export default Provider;