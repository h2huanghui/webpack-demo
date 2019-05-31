import _ from 'lodash';
import './style.css';
import Icon from './knowledge.jpg'
import Data from './data/data.xml'
import printMe from './print.js';
import { cube } from './js/common/math.js';

if(process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!')
}


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var elementPre = document.createElement('pre');
   
    //Loadash,现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack1'], '5 cubed is equal to ' + cube(5));
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    element.classList.add('hello');

    //将图像添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
  }
  
  document.body.appendChild(component());