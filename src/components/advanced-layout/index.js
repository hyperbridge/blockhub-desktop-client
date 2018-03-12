import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Collapse, Tabs, Spin, Table } from 'antd'
import Terminal from 'terminal-in-react'
import styled from 'styled-components'

import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane/lib/SplitPane'
import ConnectionPanel from '../connection-panel'
import PeerConnector from '../peer-connector'
import { HotKeys } from 'react-hotkeys'

import './index.css'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const Panel = Collapse.Panel
const TabPane = Tabs.TabPane

const text = `
    Blockhub is copyright @ Hyperbridge Technology Inc.
`

const liveNewsData = {
    items: [
        {
            status: 'unread',
            time: '08:03:00',
            title: 'Adacel to Supply ATC Training System'
        },
        {
            status: 'unread',
            time: '08:03:00',
            title: 'Adacel to Supply ATC Training System'
        },
        {
            status: 'unread',
            time: '08:03:00',
            title: 'Adacel to Supply ATC Training System'
        },
        {
            status: 'unread',
            time: '08:03:00',
            title: 'Adacel to Supply ATC Training System'
        }
    ]
}

const LiveNews = ({ data }) => {
    const columns = [
        {
            title: '',
            dataIndex: 'status',
            key: 'status',
            render: (value, record) => <span>.</span>
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: 90,
            render: (value, record) => <span><Link to={`/news/${record.permalink}`}>{record.time}</Link></span>
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (value, record) => <span><Link to={`/news/${record.permalink}`}>{record.title}</Link></span>
        },
    ]

    return (
        <Spin spinning={!data.items}>
            <Table
                columns={columns}
                dataSource={data.items}
                pagination={false}
                locale={{
                    filterConfirm: 'OK',
                    filterReset: 'Reset',
                    emptyText: 'No Data'
                }}
            />
        </Spin>
    )
}


const Title = styled.text`
    font-size: 15px;
    color: #8E919A;
    text-transform: uppercase;
    padding: 23px;
    border-bottom: 2px solid ${props => props.active ? "#688292" : "transparent"};
    background: ${props => props.active ? "rgba(255, 255, 255, 0.05)" : "transparent"};
`

