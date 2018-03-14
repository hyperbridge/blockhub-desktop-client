import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin, Rate } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

import * as MarketplaceActions from '../../modules/marketplace'


const { SubMenu } = Menu
const { Header, Content, Sider } = Layout


const handleRate = () => {

}

const Container = ({ app }) => (
    <AdvancedLayout>
        <Content style={{ padding: '10px', marginTop: '10px' }}>
            <div>{app.title}</div>
            <div>{app.publisher}</div>
            <Rate onChange={handleRate} value={app.rating} />
            {app.rating && <span className="ant-rate-text">{app.rating} stars</span>}
            <br />
            Downloads: {app.downloads}
            <br />
            {app.id}
            <div>
                tabs
            </div>
            <div>
                friends who own this
            </div>
            <div>
                achievements
            </div>
            <div>
                news
            </div>
            <div>
                Launch
            </div>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'app-detail/Container'

const mapStateToProps = (state, ownProps) => ({
    app: MarketplaceActions.getApp(ownProps.match.params.id)
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
