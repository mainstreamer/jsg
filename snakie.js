function Snake(){
    this.active = [],
    this.buffer = null,
    this.growBuffer = null,
    this.directionStep = 0,
    this.direction = 'right',
    this.body = [new Cell(document.getElementById('user'))],
    this.wiggle = [this.direction],
    this.delay = 0;
    this.bounce = function () {
        if (parseInt(this.body[0].element.style.left) <= 1 && this.direction == 'left') {
            this.buffer = 'right';
        }
        if (parseInt(this.body[0].element.style.left) >= Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 10 && this.direction == 'right') {
            this.buffer = 'left';
        }
        if (parseInt(this.body[0].element.style.top) >= Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 10 && this.direction == 'down') {
            this.buffer = 'up';
        }
        if (parseInt(this.body[0].element.style.top) <= 1&& this.direction == 'up') {
            this.buffer = 'down';
        }
    }
    this.move = function(that) {
                        this.bounce();
                        that.body.forEach(function(cell) {
                            if (cell.index == 0) {
                                cell.move(that.wiggle[that.wiggle.length-1]);
                            } else {
                                cell.move(that.wiggle[that.wiggle.length-cell.index-1]);
                            }
                        });
                        that.directionStep++;
                        if (that.directionStep == 10) {
                            that.directionStep = 0;
                            if (that.growBuffer !=null) {
                                that.addCell();
                                that.growBuffer = null;
                            }
                            if (that.buffer != null) {
                                that.direction = that.buffer;
                                that.wiggle.push(that.direction);
                                that.buffer = null;
                            } else {
                                that.wiggle.push(that.direction);
                            }
                            if (that.wiggle.length > 200) {
                                that.wiggle.splice(0, 200-that.wiggle.length+2)
                            }
                        }


                }
    this.addCell = function() {
                        if (this.directionStep != 0) {
                            this.growBuffer = 'queueing';
                        } else {
                            var block = document.createElement("div");
                            block.style.width = '10px';
                            block.style.height = '10px';
                            // block.style.background = 'url(https://s-media-cache-ak0.pinimg.com/236x/67/36/e5/6736e526fd50d61057619c7d27e3c8cc.jpg)';

                            block.style.background = getRandomColor();
                            block.style.position = 'absolute';
                            var direction = this.wiggle[this.wiggle.length - this.body.length];
                            block.style.top = this.body[this.body.length-1].element.style.top;
                            block.style.left = this.body[this.body.length-1].element.style.left;

                            switch (direction) {
                                case 'right' : block.style.left = parseInt(this.body[this.body.length-1].element.style.left)-10; break;
                                case 'left' : block.style.left = parseInt(this.body[this.body.length-1].element.style.left)+10; break;
                                case 'up' : block.style.top = parseInt(this.body[this.body.length-1].element.style.top) + 10; break;
                                case 'down' : block.style.top = parseInt(this.body[this.body.length-1].element.style.top) - 10; break;
                                default : break;
                            }

                            document.body.appendChild(block);
                            var newCell = new Cell(block);
                            newCell.direction = this.body[this.body.length-1].direction;
                            newCell.index = this.body.length;
                            this.body.push(newCell);

                            document.getElementById('length').textContent = this.body.length;
                        }
               }
    this.stopMoving = function() {
                            this.active.forEach(function (x) {
                                 clearInterval(x);
                            });
                            this.active = [];
                     }
}

function Cell(element, snake) {
    this.element = element;
    this.direction = 'right';
    this.cnt = 0;
    this.index = 0;
    this.directionStep = 0;
    this.move = function (direction) {
        switch (direction) {
            case 'right' : this.element.style.left = this.element.offsetLeft+1+'px'; break;
            case 'left' : this.element.style.left = this.element.offsetLeft-1+'px'; break;
            case 'up' : this.element.style.top = this.element.offsetTop-1+'px'; break;
            case 'down' : this.element.style.top = this.element.offsetTop+1+'px'; break;
            default : break;
        }
    }
}

function main() {
    var snake = new Snake;
    snake.active.push(setInterval(function() {
        snake.move(snake);
    }, snake.delay));

    window.onkeydown = function(key) {
        switch (key.which) {
            case 38 : snake.buffer = 'up'; break;
            case 40 : snake.buffer = 'down'; break;
            case 37 : snake.buffer = 'left'; break;
            case 39 : snake.buffer = 'right'; break;
            case 32 : if (snake.active.length == 0) {
                            snake.active.push(setInterval(
                                function() {
                                    snake.move(snake);
                                }, snake.delay))
                      } else {
                            snake.stopMoving();
                      } break; //space - pause/play
            case 27 : snake.stopMoving(); break; //esc
            case 13 : snake.addCell(); break; //enter
            default :  break;
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