class Container extends React.Component {
    state = {
        showConsole: false,
        collapsed: false,
        pane1Height: 0,
        pane2Height: 0
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    componentDidMount() {
        this.setState({ pane1Height: ReactDOM.findDOMNode(this.collapse1).clientHeight })
        this.setState({ pane2Height: ReactDOM.findDOMNode(this.pane2).clientHeight - ReactDOM.findDOMNode(this.collapse2).clientHeight })

    }

    updateLayout() {
        setTimeout(() => {
            this.setState({ pane1Height: ReactDOM.findDOMNode(this.collapse1).clientHeight })
            this.setState({ pane2Height: ReactDOM.findDOMNode(this.pane2).clientHeight - ReactDOM.findDOMNode(this.collapse2).clientHeight })
        }, 300)
    }

    handleConsoleKey = (event) => {
        this.setState({ showConsole: !this.state.showConsole })
        this.updateLayout()
    }

    render() {
        const keyMap = {
            console: 'escape',
        }

        const handlers = {
            'console': this.handleConsoleKey
        }

        return (
            <Layout {...this.props} className="advanced-layout">
                <HotKeys keyMap={keyMap} handlers={handlers}>
                    <SplitPane
                        defaultSize={this.state.showConsole ? "20%" : 0.01}
                        split="horizontal"
                        step={10}
                        pane1Style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                        pane2Style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                    >
                        <div style={{ display: this.state.showConsole ? "flex" : "none", width: "100%" }}>
                            <Layout style={{ padding: '0' }}>
                                <Content style={{ 'padding': '10px', 'marginTop': '0' }}>
                                    <Tabs defaultActiveKey="console" size="small">
                                        <TabPane tab="Console" key="console">
                                            <Terminal
                                                color='#fff'
                                                backgroundColor='rgba(0, 0, 0, 0)'
                                                barColor='black'
                                                hideTopBar={true}
                                                allowTabs={false}
                                                style={{ fontWeight: "bold", fontSize: "1em" }}
                                                commands={{
                                                    'open-google': () => window.open('https://www.google.com/', '_blank'),
                                                    showmsg: this.showMsg,
                                                    popup: () => alert('Terminal in React')
                                                }}
                                                descriptions={{
                                                    'open-google': 'opens google.com',
                                                    showmsg: 'shows a message',
                                                    alert: 'alert', popup: 'alert'
                                                }}
                                                msg='Send your command'
                                            />
                                        </TabPane>
                                        <TabPane tab="Tools" key="tools">

                                        </TabPane>
                                        <TabPane tab="Connection" key="connection">
                                            <ConnectionPanel />
                                            <PeerConnector />
                                        </TabPane>
                                    </Tabs>
                                </Content>
                            </Layout>
                        </div>
                        <div>
                            <SplitPane
                                split="vertical"
                                pane1Style={{ background: '#181B1F' }}
                                pane2Style={{ background: 'rgba(0, 0, 0, 0)' }}
                                minSize={300}
                                step={10}
                            >
                                <div>
                                    <SplitPane
                                        defaultSize={65}
                                        split="horizontal"
                                        pane1Style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                                        pane2Style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                                    >
                                        <div>
                                            <img src="https://hyperbridge.org/wp-content/uploads/sites/2/2018/03/Blockhub-Logo-Verticalfinal.png" style={{width: '70px'}} />
                                        </div>
                                        <div>
                                            <SplitPane
                                                split="horizontal"
                                                size={this.state.pane1Height}
                                                pane1Style={{ background: '#14161A' }}
                                                pane2Style={{ background: '#14161A' }}
                                                ref={(ref) => this.pane1 = ref}
                                                step={10}
                                            >
                                                <div>
                                                    <Collapse
                                                        bordered={false}
                                                        defaultActiveKey={['1']}
                                                        ref={(ref) => this.collapse1 = ref}
                                                        onChange={() => setTimeout(() => this.setState({ pane1Height: ReactDOM.findDOMNode(this.collapse1).clientHeight }), 300)}
                                                        style={{ display: 'none', width: '100%' }}
                                                    >
                                                        <Panel header="Account Info" key="1" disabled>
                                                            <p>{"stuff"}</p>
                                                        </Panel>
                                                        <Panel header="Live News" key="2" className="live-news">
                                                            <LiveNews data={liveNewsData} />
                                                        </Panel>
                                                        <Panel header="Time Zone Map" key="3">
                                                            <p>{"stuff"}</p>
                                                        </Panel>
                                                    </Collapse>
                                                </div>
                                                <div>
                                                    <SplitPane split="horizontal"
                                                        defaultSize="50%"
                                                        step={10}
                                                    >
                                                        <div style={{width: '100%'}}>
                                                            <Sider
                                                                width="100%"
                                                                trigger={null}
                                                                collapsible
                                                                collapsed={this.state.collapsed}
                                                            >
                                                                <Menu
                                                                    theme="dark"
                                                                    mode="inline"
                                                                    defaultSelectedKeys={['1']}
                                                                    style={{ height: '100%', borderRight: 0 }}
                                                                >
                                                                    <Menu.Item key="home">
                                                                        <Icon type="home" /><span>Home</span>
                                                                    </Menu.Item>
                                                                    <SubMenu key="community" title={<span><Icon type="laptop" /><span>Community</span></span>}>
                                                                        <Menu.Item key="community-top"><Link to="/community/chat">Chat</Link></Menu.Item>
                                                                    </SubMenu>
                                                                    <SubMenu key="republic" title={<span><Icon type="laptop" /><span>Republic</span></span>}>
                                                                        <Menu.Item key="republic-structure"><Link to="/republic/structure">Structure</Link></Menu.Item>
                                                                        <Menu.Item key="republic-membership"><Link to="/republic/membership">Membership</Link></Menu.Item>
                                                                        <Menu.Item key="republic-elections"><Link to="/republic/elections">Elections</Link></Menu.Item>
                                                                    </SubMenu>
                                                                    <SubMenu key="friends" title={<span><Icon type="laptop" /><span>Friends</span></span>}>
                                                                        <Menu.Item key="friends-top"><Link to="/friends/top">Top Friends</Link></Menu.Item>
                                                                    </SubMenu>
                                                                    <SubMenu key="about" title={<span><Icon type="notification" /><span>About</span></span>}>
                                                                        <Menu.Item key="about-news">News</Menu.Item>
                                                                        <Menu.Item key="about-status">Site Status</Menu.Item>
                                                                        <Menu.Item key="about-privacy">Privacy Policy</Menu.Item>
                                                                        <Menu.Item key="about-cookie">Cookie Policy</Menu.Item>
                                                                        <Menu.Item key="about-terms">Terms and Conditions</Menu.Item>
                                                                        <Menu.Item key="about-docs">Documentation</Menu.Item>
                                                                        <Menu.Item key="about-fees">Fees</Menu.Item>
                                                                        <Menu.Item key="about-support">Support</Menu.Item>
                                                                        <Menu.Item key="about-contact">Contact Us</Menu.Item>
                                                                    </SubMenu>
                                                                    <SubMenu key="settings" title={<span><Icon type="wheel" /><span>Settings</span></span>}>
                                                                        <Menu.Item key="settings-accounts"><Icon type="user" /><span>Accounts</span></Menu.Item>
                                                                        <Menu.Item key="settings-client"><Icon type="user" /><span>Client</span></Menu.Item>
                                                                    </SubMenu>
                                                                    <Menu.Item key="8" style={{ display: "none" }}>
                                                                        <Icon
                                                                            className="trigger"
                                                                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                                                            onClick={this.toggle}
                                                                        />
                                                                    </Menu.Item>
                                                                </Menu>
                                                            </Sider>
                                                        </div>
                                                        <div> D</div>
                                                    </SplitPane>
                                                </div>
                                            </SplitPane>
                                        </div>
                                    </SplitPane>
                                </div>
                                <SplitPane
                                    split="horizontal"
                                    minSize={65}
                                    step={10}
                                    pane1Style={{ background: '#22272F' }}
                                >
                                    <Header className="header titlebar">
                                        <div className="logo" />
                                        <Menu
                                            theme="dark"
                                            mode="horizontal"
                                            defaultSelectedKeys={['1']}
                                            style={{ lineHeight: '64px' }}
                                        >
                                            <Menu.Item key="home"><Link to="/"><Title active={this.props.section == 'home'}>Home</Title></Link></Menu.Item>
                                            <Menu.Item key="apps"><Link to="/apps"><Title active={this.props.section == 'apps'}>Apps</Title></Link></Menu.Item>
                                            <Menu.Item key="games"><Link to="/games"><Title active={this.props.section == 'games'}>Games</Title></Link></Menu.Item>
                                            <Menu.Item key="music"><Link to="/music"><Title active={this.props.section == 'music'}>Music</Title></Link></Menu.Item>
                                            <Menu.Item key="video"><Link to="/video"><Title active={this.props.section == 'video'}>Video</Title></Link></Menu.Item>
                                        </Menu>
                                    </Header>
                                    <SplitPane
                                        split="horizontal"
                                        size={this.state.pane2Height}
                                        step={10}
                                        pane1Style={{ background: '#38414c', overflowY: 'auto' }}
                                        pane2Style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                                        ref={(ref) => this.pane2 = ref}
                                    >
                                        <Layout style={{ padding: '0' }}>
                                            <Content style={{ 'padding': '10px', 'marginTop': '0' }}>
                                                {this.props.children}
                                            </Content>
                                        </Layout>
                                        <div style={{display: 'none'}}>
                                            <Collapse
                                                bordered={false}
                                                defaultActiveKey={['1']}
                                                ref={(ref) => this.collapse2 = ref}
                                                onChange={() => setTimeout(() => this.setState({ pane2Height: ReactDOM.findDOMNode(this.pane2).clientHeight - ReactDOM.findDOMNode(this.collapse2).clientHeight }), 300)}
                                                style={{ display: 'table', width: '100%' }}
                                            >
                                                <Panel header="Footer" key="1">
                                                    <p className="CmUoL">{text}</p>
                                                </Panel>
                                            </Collapse>
                                        </div>
                                    </SplitPane>
                                </SplitPane>
                            </SplitPane>
                        </div>
                    </SplitPane>
                </HotKeys>
            </Layout>
        )
    }
}

Container.displayName = 'advanced-layout/Container'

const mapStateToProps = (state) => ({
    section: state.site.section
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
