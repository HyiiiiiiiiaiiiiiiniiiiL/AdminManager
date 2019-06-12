import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"

let style = {
    backGround: "bisque"
}
let name = 'Hiiiiiiii'
let flag = false
let nameArr = ["Rose", "John", "HaHa"]
let jsx = (
    <div style={style}>
        {/* 变量的使用 */}
        <p> I am {name}</p>
        {
            flag ? <p>i am true</p> : <p>i am false</p>
        }
        {/* 数组循环 */}
        {nameArr.map((name, index) => <p key={index}>Hello {name}</p>)}
        <p className="jsx">ces........</p>
    </div>

)
ReactDOM.render(
    jsx,
    document.getElementById("app")
)