
var angle = 0;
var active = [];

function Cannon(){
    this.element = document.getElementById('cannon');
    this.angle = 0;
    this.active = [];
    this.edge = {};
    this.burst = [];
    this.edge.top = parseInt(this.element.style.top) + 10;
    this.edge.left = parseInt(this.element.style.left) + 100;
    this.move = function() {
                        this.element.style.transform = 'rotate(-'+this.angle+'deg)';
                            console.log('angle : '+angle);

                }
    this.shoot = function() {

        var shot = new Ball();
        this.burst.push(shot);
        shot.shoot(this.edge);
        if (this.burst.length > 3) {
            this.burst[3].die();
        }
        //                     var block = document.createElement("div");
        //                         block.style.width = '5px';
        //                         block.style.height = '5px';
        //                         // block.style.background = 'url(https://s-media-cache-ak0.pinimg.com/236x/67/36/e5/6736e526fd50d61057619c7d27e3c8cc.jpg)';
        //                         block.style.background = getRandomColor();
        //                         block.style.position = 'absolute';
        //                         block.style.borderRadius = '90';
        //                         block.style.top = this.edge.top;
        //                         block.style.left = this.edge.left;
        //                         block.delta = 0;
        //                         block.delta2 = 0;
        //
        //                     document.body.appendChild(block);
        //
        //  this.active.push(setInterval(function () {
        //
        //
        //      // console.log();
        //
        //      if (angle >= 45) {
        //          block.style.top = parseInt(block.style.top) - 1;
        //          block.delta += 1;
        //          if ((Math.floor(parseInt(block.delta) * Math.tan( (90-angle) * (Math.PI / 180)))) >= 1) {
        //              block.delta = 0;
        //              block.style.left = parseInt(block.style.left) + 1;
        //          }
        //      } else {
        //                     block.style.left = parseInt(block.style.left) + 1;
        //                     block.delta += 1;
        //
        //                     if ((Math.floor(parseInt(block.delta) * Math.tan(angle * (Math.PI / 180)))) >= 1) {
        //                         block.delta = 0;
        //                         block.style.top = parseInt(block.style.top) - 1;
        //                     }
        //             }
        //
        //                 }, 1)
        //
        // );

               }

    this.stopMoving = function() {
                            this.active.forEach(function (x) {
                                 clearInterval(x);
                            });
                            this.active = [];
                     }
}

function Ball(element) {
    const ang = angle;
    // this.angle = angle;
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
    this.die = function () {

        console.log(this.parent);
        // this.parentNode.removeChild(this);
    }
    this.shoot = function(edge) {

            var block = document.createElement("div");
            block.style.width = '5px';
            block.style.height = '5px';
            // block.style.background = 'url(https://s-media-cache-ak0.pinimg.com/236x/67/36/e5/6736e526fd50d61057619c7d27e3c8cc.jpg)';
            block.style.background = getRandomColor();
            block.style.position = 'absolute';
            block.style.borderRadius = '90';
            block.style.top = edge.top;
            block.style.left = edge.left;
            block.delta = 0;
            block.delta2 = 0;

            document.body.appendChild(block);

        // console.log(this.angle);
            active.push(setInterval(function () {

                // console.log(this.angle);
                    // console.log();

                if (ang == 45) {
                    block.style.top = parseInt(block.style.top) - 1;
                    block.style.left = parseInt(block.style.left) + 1;
                }
                    else if (ang >= 45) {
                        block.style.top = parseInt(block.style.top) - 1;
                        block.delta += 1;
                        if ((Math.floor(parseInt(block.delta) * Math.tan( (90-ang) * (Math.PI / 180)))) >= 1) {
                            block.delta = 0;
                            block.style.left = parseInt(block.style.left) + 1;
                        }
                    } else {
                        block.style.left = parseInt(block.style.left) + 1;
                        block.delta += 1;

                        if ((Math.floor(parseInt(block.delta) * Math.tan(ang * (Math.PI / 180)))) >= 1) {
                            block.delta = 0;
                            block.style.top = parseInt(block.style.top) - 1;
                        }
                    }

                }, 1)

            );


    }
}

function stopMoving() {
    active.forEach(function (x) {
        clearInterval(x);
    });
    active = [];
}

function main() {
    var cannon = new Cannon();
    // snake.active.push(setInterval(function() {
    //     snake.move(snake);
    // }, snake.delay));

    window.onkeydown = function(key) {
        switch (key.which) {
            case 38 : cannon.angle += 1; angle = cannon.angle; cannon.move(); break;
            case 40 : cannon.angle -= 1; angle = cannon.angle; cannon.move(); break;
            // case 37 : snake.buffer = 'left'; break;
            // case 39 : snake.buffer = 'right'; break;
            case 32 : cannon.shoot(); break;
            // case 32 : if (snake.active.length == 0) {
            //                 snake.active.push(setInterval(
            //                     function() {
            //                         snake.move(snake);
            //                     }, snake.delay))
            //           } else {
            //                 snake.stopMoving();
            //           } break; //space - pause/play
            case 27 : stopMoving(); break; //esc
            // case 13 : snake.addCell(); break; //enter
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
