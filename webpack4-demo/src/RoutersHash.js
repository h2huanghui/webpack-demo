/** 
 *1.初始化Class
 *2.实现路由hash储存与执行
 *  2.1将路由的hash以及对应的callback函数储存
 *  2.2触发路由hash变化后，执行对应的callback函数
 *3.监听对应事件
 *4.增加回退功能
 *  4.1储存过往的hash路由,并且创建一个指针
 *  4.2后退，只需要执行回调函数,不需要添加数组和移动指针
 */ 

/* 初始化一个路由 */
class Routers {
    constructor() {
      // 以键值对的形式储存路由
      this.routes = {}
      // 当前路由的URL
      this.currentUrl = ''
      //记录出现过的hash
      this.history = []
      /* 作为指针，默认指向this.history的末尾,根据后退前进指向histoty中不同的hash */
      this.currentIndex = this.history.length - 1
      this.refresh = this.refresh.bind(this)
      this.backOff = this.backOff.bind(this)
      //默认不是后退操作
      this.isBack = false
      this.isForward = false
      // 监听事件
      window.addEventListener('load', this.refresh, false)
      window.addEventListener('hashchange', this.refresh, false)
    }
    // 将path路径与对应的callback函数储存
    route(path, callback) {
      this.routes[path] = callback || function() {}
    }
    // 刷新
    refresh() {
      // 获取当前URL中的hash路径
      this.currentUrl = location.hash.slice(1) || '/'
      if(!this.isBack) {
          //将当前hash路由推入数组储存
          this.history.push(this.currentUrl)
          //指针向前移动
          this.currentIndex++
      }
    
      // 执行当前hash路径的callback函数
      this.routes[this.currentUrl]()
      console.log('指针2:',this.currentIndex,'history2:',this.history)
      this.isBack = false
      this.isForward = false
    }

    //后退。每一次后退，都会执行相应的callback，这会触发refresh()执行
    backOff() {
      //后退操作设置为true
      this.isBack = true
      // this.isForward = true
      this.currentIndex <= 0 ? (this.currentIndex = 0) : (this.currentIndex = this.currentIndex - 1)
      location.hash = `#${this.history[this.currentIndex]}`
      this.routes[this.history[this.currentIndex]]()
      console.log('指针1:',this.currentIndex,'history1:',this.history)
    }
  }
  
  export default Routers
  