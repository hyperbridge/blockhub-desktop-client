import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'


const NoConnection = () => (
    <div>Not connected</div>
)

export const Container = (props) => (
    props.connected ? props.children : <NoConnection />
)

Container.displayName = 'network-container/Container'

const mapStateToProps = (state) => ({
    connected: state.network.connected
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)