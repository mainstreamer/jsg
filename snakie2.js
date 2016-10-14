var snake = new Snake;
function Snake(){
    this.active = [],
    this.buffer = null,
    this.directionStep = 0,
    this.direction = 'right',
    // this.body = [new Cell(document.createElement('div'))],
    this.body = [new Cell(document.getElementById('user'))],
    this.wiggle = [this.direction],
    this.move = function(that) {
        // console.log(that.wiggle.length);
            that.body.forEach(function(cell) {
                if (cell.index == 0) {
                    cell.move(that.direction);
                    // that.wiggle[that.wiggle.length-1]
                } else cell.move(that.wiggle[that.wiggle.length-cell.index]);
            });
            that.directionStep++;
            if (that.directionStep == 10) {
                that.directionStep = 0;

                if (that.buffer != null) {
                    that.direction = that.buffer;
                    that.wiggle.push(that.direction);
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
    },
    this.stopMoving = function() {
        this.active.forEach(function (x) {
            clearInterval(x);
        });
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
        console.log(direction);
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
    // snake.wiggle.push('right');
    snake.active.push(setInterval(function() {
        snake.move(snake);
    }, 20));

    window.onkeydown = function(key) {
        switch (key.which) {
            case 38 : snake.buffer = 'up'; snake.move(snake); break;
            case 40 : snake.buffer = 'down'; snake.move(snake); break;
            case 37 : snake.buffer = 'left'; snake.move(snake); break;
            case 39 : snake.buffer = 'right'; snake.move(snake); /*snake.go('right')*/ break;
            case 32 : snake.stopMoving(); break; //space
            case 13 : snake.addCell(); break; //enter
            default :  break;
        }
    }
}