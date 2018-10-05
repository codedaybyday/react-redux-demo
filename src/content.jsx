import React from 'react';
import reactRedux from './react-redux';
import redux from './redux';
const {connect} = reactRedux;
const {bindActionCreator} = redux;
const actionCreators = {
    changeTheme: function(theme){
        return {
            type: 'CHANGE_THEME',
            theme
        };
    },
    changeName: function(name) {
        return {
            type: 'CHANGE_NAME',
            name
        };
    }
};
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(bindActionCreator(actionCreators, this.props.dispatch));
    }

    handleChangeName() {
        const {changeName} = this.props;
        changeName('ligoudan');
    }

    render() {
        const {theme, hehe} = this.props;
        return (
            <div style={{color: theme}}>
                this is a content,name: {hehe}
                <button onClick={this.handleChangeName.bind(this)}>修改名称</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        theme: state.reducer.theme,
        hehe: state.reducer.name
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreator(actionCreators, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);