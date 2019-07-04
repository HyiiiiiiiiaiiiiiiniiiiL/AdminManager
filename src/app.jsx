import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//页面
import Layout from "component/layout/index.jsx"
import Home from "page/home/index.jsx"
import ProductRouter from 'page/product/router.jsx'
import Login from "page/login/index.jsx"
import ErrorPage from "page/error/index.jsx"
import UserList from "page/user/index.jsx"
import VideoPlayer from "page/shipin/index.jsx"
import OrderList from 'page/order/index.jsx';
import OrderDetail from 'page/order/detail.jsx';

class App extends React.Component {
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={ProductRouter} />
                    <Route path="/product-category" component={ProductRouter} />
                    <Route path="/user/index" component={UserList} />
                    <Route path="/order/index" component={OrderList} />
                    <Route path="/shipin/index" component={VideoPlayer} />
                    <Route path="/order/detail/:orderNumber" component={OrderDetail} />
                    <Redirect exact from="/order" to="/order/index" />
                    <Redirect exact from="/user" to="/user/index" />
                    <Redirect exact from="/shipin" to="/shipin/index" />
                    <Route component={ErrorPage} />
                </Switch>
            </Layout>
        )
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={props => LayoutRouter} />
                </Switch>
            </Router>
        )
    }
}
ReactDOM.render(
    <App />
    ,
    document.getElementById("app")
)