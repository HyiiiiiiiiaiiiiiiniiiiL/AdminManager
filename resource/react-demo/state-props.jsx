import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"
class Es6Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Hiiiiii"
        }
    }
    render() {
        return <h1>I am {this.state.name} {this.props.age}</h1>
    }
}
ReactDOM.render(
    <React.Fragment>
        <Es6Component age="18" />
    </React.Fragment>
    ,
    document.getElementById("app")
)