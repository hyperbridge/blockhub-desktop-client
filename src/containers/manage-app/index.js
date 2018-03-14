import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout



const Container = ({ app, account }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            Manage App
            <br />
            Republic Tags: Upcoming [Add]
            <br />
            Author Tags: Co-op
            <br />
            {account.citizen && account.citizen.id == app.author.id && (
                <div>Edit</div>
            )}
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'manage-app/Container'

const mapStateToProps = state => ({
    app: state.marketplace.getApp("sdasd-adasd-adas"),
    account: state.account
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
