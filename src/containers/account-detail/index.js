import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout



const Container = (account) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <div>{account.name}</div>
            <div>Balance: {account.balance}</div>
            <div>
                {account.tokens.map((token) => (
                    <div>{token.symbol}</div>
                ))}
            </div>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'account-detail/Container'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
