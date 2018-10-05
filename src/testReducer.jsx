import React from 'react';
import reactRedux from './react-redux';
const {connect} = reactRedux;

class TestReducer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {age} = this.props;
        return (
            <div>测试anotherReducer->age:{age}</div>
        );
    }
}
function mapStateToProps(state) {
    return state.anotherReducer;
} 
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TestReducer);