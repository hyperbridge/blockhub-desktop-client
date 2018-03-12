import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'
import styled from 'styled-components'

import AdvancedLayout from '../../components/advanced-layout'
import NetworkContainer from '../../components/network-container'
import * as NetworkActions from '../../modules/network'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
`

const Container = ({ getTransaction }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <NetworkContainer>
                <Button onClick={getTransaction}>stuff</Button>
                <WhiteSpace />
            </NetworkContainer>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'republic-structure/Container'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTransaction: () => NetworkActions.getTransaction(dispatch)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
