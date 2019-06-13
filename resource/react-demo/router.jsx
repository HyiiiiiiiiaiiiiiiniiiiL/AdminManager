//页面路由
window.location.href = 'http://www.baidu.com'
//回退
history.back()
//页面路由和hash路由可以通过a链接来跳转
//hash路由
window.location = '#hash'
window.onhashchange = function() {
    console.log("current hash:", window.location.hash)
}

//h5路由
//推进一个路由  可以是页面路由也可以是hash路由，不会刷新页面
history.pushState("name", "title", "/path")
//替换一个路由
history.replaceState("name", "title", "/push")
//popstate
window.onpopstate = function() {
    console.log("这个取到的是全路径--http://www.baidu.com", window.location.href)
    console.log("这个是取路径名，就是路径的部分，文件的地址", window.location.pathname)
    console.log("取hash值", window.location.hash)
    console.log("查询(参数)部分，得到的是url中?部分", window.location.search)
}