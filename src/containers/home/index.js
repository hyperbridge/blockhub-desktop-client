import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

import './index.css'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout


const menu = (
    <Menu>
        <Menu.Item>
            Action 1
        </Menu.Item>
        <Menu.Item>
            Action 2
        </Menu.Item>
    </Menu>
)

const QuickGames = () => (
    <div>quick games</div>
)

const NewsFeed = () => (
    <div>news feed</div>
)

const Container = () => (
    <AdvancedLayout>
        <Content style={{'padding': '10px', 'marginTop': '10px'}}>
            <WhiteSpace />
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'home/Container'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
