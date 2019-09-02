import Routers from './RoutersHash.js'; 

/* 创建实例 */
var r1 = new Routers()

var content = document.querySelector('body')
const buttonBack = document.getElementById('back')

function changeBgColor(color) {
    content.style.backgroundColor = color
}

r1.route('/',function() {
    changeBgColor('yellow')
})

r1.route('/blue',function() {
  changeBgColor('blue')
})

r1.route('/green',function() {
  changeBgColor('green')
})

buttonBack.addEventListener('click', r1.backOff,false)
  


