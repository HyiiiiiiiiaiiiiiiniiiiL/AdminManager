import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import "./index.scss"
class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route exact path={`${this.props.match.path}`}
                    render={() => <div>Component A</div>} />
                {/* 区分子路径和带参数的路由，就把通配的路径放到最后面 */}
                <Route exact path={`${this.props.match.path}/sub`}
                    render={() => <div>Component A 子路径</div>} />
                <Route exact path={`${this.props.match.path}/:id`}
                    render={(route) => {
                        return <div>Component A 参数：{route.match.params.id || ""}</div>
                    }} />
            </Switch>
        )
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>Component B</div>
        )
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br />
                <Link to="/a/123">带参数的组件A</Link>
                <br />
                <Link to="/a/sub">区分子路径</Link>
                <br />
                <Link to="/b">组件B</Link>
                {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Wrapper>
    </Router>
    ,
    document.getElementById("app")
)