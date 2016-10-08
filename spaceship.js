var step = 100;

function keyDispatcher(key) {
    //invoked from html element
        console.log(key);
        switch (key.which) {
            case 38 : go('up'); break;
            case 40 : go('down'); break;
            case 37 : go('left'); break;
            case 39 : go('right'); break;
            default : /*go(key);*/ break;
        }
}


function go(where){

    var obj= document.getElementById('user');

    switch (where) {
        case '-' : if (step > 1 ) step-=1; break;
        case '=' : if (step < 20) step+=1; break;
        default: smoothMove(step,where,obj);break;
    }
}


function smoothMove(distance, direction, obj) {

    if (direction == 'left') {
        var interval = setInterval(function () {
            if (distance == 0) {clearInterval(interval); return;}
            obj.style.left = obj.offsetLeft-1+'px';
            distance--;
        }, 1);
    }

    if (direction == 'right') {
        var interval = setInterval(function () {
            if (distance == 0) {clearInterval(interval); return;}
            obj.style.left = obj.offsetLeft+1+'px';
            distance--;
        }, 1);
    }

    if (direction == 'up') {
        var interval = setInterval(function () {
            if (distance == 0) {clearInterval(interval); return;}
            obj.style.top = obj.offsetTop-1+'px';
            distance--;
        }, 1);
    }
    if (direction == 'down') {
        var interval = setInterval(function () {
            if (distance == 0) {clearInterval(interval); return;}
            obj.style.top = obj.offsetTop+1+'px';
            distance--;
        }, 1);
    }
}