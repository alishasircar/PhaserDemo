const demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var purp, speed = 4;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet('purp', 'assets/spriteSheets/purpSheet.png', 320, 320);
        game.load.image('picnic', 'assets/backgrounds/picnic.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#0790b8';
        addChangeStateEventListeners();
        game.world.setBounds(0,0,2000, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var picnicPG = game.add.sprite(0,0, 'picnic');
        purp = game.add.sprite(centerX, centerY, 'purp');
        purp.anchor.x = 0.5;
        purp.anchor.y = 0.5;
        purp.scale.setTo(0.95, 0.95);
        game.physics.enable(purp);
        purp.body.collideWorldBounds = true;
        purp.animations.add('walk', [0, 1, 2]);
        
        game.camera.follow(purp);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT )){purp.x += speed;                                                        
        purp.scale.setTo(-0.95, 0.95);
        purp.animations.play('walk', 11, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){purp.x -= speed;  
        purp.scale.setTo(0.95, 0.95);   
        purp.animations.play('walk', 11, true);
        }
        else{
            purp.animations.stop('walk');
            purp.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP )){purp.y -= speed;
        if(purp.y < 504){
            purp.y = 504;
        }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){purp.y += speed;  
        }
}
};
function changeState(i, stateNum){
    console.log('state' + stateNum);
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