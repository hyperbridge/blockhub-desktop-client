import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin, Steps } from 'antd'
import { WhiteSpace } from 'antd-mobile'
import styled from 'styled-components'

import AdvancedLayout from '../../components/advanced-layout'
import NetworkContainer from '../../components/network-container'
import * as NetworkActions from '../../modules/network'

const Step = Steps.Step
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

const Container = ({ republic }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <Steps>
                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'republic-citizenship/Container'

const mapStateToProps = state => ({
    republic: state.republic
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
