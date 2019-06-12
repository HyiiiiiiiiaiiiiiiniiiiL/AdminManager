import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"
class TestComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Hiiiiii",
            age: 18
        }
    }
    handleClick = () => {
        this.setState({ age: this.state.age + 1 });
    }
    render() {
        return <div>
            <h1>I am {this.state.name} {this.props.sex}</h1>
            <p>age {this.state.age}</p>
            <button onClick={this.handleClick}>加</button>
        </div>
    }
}
class Title extends React.Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        return <h1>{this.props.title}</h1>
    }
}
class TitleChildren extends React.Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        return <h1>{this.props.children}</h1>
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <div>appppppppppppppp</div>
                <Title title="App Title" />
                <TitleChildren>
                    <span>App Span</span>
                    <a href="">link</a>
                </TitleChildren>
                <TestComponent />
            </div>
        )
    }
}
ReactDOM.render(
    <React.Fragment>
        <TestComponent sex="lv" />
    </React.Fragment>
    ,
    document.getElementById("app")
)