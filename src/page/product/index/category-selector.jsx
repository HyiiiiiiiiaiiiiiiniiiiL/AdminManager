import React from 'react'
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'

import "./category-selector.scss"

const _mm = new MUtil();
const _product = new Product();
export default class CategorySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstCategoryList: [],
            firstCategoryId: 0,
            secondCategoryList: [],
            secondCategoryId: 0
        }
    }
    componentDidMount() {
        this.loadFirstCategory()
    }
    componentWillReceiveProps(nextProps) {
        let categoryIdChange = this.props.categoryId !== nextProps.categoryId
        let parentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId
        //数据没有发生变化的时候，直接不做处理
        if (!categoryIdChange && !parentCategoryIdChange) {
            return;
        }
        //假如只有一级品类
        if (nextProps.parentCategoryId === 0) {
            this.setState({
                firstCategoryId: nextProps.categoryId,
                secondCategoryId: 0
            })
        } else {
            //有两级品类
            this.setState({
                firstCategoryId: nextProps.parentCategoryId,
                secondCategoryId: nextProps.categoryId
            }, () => {
                parentCategoryIdChange && this.loadSecondCategory()
            })
        }
    }
    //加载一级分类
    loadFirstCategory = () => {
        _product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList: res
            })
        }, errMsg => {
            _mm.errorTips(errMsg)
        })
    }
    //加载二级分类
    loadSecondCategory = () => {
        const { firstCategoryId } = this.state
        _product.getCategoryList(firstCategoryId).then(res => {
            this.setState({
                secondCategoryList: res
            })
        }, errMsg => {
            _mm.errorTips(errMsg)
        })
    }
    //选择一级品类
    onFirstCategoryChange = (e) => {
        if (this.props.readOnly) {
            return
        }
        let newValue = e.target.value || 0
        this.setState({
            firstCategoryId: newValue,
            //更新一级品类后，应先清空二级分类
            secondCategoryId: 0,
            secondCategoryList: []
        }, () => {
            //更新二级品类
            this.loadSecondCategory()
            this.onPropsCategoryChange()
        })
    }
    //选择了二级品类
    onSecondCategoryChange = (e) => {
        if (this.props.readOnly) {
            return
        }
        let newValue = e.target.value || 0
        this.setState({
            secondCategoryId: newValue,
        }, () => {
            this.onPropsCategoryChange()
        })

    }
    //传给父组件选中的结果
    onPropsCategoryChange = () => {
        //判断props里的回调函数存在
        let categoryChangeable = typeof this.props.onCategoryChange === "function"
        if (this.state.secondCategoryId) {
            //如果有二级品类，就传二级品类的id,和父id
            categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId)
        } else {
            //如果只有一级品类
            categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId, 0)
        }
    }
    render() {
        return (
            <div className="col-md-10">
                <select className="form-control cate-select"
                    onChange={(e) => this.onFirstCategoryChange(e)}
                    value={this.state.firstCategoryId}
                    readOnly={this.props.readOnly}
                >
                    <option value="">请选择一级分类</option>
                    {this.state.firstCategoryList.map((category, index) => {
                        return <option key={index} value={category.id}>{category.name}</option>
                    })}
                </select>
                {this.state.secondCategoryList.length ?
                    <select className="form-control cate-select"
                        onChange={(e) => this.onSecondCategoryChange(e)}
                        value={this.state.secondCategoryId}
                        readOnly={this.props.readOnly}
                    >
                        <option value="">请选择二级分类</option>
                        {this.state.secondCategoryList.map((category, index) => {
                            return <option key={index} value={category.id}>{category.name}</option>
                        })}
                    </select>
                    : null}
            </div>
        )
    }
}