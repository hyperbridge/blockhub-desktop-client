import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Input, Button, Radio, Select, Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

import * as MarketplaceActions from '../../modules/marketplace'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
}

const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
}

const MainContent = ({ setupContracts, contractAddress }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px', 'background': '#fff' }}>
            <h2>Setup</h2>
            <br />
            Marketplace Contract (current: {contractAddress || null}):<br />
            <button onClick={setupContracts}>Deploy Marketplace Contracts</button>
        </Content>
    </AdvancedLayout>
)


class Container extends React.Component {
    render = () => {
        return <MainContent {...this.props} />
    }
}

Container.displayName = 'setup/Container'

const mapStateToProps = (state, ownProps) => ({
    contractAddress: state.marketplace.contractAddress
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setupContracts: () => dispatch(MarketplaceActions.setupContracts()),
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Container))
