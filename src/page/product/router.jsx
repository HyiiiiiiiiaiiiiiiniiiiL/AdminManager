import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import ProductList from 'page/product/index/index.jsx';


export default class ProductRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/product/index" component={ProductList} />
                <Redirect exact from="/product" to="/product/index" />
            </Switch>
        )
    }
}