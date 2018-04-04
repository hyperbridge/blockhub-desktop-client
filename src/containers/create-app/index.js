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

const MainContent = ({ app, account, form: { getFieldDecorator }, handleSubmit}) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px', 'background': '#fff' }}>
            Create App
                    <br />
            <Row>
                <Col xs={24} sm={24} md={16} lg={16} xl={10}>
                    <Form layout="horizontal" onSubmit={handleSubmit}>
                        <FormItem
                            label="Name"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input a name' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Version"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('version', {
                                rules: [{ required: true, message: 'Please input a version' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Category"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('category', {
                                rules: [{ required: true, message: 'Please input a category' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Files"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('files', {
                                rules: [{ required: true, message: 'Please input a files' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Checksum"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('checksum', {
                                rules: [{ required: true, message: 'Please input a checksum' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Permissions"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('permissions', {
                                rules: [{ required: true, message: 'Please input a permissions' }],
                            })(
                                <Select initialValue="1">
                                    <Option value="1">Basic</Option>
                                    <Option value="2">Premium</Option>
                                </Select>
                                )}
                        </FormItem>
                        <FormItem {...buttonItemLayout}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Content>
    </AdvancedLayout>
)


class Container extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Invalid form: ', err)
                return
            }

            console.log('Valid form: ', values)
            console.log(this.props.submitApp, values)
            this.props.submitApp(values.name, values.version, values.category, values.files, values.checksum, values.permissions)
        })
    }

    render = () => {
        return <MainContent {...this.props} handleSubmit={this.handleSubmit.bind(this)} />
    }
}

Container.displayName = 'create-app/Container'

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    app: state.marketplace.selectedApp,
    account: state.account
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getApp: (id) => dispatch(MarketplaceActions.getApp(id)),
    submitApp: (name, version, category, files, checksum, permissions) => dispatch(MarketplaceActions.submitApp(name, version, category, files, checksum, permissions))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Container))
