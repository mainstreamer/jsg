var step = 1;

function keyPressed(e) {
    var keynum;
    if(window.event) { // IE
        keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
        keynum = e.which;
    }

    // keyDispatcher(String.fromCharCode(keynum));
    // var a = 'right';
    // keyDispatcher(String.x);

}

function keyDispatcher(key){
    console.log(key);
    switch (key) {
        case '&' : go('up'); break;
        case '(' : go('down'); break;
        case '%' : go('left'); break;
        case '\'' : go('right'); break;
        default : go(key); break;
    }
}

function go(where){

    var obj= document.getElementById('user');

    switch (where) {
        case '-' : if (step > 1 ) step-=1; break;
        case '=' : if (step < 20) step+=1; break;
        case 'right' : obj.style.left = obj.offsetLeft+step+'px';break;
        case 'left' : obj.style.left = obj.offsetLeft-step+'px'; break;
        case 'up' : console.log(obj.style.top); obj.style.top = obj.offsetTop-step+'px'; break;
        case 'down' : console.log(obj.style.top); obj.style.top = obj.offsetTop+step+'px'; break;
    }
    // alert(this.elements);

    // document.getElementById('user').offsetLeft = 100;
    // document.getElementById('user').style.position = 'relative';

    // console.info(obj.offsetLeft);
}

// function goLeft(obj){
//     if ( !(obj instanceof Object)) {
//         console.info('ERROR! '+typeof obj+' given');
//     }
//
//     obj.style.left = '100px';
//     console.info(obj.offsetLeft);
//     // if (canIGo('left',obj)) {
//     //     obj.offsetLeft += 10;
//     // }
// }





function start() {

    if (String.fromCharCode(keynum));
    go(document.getElementById('main'));
}

// function start(x) {
//
//     document.writeln(draw(610));
// }

