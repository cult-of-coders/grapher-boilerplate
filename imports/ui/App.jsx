import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class App extends React.Component {
    render() {
        const {isLoggingIn, isReady, main, routeProps} = this.props;

        if (!isReady || isLoggingIn) {
            return (
                <div className="logging-in-overlay">
                    Loading
                </div>
            )
        }

        return (
            <div className="app-container">
                <div className="topbar">
                    <a href="/">Home</a>
                    &nbsp;
                    <a href="/grapher" target="_blank">Grapher Live</a>
                    &nbsp;
                    <a href="/demo">Demo</a>
                </div>
                {React.createElement(main, routeProps)}
            </div>
        )
    }
}

export default createContainer((props = {}) => {
    const subHandle = Meteor.subscribe('self');

    return {
        isReady: subHandle.ready(),
        isLoggingIn: Meteor.loggingIn(),
        ...props
    }
}, App);