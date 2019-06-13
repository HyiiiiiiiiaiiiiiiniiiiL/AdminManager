import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"
class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Old"
        }
        console.log("开始 构造函数 初始化数据--constructor")
    }
    componentWillMount() {
        console.log("组件将要加载---componentWillMount")
    }
    componentDidMount() {
        console.log("组件加载完成---componentDidMount")
    }
    componentWillReceiveProps() {
        console.log("将要接收父组件传来的props----componentWillReceiveProps")
    }
    shouldComponentUpdate() {
        console.log("子组件是不是应该更新---shouldComponentUpdate")
        //这里给的布尔值 可以告诉组件是否要根据数据的变化进行更新
        return true
    }
    //组件将要更新
    componentWillUpdate() {
        console.log("如果shouldComponentUpdate返回的是true,这里将要更新componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("组件更新完成--componentDidUpdate")
    }
    componentWillUnmount() {
        //如果定义了定时器，在组件销毁的时候，就需要吧把定时器关掉，以减少内存的占用
        console.log("组件将要销毁---componentWillUnmount")
    }

    handleClick = () => {
        console.log("点击了更新")
        this.setState({ data: "New State" })
    }
    render() {
        console.log("渲染----render")
        return (
            <React.Fragment>
                <div>Props：{this.props.data}</div>
                <button onClick={this.handleClick}>更新组件</button>
            </React.Fragment>
        )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'Old Props',
            hasChild: true
        }
    }
    onPropsChange = () => {
        console.log("更新props")
        this.setState({ data: 'New Props' })
    }
    destroyChild = () => {
        this.setState({ hasChild: false })
    }
    render() {
        return (
            <div>
                {
                    this.state.hasChild ?
                        <Component data={this.state.data} />
                        : null
                }
                <button onClick={this.onPropsChange}>改变Props</button>
                <button onClick={this.destroyChild}>销毁子组件</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    ,
    document.getElementById("app")
)