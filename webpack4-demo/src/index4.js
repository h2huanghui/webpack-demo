import Routers from './RoutersHistory.js';

var r2 = new Routers()
r2.init(location.pathname)

const content = document.querySelector('body')
const ul = document.querySelector('ul')
const btnBack = document.getElementById('back')
const btnForward = document.getElementById('forward')

function changeBgColor(color) {
    content.style.backgroundColor = color
}

r2.route('/',function() {
    changeBgColor('yellow')
}) 

r2.route('/blue',function() {
    changeBgColor('blue')
}) 

r2.route('/green',function() {
    changeBgColor('green')
}) 

ul.addEventListener('click',e => {
    if(e.target.tagName === 'A') {
        e.preventDefault()
        r2.go(e.target.getAttribute('href'))
    }
})

btnBack.addEventListener('click', function() {
   window.history.back()
},false)

btnForward.addEventListener('click', function() {
    window.history.forward()
 },false)
