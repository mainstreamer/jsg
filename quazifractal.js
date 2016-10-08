var step = 1;

function keyPressed(e) {
    var keynum;
    if(window.event) { // IE
        keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
        keynum = e.which;
    }

    // keyDispatcher(String.fromCharCode(keynum));
    var a = 'right';
    keyDispatcher(String.x);

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

    // alert(String.fromCharCode(keynum));
    // go(document.getElementById('main'));
}

// function start(x) {
//
//     document.writeln(draw(610));
// }

function draw(width){
    if ((width/3) <=15) {
        element = '&nbsp';
    } else {
        element = draw(width/3 - 3);
    }
    var pattern =''+
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' + '<br>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' +
            '<div style="display: block; float: left; border: 1px solid black; background: black; width:'+width+'px; height:'+width+'px;">&nbsp;</div>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' + '<br>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>' +
            '<div style="display: block; float: left; border: 1px solid black; width:'+width+'px; height:'+width+'px;">'+element+'</div>'
        ;
    return pattern;
}

