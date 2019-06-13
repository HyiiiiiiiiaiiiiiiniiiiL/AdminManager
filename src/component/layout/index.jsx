import React from 'react'
import "./theme.css"

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="wrapper">
                {/* <TopNav></TopNav>
                <SideNav></SideNav> */}
                layout text
                {this.props.children}
            </div>
        )
    }
}