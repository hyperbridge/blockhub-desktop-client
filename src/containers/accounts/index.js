import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'
import NetworkContainer from '../../components/network-container'
import * as NetworkActions from '../../modules/network'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout



const Container = ({ accounts, getAccounts }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <h1>Accounts <button onClick={getAccounts}>Reload Accounts</button></h1>
            
            {!accounts.length && (
                <div>None yet</div>
            )}

            {accounts.map((acc) => (
                <div>
                    {acc.publicAddress}
                </div>
            ))}
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'accounts/Container'

const mapStateToProps = state => ({
    accounts: state.network.accounts
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getAccounts: () => NetworkActions.getAccounts(dispatch)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
