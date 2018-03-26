import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout



const Container = ({ marketplace }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            {marketplace.games.all.map((app) => (
                <div>
                    <Link to={"app/" + app.id}>{app.name}</Link>
                </div>
            ))}
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'games/Container'

const mapStateToProps = state => ({
    marketplace: state.marketplace
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
