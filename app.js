function setAttribute(attributes, element) {
    for (var i=attributes.length; i>0; i--){
        attributes[i]
    }
}

function createElement(element, attachTo, attributes, inner) {
    // if(elementParamName && elementParamVal) {
    //     var x = document.createElement(element, attachTo);
    //     x.appendChild(attachTo);
    // }
    var x = document.createElement(element);
    x.innerHTML = 'test';
    x.setAttribute('class','foo');
    x.setAttribute('id','yo');
    // x.setAttribute('id','cool');

    document.getElementById(attachTo).appendChild(x);
}
function sayName(){
    alert(document.getElementsByName('firstName'));
};
function askName() {
    createElement('button','main');
    // var x =document.getElementsByTagName('BUTTON');
    // alert(x.value);
    // document.getElementsByTagName('button').appendChild(document.createTextNode('XA'));
    // x.innerHTML = 'YO';
}
function start(){
    //ENTRY POINT
    var a = {'lala' : '123'};
    alert(getPropertyValue);
    // askName();
    //document.getElementById('main').textContent = '123';
}
function sayHello(){
    alert('ello hord!');
}