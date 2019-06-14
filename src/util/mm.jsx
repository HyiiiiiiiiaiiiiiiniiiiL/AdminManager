export default class MUtil {
    request(param) {
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
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
    getUrlParam(name) {
        //xxx.com?param=12345&param=456
        let queryString = window.location.search.split('?')[1] || ""
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        let result = queryString.match(reg)
        return result ? decodeURI(result[2]) : null

    }
    errorTips(errorMsg) {
        alert(errorMsg || "有```")
    }
}