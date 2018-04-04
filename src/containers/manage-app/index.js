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

const MainContent = ({ app, account, form: { getFieldDecorator }, handleSubmit }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            Manage App
            <br />
            Republic Tags: Upcoming [Add]
            <br />
            Author Tags: Co-op
            <br />
            Vote for App:
            <Form layout="horizontal" onSubmit={handleSubmit}>
                <FormItem
                    label="ID"
                    {...formItemLayout}
                >
                    {getFieldDecorator('id', {
                        rules: [{ required: true, message: 'Please input a ID' }],
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
                    label="Vote"
                    {...formItemLayout}
                >
                    {getFieldDecorator('vote', {
                        rules: [{ required: true, message: 'Please input a vote' }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
            <br />
            {account.citizen && account.citizen.id == app.author.id && (
                <div>Edit</div>
            )}
        </Content>
    </AdvancedLayout>
)


class Container extends React.Component {
    componentDidMount() {
        this.props.getApp(this.props.id) //{ type: MarketplaceActions.APP_DETAIL_REQUEST, id: this.props.id }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Invalid form: ', err)
                return
            }

            console.log('Valid form: ', values)
            this.props.voteForApp(values.id, values.version, values.vote)
        })
    }

    render() {
        return <MainContent {...this.props} handleSubmit={this.handleSubmit.bind(this)} />
    }
}

Container.displayName = 'manage-app/Container'

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    app: state.marketplace.selectedApp,
    account: state.account
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getApp: (id) => dispatch(MarketplaceActions.getApp(id)),
    voteForApp: (id, version, vote) => dispatch(MarketplaceActions.voteForApp(id, version, vote))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Container))