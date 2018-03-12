import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'
import styled from 'styled-components'

import AdvancedLayout from '../../components/advanced-layout'
import NetworkContainer from '../../components/network-container'
import * as NetworkActions from '../../modules/network'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
`

const Container = ({ republic, getTransaction }) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <NetworkContainer>
                <Button onClick={getTransaction}>disconnect</Button>
            </NetworkContainer>
            <div>
                Council
                <br />
                {republic.council.delegates.map((delegate) => (
                    <div>
                        {delegate.name} ({delegate.address})
                        <br />
                        Leader of {delegate.industry}
                    </div>
                ))}
                <br />
                <br />
                Elections
                <br />
                {republic.currentElections.map((election) => (
                    <div>
                        Title: {election.title}
                        <br />
                        {election.description}
                        <br />
                        Started: {election.startAt}
                        <br />
                        Ending: {election.endAt}
                        <br />
                        Nominees:
                        <br />
                        {election.nominees.map((nominee) => (
                            <div>{nominee.name} ({nominee.address})</div>
                        ))}
                    </div>
                ))}
                <br />
                <br />
                Past Elections
                <br />
                {republic.pastElections.map((election) => (
                    <div>
                        Ended: {election.endAt}
                        <br />
                        Winners:
                        <br />
                        {election.winners.map((winner) => (
                            <div>{winner.name} ({winner.address})</div>
                        ))}
                    </div>
                ))}
            </div>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'republic-structure/Container'

const mapStateToProps = state => ({
    republic: state.republic
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTransaction: () => NetworkActions.getTransaction(dispatch)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
