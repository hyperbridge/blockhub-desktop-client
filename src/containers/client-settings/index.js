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
import * as MarketplaceActions from '../../modules/marketplace'

const FormItem = Form.Item
const Option = Select.Option
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Container = ({ republic, getTransaction, setupContracts, syncLocalToBlockchain, syncBlockchainToLocal, contractAddress, form }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>

            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    <h3>Governance protocol contracts</h3>
                </FormItem>
                <FormItem>
                    <h3>Marketplace protocol contracts</h3>
                </FormItem>
                <FormItem
                    label="Marketplace contract"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {form.getFieldDecorator('note', {
                        rules: [{ required: true, message: 'Please input the contract address!' }],
                        initialValue: contractAddress
                    })(
                        <Input />
                    )}
                    <button onClick={setupContracts}>Deploy Marketplace Contracts</button>
                </FormItem>
                <FormItem>
                    <h3>Data protocol contracts</h3>
                </FormItem>
                <FormItem>
                    <h3>Data</h3>
                    <button onClick={syncLocalToBlockchain}>Local Data -> Blockchain</button>
                    <button onClick={syncBlockchainToLocal}>Blockchain -> Local Data</button>
                </FormItem>
            </Form>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'client-settings/Container'

const mapStateToProps = state => ({
    contractAddress: state.marketplace.contractAddress
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTransaction: () => NetworkActions.getTransaction(dispatch),
    setupContracts: () => dispatch(MarketplaceActions.setupContracts()),
    syncLocalToBlockchain: () => dispatch(MarketplaceActions.syncLocalToBlockchain()),
    syncBlockchainToLocal: () => dispatch(MarketplaceActions.syncBlockchainToLocal())
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Container))
