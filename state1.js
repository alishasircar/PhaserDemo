
demo.state1 = function () {};
var cursors, vel = 500, pot;
demo.state1.prototype = {
    preload: function () {
        game.load.tilemap('park', 'assets/tilemaps/park.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grass','assets/tilemaps/grass.png');
        game.load.image('pot','assets/tilemaps/pot.png');
        game.load.image('purp', 'assets/sprites/purpp.png');
        
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE)
        game.stage.backgroundColor = '#e79d68';
        
       addChangeStateEventListeners();
        
        const map = game.add.tilemap('park');
        map.addTilesetImage('grass');
        map.addTilesetImage('pot');
        
        var grass = map.createLayer('Tile Layer 1');
        pot = map.createLayer('Tile Layer 2');
        
        map.setCollisionBetween(10,17, true, 'Tile Layer 2');
        
        purp = game.add.sprite(200,200, 'purp')
        purp.scale.setTo(0.25,0.25);
        game.physics.enable(purp);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function () {
        game.physics.arcade.collide(purp, pot, function(){ console.log('hitting pots!')});
        
        if(cursors.up.isDown){
            purp.body.velocity.y = -vel;
        }
         else if(cursors.down.isDown){
            purp.body.velocity.y = vel;
        }
        else{
            purp.body.velocity.y = 0;
        }
         if(cursors.left.isDown){
            purp.body.velocity.x = -vel;
        }
         else if(cursors.right.isDown){
            purp.body.velocity.x = vel;
        }
        else{
            purp.body.velocity.x = 0;
        }
    }
};