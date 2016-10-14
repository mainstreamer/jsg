var step = 50;
var active = [];
// var body = [ new Cell(document.getElementById('user')) ];
var info = {};
var snake = new Snake();
function Snake(){
    this.buffer = null,
    this.directionStep = 0,
    this.direction = 'right',
    this.body = [new Cell(document.getElementById('user'))],
    // this.wiggle = [this.direction],
    this.wiggle = ['right'],
    this.move = function(that) {
        console.log(that.wiggle.length);
            that.body.forEach(function(cell) {
                if (that.wiggle.length < 2) {
                    cell.move('right')
                } else {
                    cell.move(that.wiggle[that.wiggle.length-cell.index]);
                }
                // console.log(that.wiggle.length);
                // console.log(that.wiggle[that.wiggle.length - cell.index]);
                // cell.move(cell.direction);


                // cell.directionStep = cell.directionStep < 10 ? cell.directionStep+1 : 0 ;

            });
            that.directionStep++;
            if (that.directionStep == 10) {
                that.directionStep = 0;

            //
            // for (var i = that.body.length; i > 0 ; i--) {
            //     if (i > 1) {
            //
            //         that.wiggle[that.body.length-1] = that.wiggle[that.body.length-2]
            //     }
            // }


            // that.wiggle.pu(that.wiggle[that.body.length-1]);
            // that.wiggle.pop();
            // that.wiggle[0] = that.direction;


            if (that.buffer != null) {
                that.direction = that.buffer;
                // that.body[0].direction = that.buffer;
                that.wiggle.push(that.direction);
                // that.wiggle.unshift(that.wiggle[that.body.length-1]);
                // that.wiggle.pop();
                // that.wiggle[0] = that.buffer;
                that.buffer = null;

            } else {
                that.wiggle.push(that.direction);
            }
        }
        },
    this.addCell = function() {
            var block = document.createElement("div");
            block.style.width = '10px';
            block.style.height = '10px';
            block.style.background = 'purple';
            block.style.position = 'absolute';

            if (this.direction == 'right') {
                block.style.top = this.body[this.body.length-1].element.style.top;
                block.style.left = parseInt(this.body[this.body.length-1].element.style.left)-10;
            }

            if (this.direction == 'left') {
                block.style.top = this.body[this.body.length-1].element.style.top;
                block.style.left = parseInt(this.body[this.body.length-1].element.style.left)+10;
            }

            if (this.direction == 'up') {
                block.style.top = parseInt(this.body[this.body.length-1].element.style.top) + 10;
                block.style.left = this.body[this.body.length-1].element.style.left;
            }

            if (this.direction == 'down') {
                block.style.top = parseInt(this.body[this.body.length-1].element.style.top) - 10;
                block.style.left = this.body[this.body.length-1].element.style.left;
            }

            document.body.appendChild(block);
            var newCell = new Cell(block);
            newCell.direction = this.body[this.body.length-1].direction;
            newCell.index = this.body.length;
            this.body.push(newCell);
            this.wiggle.push(this.wiggle[this.wiggle.length-1]);

            // smoothMove(info.direction, block);
    }

}

function Cell(element) {
    this.element = element;
    this.direction = 'right';
    this.cnt = 0;
    this.index = 0;
    this.directionStep = 0;
    // element: document.getElementById('user'),
    this.move = function (direction) {
        switch (direction) {
            case 'right' : this.element.style.left = this.element.offsetLeft+1+'px'; break;
            case 'left' : this.element.style.left = this.element.offsetLeft-1+'px'; break;
            case 'up' : this.element.style.top = this.element.offsetTop-1+'px'; break;
            case 'down' : this.element.style.top = this.element.offsetTop+1+'px'; break;
            default : break;
        }
    };
};

function main() {
    console.log(snake.wiggle);
    // snake.wiggle.push('right');
    active.push(setInterval(function() {
        snake.move(snake);
    }, 50));

    window.onkeydown = function(key) {
        switch (key.which) {
            case 38 : snake.buffer = 'up'; snake.move(snake); break;
            case 40 : snake.buffer = 'down'; snake.move(snake); break;
            case 37 : snake.buffer = 'left'; snake.move(snake); break;
            case 39 : snake.buffer = 'right'; snake.move(snake); /*snake.go('right')*/ break;
            case 32 : stopMoving(); break; //space
            case 13 : snake.addCell(); break; //enter
            default :  break;
        }
    }
}

function move() {

}

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

