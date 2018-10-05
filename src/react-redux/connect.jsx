import React from 'react';
import PropTypes from 'prop-types';

export default function(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComonpent) {
        class Connect extends React.Component {
            constructor(props) {
                super(props);
                this.state = {};
            }
    
            componentWillMount() {
                const {subcribe} = this.context.store;
                subcribe(() => {
                    this.updateUI();
                });
                this.updateUI();
            }
        
            updateUI() {
                const {store} = this.context;
                const {getState,dispatch} = store;
                const stateProps = mapStateToProps? mapStateToProps(getState()) : {};
                const dispatchProps = mapDispatchToProps? mapDispatchToProps(dispatch): {};
                const state = {
                    ...this.state,
                    ...this.props,
                    ...stateProps,
                    ...dispatchProps
                };
                this.setState(state);
            }
    
            render() {
                return (<WrappedComonpent {...this.state}/>);
            }
        }
        Connect.contextTypes = {
            store: PropTypes.object
        };
        return Connect;
    };
}