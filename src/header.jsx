import React from 'react';
import reactRedux from './react-redux';
const {connect} = reactRedux;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('header:', this.props);
        const {theme} = this.props;
        return (
            <div style={{color: theme}}>this is a header</div>
        );
    }
}
function mapStateToProps(state) {
    return state;
} 
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);