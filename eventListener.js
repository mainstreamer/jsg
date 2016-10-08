

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