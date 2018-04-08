import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin, Tabs } from 'antd'
import { WhiteSpace } from 'antd-mobile'
import db from '../../app/db/db'

import AdvancedLayout from '../../components/advanced-layout'
import ProductTile from '../../components/product-tile'

import * as MarketplaceActions from '../../modules/marketplace'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const TabPane = Tabs.TabPane


const MainContent = ({ republic, marketplace }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px', 'background': '#fff' }}>
            <h2>My Apps <Link to="/app/create">Create App</Link></h2>
            {republic.currentCitizen.apps.map((app) => (
                <div>
                    <Link to={"app/" + app.id}>{app.name}</Link>
                </div>
            ))}

            <h2>Filters</h2>
            <br />
            featured
            <br />
            special offers
            <br />

            <h2>All Apps</h2>
            <Tabs defaultActiveKey="new-trending" size="small">
                <TabPane tab="All" key="all">
                    <br />
                    {marketplace.apps.all.map((app) => (
                        <div>
                            <Link to={"app/" + app.id}>{app.name}</Link>
                        </div>
                    ))}
                </TabPane>

                <TabPane tab="New and Trending" key="new-trending">
                    <br />
                    {marketplace.apps.newTrending.map((app) => (
                        <div>
                            <Link to={"app/" + app.id}>{app.name}</Link>
                        </div>
                    ))}
                </TabPane>
                
                <TabPane tab="Top Sellers" key="top-sellers">
                    <br />
                    {marketplace.apps.topSellers.map((app) => (
                        <div>
                            <Link to={"app/" + app.id}>{app.name}</Link>
                        </div>
                    ))}
                </TabPane>
                
                <TabPane tab="Upcoming" key="upcoming">
                    <br />
                    {marketplace.apps.upcoming.map((app) => (
                        <div>
                            <Link to={"app/" + app.id}>{app.name}</Link>
                        </div>
                    ))}
                </TabPane>
                
                <TabPane tab="Specials" key="specials">
                    {marketplace.apps.specials.map((app) => (
                        <ProductTile {...app}>
                        </ProductTile>
                    ))}
                </TabPane>
            </Tabs>
        </Content>
    </AdvancedLayout>
)



class Container extends React.Component {
    componentDidMount() {
        this.props.getAppListing(0, 0)
    }

    render() {
        return <MainContent {...this.props} />
    }
}


Container.displayName = 'apps/Container'

const mapStateToProps = state => ({
    marketplace: state.marketplace,
    republic: state.republic
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getAppListing: () => dispatch(MarketplaceActions.getAppListing())
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
