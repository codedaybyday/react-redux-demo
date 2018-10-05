import React from 'react';
import reactRedux from './react-redux';
const {connect} = reactRedux;

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('content:', this.props);
        const {theme} = this.props;
        return (
            <div style={{color: theme}}>this is a content</div>
        );
    }
}
function mapStateToProps(state) {
    return {
        theme: state.theme,
        hehe: state.name
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);