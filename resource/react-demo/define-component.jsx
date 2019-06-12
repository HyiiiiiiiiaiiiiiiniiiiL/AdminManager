import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"

function Component() {
    return <h1>测试......</h1>
}
class Es6Component extends React.Component {
    render() {
        return <h1>I am 测试‘’‘’‘’</h1>
    }
}

ReactDOM.render(
    <React.Fragment>
        <Component />
        <Es6Component />
    </React.Fragment>
    ,
    document.getElementById("app")
)