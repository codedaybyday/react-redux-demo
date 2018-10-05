import React from 'react';
import reactRedux from './react-redux';
const {connect} = reactRedux;

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        };
    }

    handleChangeTheme(theme) {
        const {dispatch} = this.props;
        dispatch({
            type: 'CHANGE_THEME',
            theme
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChangeTheme.bind(this, 'blue')}>blue</button>
                <button onClick={this.handleChangeTheme.bind(this, 'red')}>red</button>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);