// @flow

import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Switch } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from '../containers/home'
import Games from '../containers/games'
import Apps from '../containers/apps'
import AppDetail from '../containers/app-detail'

import registerServiceWorker from './registerServiceWorker'
import { login } from '../modules/account'
import { history } from '../store'

import './index.css'


registerServiceWorker()

const handler = function (e) {
    if (e.ctrlKey && e.code === 'KeyE') {
        var testerHTML = `<div>
            <button>Ready</button>
            <button></button>
            <div id="log"></div>
        </div>`

        window.tester = window.open('', '_blank', 'scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400,modal=yes,alwaysRaised=yes')
        window.tester.document.write(testerHTML)
        //window.opener.postMessage()
    }
}

// TODO: Build this into an awesome testing tool
document.addEventListener('keydown', handler)

class App extends Component {
    state = {
        showSignIn: false,
        userDetails: null,
        lastRoute: ''
    }

    constructor(props) {
        super(props)

        if (props.location)
            this.onChangeLocation(props.location)

        if (props.history)
            props.history.listen(this.onChangeLocation.bind(this))

        window.dispatchhhh = props.dispatch // TODO: remove hack

        props.dispatch(login())
    }

    onChangeLocation(location) {
        if (!location) return

        let route = location.pathname.slice(1).replace(/\//g, '-')

        if (this.state.lastRoute)
            document.body && document.body.classList.remove('t-' + this.state.lastRoute)

        if (!route)
            route = 'home'

        document.body && document.body.classList.add('t-' + route);

        this.setState({ lastRoute: route })
    }

    componentWillReceiveProps(props) {
    }


    onRouteChange(route) {
        if (this.state.lastRoute)
            document.body && document.body.classList.remove(this.state.lastRoute)

        document.body && document.body.classList.add(route.url)

        this.setState({ lastRoute: route.url })
    }

    render() {
        return (
            <div className="App">
                <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Switch>
                        <Route exact path="/" component={Home} onChange={this.onRouteChange.bind(this)} />
                        <Route exact path="/games" component={Games} onChange={this.onRouteChange.bind(this)} />
                        <Route exact path="/apps" component={Apps} onChange={this.onRouteChange.bind(this)} />
                        <Route exact path="/apps/:pair" component={AppDetail} onChange={this.onRouteChange.bind(this)} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    dispatch: dispatch,
    changePage: (page) => push(page)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)