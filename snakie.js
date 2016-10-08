
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


function Fan (team){

    this.team = team;

    this.emotion  = function(game) {
        if (game.winner == this.team) {
            // alert('YEAH');
            console.log('YEAH '+this.team+' won!' );
            return 'YEAH';
        } else if (game.loser == this.team){
            console.log('OH NOOOOO! '+this.team+' lost!');
            return 'OH NOOOOO!';
        } else {
            console.log('I DONT CARE, I support '+this.team);
            return 'I DONT CARE';
        }
    }

};

// var sunderlandFan = {
//     team : 'sunderland',
//     emotion : function(game) {
//         if (game.winner == this.team) {
//             // alert('YEAH');
//             console.log('YEAH');
//             return 'YEAH';
//         } else if (game.loser == this.team){
//             console.log('OH NOOOOO!');
//             return 'OH NOOOOO!';
//         } else {
//             console.log('I DONT CARE');
//             return 'I DONT CARE';
//         }
//     }
//
// };

var manUnitedFan = new Fan('manchester');
var chelseaFan = new Fan('chelsea');
var sunderlandFan = new Fan('sunderland');

var game  = {
    subscribers : [],
    subscribe : function (item) {
        this.subscribers.push(item)
    },
    unsubscribe : function (item) {
        this.subscribers.remove(item)
    },
    fire : function (ev) {
        this.subscribers.forEach(function (item) {
            item.emotion(ev);
        });
    }

};

var gameEvent = {
    winner : 'chelsea',
    loser : 'manchester'
};



function start() {
    // console.log('started');
    // console.log(sunderlandFan.emotion());
    game.subscribe(sunderlandFan);
    game.subscribe(manUnitedFan);
    game.subscribe(chelseaFan);

    game.fire(gameEvent);
    // console.log(game.fire(gameEvent));
    // console.log(sunderlandFan.emotion(game));
}