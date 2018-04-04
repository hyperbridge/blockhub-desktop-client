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



const MainContent = ({ app, account }) => (
    <AdvancedLayout>
        <Content style={{ padding: '10px', marginTop: '10px' }}>
            {!app && (
                <div>
                    No app selected
                        </div>
            )}

            {app && (
                <div>
                    <div>{app.name}</div>
                    <div>{app.author.id}</div>
                    <div>Type: {app.type}</div>
                    <Rate onChange={handleRate} value={app.rating} />
                    {app.rating && <span className="ant-rate-text">{app.rating} stars</span>}
                    <br />
                    Downloads: {app.downloads}
                    <br />
                    {app.id}
                    <br />
                    Tags: {app.authorTags.join(", ")}
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
                </div>
            )}
        </Content>
    </AdvancedLayout>
)


class Container extends React.Component {
    componentDidMount() {
        this.props.getApp(this.props.id) //{ type: MarketplaceActions.APP_DETAIL_REQUEST, id: this.props.id }
    }

    render() {
        return <MainContent {...this.props} />
    }
}


Container.displayName = 'app-detail/Container'

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    app: state.marketplace.selectedApp
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getApp: (id) => dispatch(MarketplaceActions.getApp(id))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
