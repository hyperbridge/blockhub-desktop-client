import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { Icon, NavBar } from 'antd-mobile'
import styled from 'styled-components'


export const Container = ({ id, name, changePage }) => (
    <div>

        <Link to={"app/" + id}>{name}</Link>
    </div>
)

Container.displayName = 'product-tile/Container'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
