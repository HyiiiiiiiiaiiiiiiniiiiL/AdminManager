export default class MUtil {
    request = (param) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || "get",
                url: param.url || '',
                dataType: param.dataType || "json",
                data: param.data || null,
                success: res => {
                    if (0 === res.status) {
                        typeof resolve === "function" && resolve(res.data, res.msg)
                    } else if (10 === res.status) {
                        this.doLogin()
                    } else {
                        typeof reject === "function" && reject(res.msg || res.data)
                    }
                },
                error: err => {
                    typeof reject === "function" && reject(err.statusText)
                }
            })
        })
    }
    doLogin = () => {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
    getUrlParam = (name) => {
        //xxx.com?param=12345&param=456
        let queryString = window.location.search.split('?')[1] || ""
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        let result = queryString.match(reg)
        return result ? decodeURI(result[2]) : null

    }
    //错误提示
    errorTips = (errorMsg) => {
        alert(errorMsg || "有雷！")
    }
    successTips = (successMsg) => {
        alert(successMsg || "操作成功!")
    }
    //本地存储
    setStorage = (name, data) => {
        let dataType = typeof data
        //对象
        if (dataType === "object") {
            window.localStorage.setItem(name, JSON.stringify(data))
        } else if (["number", "string", "boolean"].indexOf(dataType) >= 0) {
            //基础类型
            window.localStorage.setItem(name, data)
        } else {
            //其他不支持的类型
            alert("该类型不能用于本地存储")
        }
    }
    getStorage = (name) => {
        let data = window.localStorage.getItem(name)
        if (data) {
            return JSON.parse(data)
        } else {
            return ""
        }
    }
    //删除本地存储
    removeStorage = (name) => {
        window.localStorage.removeItem(name)
    }
}