const demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var purp, speed = 4;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.image('purp', 'assets/sprites/purpp.png')
    },
    create: function () {
        game.stage.backgroundColor = '#0790b8';
        console.log('state0');
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        purp = game.add.sprite(centerX, centerY, 'purp');
        purp.anchor.x = 0.5;
        purp.anchor.y = 0.5;
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT )){purp.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){purp.x -= speed;  
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP )){purp.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){purp.y += speed;  
        }
}
};
function changeState(i, stateNum){
    game.state.start('state'+ stateNum);
}

function addKeyCallBack(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
        addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
    }