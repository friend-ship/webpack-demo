import _ from 'lodash';
import printMe from './print.js';



function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = "点这里，然后查看console!"
    btn.onclick = printMe;
    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());