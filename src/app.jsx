import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"

let style = {
    backGround: "bisque"
}
let jsx = <div style={style}>jsx.....
<p className="jsx">ces........</p>
</div>
ReactDOM.render(
    jsx,
    document.getElementById("app")
)