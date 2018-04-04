// @flow

import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Switch } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from '../containers/home'
import Accounts from '../containers/accounts'
import Games from '../containers/games'
import News from '../containers/news'
import Setup from '../containers/setup'
import Apps from '../containers/apps'
import AppDetail from '../containers/app-detail'
import CreateApp from '../containers/create-app'
import ManageApp from '../containers/manage-app'
import RepublicStructure from '../containers/republic-structure'
import RepublicCitizenship from '../containers/republic-citizenship'
import ClientSettings from '../containers/client-settings'
import CommunityChat from '../containers/community-chat'
import CreateDistrict from '../containers/create-district'

import registerServiceWorker from './registerServiceWorker'
import { changeSection } from '../modules/site'
import { history } from '../store'

import * as NetworkActions from '../modules/network'

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

        window.appDispatch = props.dispatch // TODO: remove hack

        this.onRouteChange = this.onRouteChange.bind(this)

        NetworkActions.getAccounts(props.dispatch)
        //props.dispatch(login())
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
        console.log(route);
        //props.dispatch(changeSection(route))
    }

    componentWillReceiveProps(props) {
    }

    onRouteChange(route) {
        if (this.state.lastRoute)
            document.body && document.body.classList.remove(this.state.lastRoute)

        document.body && document.body.classList.add(route.url)

        this.setState({ lastRoute: route.url })

        console.log(route);
        //let route = route.url.slice(1).replace(/\//g, '-')

        this.props.dispatch(changeSection(route))
    }

    render() {
        return (
            <div className="App">
                <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Switch>
                        <Route exact path="/" component={Home} onChange={this.onRouteChange} />
                        <Route exact path="/accounts" component={Accounts} onChange={this.onRouteChange} />
                        <Route exact path="/games" component={Games} onChange={this.onRouteChange} />
                        <Route exact path="/apps" component={Apps} onChange={this.onRouteChange} />
                        <Route exact path="/news" component={News} onChange={this.onRouteChange} />
                        <Route exact path="/setup" component={Setup} onChange={this.onRouteChange} />
                        <Route exact path="/settings/client" component={ClientSettings} onChange={this.onRouteChange} />
                        <Route exact path="/app/create" component={CreateApp} onChange={this.onRouteChange} />
                        <Route exact path="/app/:id" component={AppDetail} onChange={this.onRouteChange} />
                        <Route exact path="/app/:id/edit" component={ManageApp} onChange={this.onRouteChange} />
                        <Route exact path="/community/chat" component={CommunityChat} onChange={this.onRouteChange} />
                        <Route exact path="/republic/structure" component={RepublicStructure} onChange={this.onRouteChange} />
                        <Route exact path="/republic/citizenship" component={RepublicCitizenship} onChange={this.onRouteChange} />
                        <Route exact path="/republic/district/create" component={CreateDistrict} onChange={this.onRouteChange} />
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