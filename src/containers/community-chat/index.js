import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin, Form, Select, Input, Button } from 'antd'
import { WhiteSpace } from 'antd-mobile'
import styled from 'styled-components'

import AdvancedLayout from '../../components/advanced-layout'
import NetworkContainer from '../../components/network-container'
import * as NetworkActions from '../../modules/network'

const FormItem = Form.Item
const Option = Select.Option
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Container = ({ republic, getTransaction, form }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            Community chat
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'community-chat/Container'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTransaction: () => NetworkActions.getTransaction(dispatch)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Container))
