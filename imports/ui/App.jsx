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
                <nav className="navbar">
                    <div className="container">
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="logo">
                                    <img src="/logo.png" alt="Logo" />
                                </li>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/demo">Demo</a>
                                </li>
                                <li>
                                    <a href="/demo-paginate">Demo Pagination</a>
                                </li>
                                <li>
                                    <a href="/grapher" target="_blank">Grapher Live!</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {React.createElement(main, routeProps)}
                </div>
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