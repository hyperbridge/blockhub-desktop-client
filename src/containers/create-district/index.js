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

// name, version, category, files, checksum, permissions
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
}

const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
}

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
        const { app, account, form: { getFieldDecorator } } = this.props

        return (
            <AdvancedLayout>
                <Content style={{ 'padding': '10px', 'marginTop': '10px', 'background': '#fff' }}>
                    Create District
                    <br />
                    <Row>
                        <Col xs={24} sm={24} md={16} lg={16} xl={10}>
                            <Form layout="horizontal" onSubmit={this.handleSubmit}>
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
                                        <Select defaultValue="1">
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
    }
}

Container.displayName = 'create-district/Container'

const mapStateToProps = state => ({
    account: state.account
})

const mapDispatchToProps = dispatch => bindActionCreators({
    submitApp: MarketplaceActions.submitApp
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Container))
