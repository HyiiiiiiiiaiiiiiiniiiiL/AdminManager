import React from 'react'
import PageTitle from "component/page-title/index.jsx"
import "./index.css"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PageTitle title={"首页"}>
                    <button className="btn btn-error"></button>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        )
    }
}