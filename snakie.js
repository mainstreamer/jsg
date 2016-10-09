var step = 50;
var active = [];
var body = [document.getElementById('user')];
var wiggle = [];
var info = {};

function keyDispatcher(key) {
    // addBlock();
    // console.log(key);
    //invoked from html element
    switch (key.which) {
        case 38 : go('up'); break;
        case 40 : go('down'); break;
        case 37 : go('left'); break;
        case 39 : go('right'); break;
        case 32 : stopMoving(); break; //space
        case 13 : addBlock(); break; //enter
        default :  break;
    }
}

function go(where){

    // var obj = document.getElementById('user');
    wiggle[0] = where;
    var obj = body;

    // var obj = body[0];
    //     var obj = ;
        switch (where) {
            case '-' : if (step > 1 ) step-=1; break;
            case '=' : if (step < 20) step+=1; break;
            default : smoothMove(where, obj); break;
        }

    // if (body.length > 1){follow(info.direction)}


    // switch (where) {
    //     case '-' : if (step > 1 ) step-=1; break;
    //     case '=' : if (step < 20) step+=1; break;
    //     default : smoothMove(where, obj); break;
    // }
}

function follow(direction) {

    var obj = body[1];
    smoothMove(direction, obj);
}

function addBlock() {
    var block = document.createElement("div");
    block.style.width = '10px';
    block.style.height = '10px';
    block.style.background = 'purple';
    block.style.position = 'absolute';

    if (info.direction == 'right') {
        block.style.top = body[body.length-1].style.top;
        block.style.left = parseInt(body[body.length-1].style.left)-10;
    }

    if (info.direction == 'left') {
        block.style.top = body[body.length-1].style.top;
        block.style.left = parseInt(body[body.length-1].style.left)+10;
    }

    if (info.direction == 'up') {
        block.style.top = parseInt(body[body.length-1].style.top) + 10;
        block.style.left = body[body.length-1].style.left;
    }

    if (info.direction == 'down') {
        block.style.top = parseInt(body[body.length-1].style.top) - 10;
        block.style.left = body[body.length-1].style.left;
    }

    document.body.appendChild(block);
    body.push(block);
    wiggle.push(wiggle[wiggle.length-1]);

    // smoothMove(info.direction, block);

}

function stopMoving(){
    active.forEach(function (x) {
        clearInterval(x);
    });
}

function smoothMove(direction, obj) {
    stopMoving();
    info.direction = direction;

    if (direction == 'left') {
        var interval = setInterval(function () {
            obj.forEach(function(obj){
                obj.style.left = obj.offsetLeft-1+'px'
            });
            // obj.style.left = obj.offsetLeft-1+'px';
        }, 10);
        active.push(interval);
    }

    if (direction == 'right') {
        var interval = setInterval(function () {
            obj.forEach(function(obj){
                obj.style.left = obj.offsetLeft+1+'px'
            });
        }, 10);
        active.push(interval);
    }

    if (direction == 'up') {
        var interval = setInterval(function () {
            obj.forEach(function(obj){
                obj.style.top = obj.offsetTop-1+'px';
            });
            // obj.style.top = obj.offsetTop-1+'px';
        }, 10);
        active.push(interval);
    }

    if (direction == 'down') {
        var interval = setInterval(function () {

            /*
                1) read[0] wiggle - draw
                2) read[1] wiggle - 
                2) draw others according to wiggle and assign second ele wiggle down
             */

            obj.forEach(function(obj){
                obj.style.top = obj.offsetTop+1+'px';
            });
            // obj.style.top = obj.offsetTop+1+'px';
        }, 10);
        active.push(interval);
    }
}