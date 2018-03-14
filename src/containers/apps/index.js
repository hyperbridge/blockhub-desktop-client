import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin, Tabs } from 'antd'
import { WhiteSpace } from 'antd-mobile'
import db from '../../app/db/db'

import AdvancedLayout from '../../components/advanced-layout'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const TabPane = Tabs.TabPane


const Container = ({ republic, marketplace }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <h2>My Apps <button>Create App</button></h2>
            {republic.currentCitizen.apps.map((app) => (
                <div>
                    <Link to={"app/" + app.id}>{app.name}</Link>
                </div>
            ))}

            filters
            <br />
            featured
            <br />
            special offers
            <br />
            {(db.apps.findOne({ id: 1 }) || {}).name}

            <Tabs defaultActiveKey="new-trending" size="small">
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
                        <div>
                            <Link to={"app/" + app.id}>{app.name}</Link>
                        </div>
                    ))}
                </TabPane>
            </Tabs>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'apps/Container'

const mapStateToProps = state => ({
    marketplace: state.marketplace,
    republic: state.republic
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
