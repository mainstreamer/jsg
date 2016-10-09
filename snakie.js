var step = 50;
var active = [];
var body = [ new Cell(document.getElementById('user')) ];
var wiggle = [];
var info = {};

function Cell(element) {
    this.element = element;
    this.direction = '';
    this.cnt = 0;
    this.index = 0;
    // element: document.getElementById('user'),
    this.moveRight = function () {
        this.element.style.left = this.element.offsetLeft+1+'px'
    };
    this.moveLeft = function () {
        this.element.style.left = this.element.offsetLeft-1+'px';
    };
    this.moveUp = function () {
        this.element.style.top = this.element.offsetTop-1+'px';
    };
    this.moveDown = function () {
        this.element.style.top = this.element.offsetTop+1+'px';
    }
};


function wiggle(direction) {
    wiggle.pop();
    wiggle.unshift(direction);
}

function keyDispatcher(key) {
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
    // console.log(wiggle);
    var obj = body;

        switch (where) {
            case '-' : if (step > 1 ) step-=1; break;
            case '=' : if (step < 20) step+=1; break;
            default : smoothMove(where, obj); break;
        }
}

function addBlock() {
    var block = document.createElement("div");
    block.style.width = '10px';
    block.style.height = '10px';
    block.style.background = 'purple';
    block.style.position = 'absolute';

    if (info.direction == 'right') {
        block.style.top = body[body.length-1].element.style.top;
        block.style.left = parseInt(body[body.length-1].element.style.left)-10;
    }

    if (info.direction == 'left') {
        block.style.top = body[body.length-1].element.style.top;
        block.style.left = parseInt(body[body.length-1].element.style.left)+10;
    }

    if (info.direction == 'up') {
        block.style.top = parseInt(body[body.length-1].element.style.top) + 10;
        block.style.left = body[body.length-1].element.style.left;
    }

    if (info.direction == 'down') {
        block.style.top = parseInt(body[body.length-1].element.style.top) - 10;
        block.style.left = body[body.length-1].element.style.left;
    }

    document.body.appendChild(block);
    var newCell = new Cell(block);
    newCell.direction = body[body.length-1].direction;
    newCell.index = body.length;
    body.push(newCell);
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
    var i = 0;
    body[0].direction = direction;


    if (direction == 'left') {
        var cnt = 0;
        var interval = setInterval(function () {
            if (cnt == 10) {
                cnt = 0;
                wiggle.pop();
                wiggle.unshift(direction);
            } else {cnt++; }

            obj.forEach(function (obj) {
                if (obj.direction != direction && obj.cnt < 10) {
                    if (obj.direction == 'right') obj.moveRight();
                    if (obj.direction == 'left') obj.moveLeft();
                    if (obj.direction == 'up') obj.moveUp();
                    if (obj.direction == 'down') obj.moveDown();
                    obj.cnt++;
                }

                else if (obj.direction != direction && obj.cnt == 10) {
                    // obj.direction = direction;
                    obj.direction = wiggle[obj.index];
                    obj.moveLeft();
                    obj.cnt = 0;
                } else { obj.moveLeft(); }
            });
        }, 10);
        active.push(interval);
    }

    if (direction == 'right') {
        var cnt = 0;

        var interval = setInterval(function () {
            if (cnt == 10) {
                cnt = 0;
                wiggle.pop();
                wiggle.unshift(direction);
            } else {cnt++; }

            obj.forEach(function (obj) {
                if (obj.direction != direction && obj.cnt < 10) {
                    if (obj.direction == 'right') obj.moveRight();
                    if (obj.direction == 'left') obj.moveLeft();
                    if (obj.direction == 'up') obj.moveUp();
                    if (obj.direction == 'down') obj.moveDown();
                    obj.cnt++;
                }

                else if (obj.direction != direction && obj.cnt == 10) {
                    obj.direction = wiggle[obj.index];
                    obj.moveRight();
                    obj.cnt = 0;
                } else { obj.moveRight(); }
            });

        }, 10);
        active.push(interval);
    }

    if (direction == 'up') {
        var cnt = 0;
        var interval = setInterval(function () {
            if (cnt == 10) {
                cnt = 0;
                wiggle.pop();
                wiggle.unshift(direction);
            } else {cnt++; }

            obj.forEach(function (obj) {
                if (obj.direction != direction && obj.cnt < 10) {
                    if (obj.direction == 'right') obj.moveRight();
                    if (obj.direction == 'left') obj.moveLeft();
                    if (obj.direction == 'up') obj.moveUp();
                    if (obj.direction == 'down') obj.moveDown();
                    obj.cnt++;
                }

                else if (obj.direction != direction && obj.cnt == 10) {
                    obj.direction = wiggle[obj.index];
                    obj.moveUp();
                    obj.cnt = 0;
                } else { obj.moveUp(); }
            });
        }, 10);
        active.push(interval);
    }

    if (direction == 'down') {
        var cnt = 0;
        var interval = setInterval(function () {
            if (cnt == 10) {
                cnt = 0;
                wiggle.pop();
                wiggle.unshift(direction);
            } else {cnt++; }

            obj.forEach(function (obj) {
                if (obj.direction != direction && obj.cnt < 10) {
                    if (obj.direction == 'right') obj.moveRight();
                    if (obj.direction == 'left') obj.moveLeft();
                    if (obj.direction == 'up') obj.moveUp();
                    if (obj.direction == 'down') obj.moveDown();
                    obj.cnt++;
                }

                else if (obj.direction != direction && obj.cnt == 10) {
                    obj.direction = wiggle[obj.index];
                    obj.moveDown();
                    obj.cnt = 0;
                } else { obj.moveDown(); }
            });
        }, 10);
        active.push(interval);
    }
}

