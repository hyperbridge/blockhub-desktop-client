import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { Icon, NavBar } from 'antd-mobile'
import styled from 'styled-components'

import logo from './logo.svg'


export const Container = ({ changePage }) => (
    <header className="header">
        <NavBar 
            mode="light"
            onLeftClick={() => { changePage('/') }}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />
            ]}
        >
            <img src={logo} className="App-logo" alt="logo" /> <Link to="/">Blockhub</Link>
        </NavBar>
    </header>
)

Container.displayName = 'header/Container'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
