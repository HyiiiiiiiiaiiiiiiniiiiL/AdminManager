import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom'

//页面
import Layout from "component/layout/index.jsx"
import Home from "page/home/index.jsx"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        {/* 如果不用switch You tried to redirect to the same route you're currently on: "/" */}
                        <Route exact path="/" component={Home} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}
ReactDOM.render(
    <App />
    ,
    document.getElementById("app")
)