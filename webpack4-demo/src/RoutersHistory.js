class Routers {
    constructor() {
        this.routes = {}
        //在初始化时监听popstate事件
        this._bindPopState()
    }
    //初始化路由
    init(path) {
        //修改浏览历史中当前记录，不触发跳转
        history.replaceState({path: path},null,path)
        this.routes[path] && this.routes[path]()
        console.log('初始化',history.state)
    }

    //将路径和对应回调函数加入hashMap储存
    route(path, callback) {
        this.routes[path] = callback || function() {}
    }

    //触发路由对应回调
    go(path) {
        //在浏览历史中添加历史记录,不会触发跳转
        history.pushState({path:path},null,path)
        this.routes[path] && this.routes[path]()
        console.log('点击页面链接',history.state)
    }

    //监听popstate事件
    _bindPopState() { 
        //当同一个文档的浏览历史(即history对象)出现变化时，就会触发popstat事件[调用replaceState方法或者pushState方法,并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者JS调用back、forward、go方法时才会触发]
        window.addEventListener('popstate', e => {
            const path = e.state && e.state.path
            this.routes[path] && this.routes[path]()
            console.log('浏览器回退',history.state)
        })

    }

    
}

export default Routers