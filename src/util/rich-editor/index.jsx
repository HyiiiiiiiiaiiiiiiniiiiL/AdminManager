//cspell ： word 
import React from 'react'
//TODO  eslint如何添加单词拼写校验
//当引入第三方组件的时，还需要引入其样式，有没有解决方法？？？？TODO
import Simditor from "simditor"
import 'simditor/styles/simditor.scss'
//富文本编辑器，依赖jQuery
export default class RichEditor extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.loadEditor()
    }
    componentWillReceiveProps(nextProps){
        if(this.props.defaultDetail !== nextProps.defaultDetail){
            this.simditor.setValue(nextProps.defaultDetail);
        }
    }
    loadEditor = () => {
        let element = this.refs['textarea']
        this.simditor = new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || "请输入",
            upload:{
                url:'/manage/product/richtext_img_upload.do',
                defaultImage:'',
                fileKey:"upload_file"
            }
        })
        this.bindEditorEvent()
    }
    bindEditorEvent=()=>{
        this.simditor.on('valuechanged',e=>{
            this.props.onValueChange(this.simditor.getValue())
        })
    }
    render() {
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )
    }
}