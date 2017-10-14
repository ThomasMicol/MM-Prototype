class MainGameState{
	static getState(game, aModel){


        let mainGameState = function()
        {
            
            this.statline1;
            this.statline2;
            let WebFontConfig = {
                    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },
                    google: {
                      families: ['Finger Paint']
                    }
                
                };
        };
        
        mainGameState = {
			
			setup: function(){
				this.kingdom = aModel.myGame.myKingdom;
				this.lumber = this.kingdom.lumberMill;
				this.grain = this.kingdom.grainery;
				this.quarry = this.kingdom.quarry;
				this.tradePost = this.kingdom.tradingPost;
				this.gameGroup = new Phaser.Group(game, null, 'gameGroup', true);
				this.guiGroup = new Phaser.Group(game, null, 'guiGroup', true);
                this.game = game;
                this.upgradeGroup  = aModel.myGame.myUpgrades;
                this.upgradeSidebar;
			},
			
            preload:function(){
                let WebFontConfig = {
                    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },
                    google: {
                      families: ['Finger Paint']
                    }
                
                };
                this.load.image('gameBackground', '_sprites/Game Screen/gameBackground.png')
                this.load.image('sidebarBackground', '_sprites/Game Screen/sidebarBackground.png')
                this.load.image('lumberMill1', '_sprites/Game Screen/lumberMill1.png');
                this.load.image('grainery1', '_sprites/Game Screen/grainery1.jpg');
                this.load.image('quarry1', '_sprites/Game Screen/quarry1.jpg');
                this.load.image('tradingPost1', '_sprites/Game Screen/tradingPost1.jpg');
                this.load.image('lumberParticle', '_sprites/Game Screen/Particles/lumber.png')
                this.load.image('foodParticle', '_sprites/Game Screen/Particles/food.png')
                this.load.image('stoneParticle', '_sprites/Game Screen/Particles/stone.png')
                this.load.image('goldParticle', '_sprites/Game Screen/Particles/gold.png');
                this.load.image('cornField', '_media/ANimate/CornSway.gif');
                this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

                

            },

            create: function(){
				this.setup();
                this.loadInScreen()
                

            },
			
			loadInScreen(){
                this.background = this.game.add.image(0,0, 'gameBackground');
                this.sidebarMenuBackground = this.game.add.image(1000,0, 'sidebarBackground');
				if(!this.lumber.isBuilt){
                    this.btn_WoodClicker = this.game.add.button(this.game.world.centerX - 95, 10, 'lumberMill1', this.lumberMillClick, this, 2, 1 ,0)
					this.gameGroup.addChild(this.btn_WoodClicker);
                }
                if(!this.grain.isBuilt){
                    this.btn_FoodClicker = this.game.add.button(this.game.world.centerX - 95, 150, 'grainery1', this.graineryClick, this, 2, 1 ,0)
					this.gameGroup.addChild(this.btn_FoodClicker);
                }
                if(!this.quarry.isBuilt){
                    this.btn_StoneClicker = this.game.add.button(this.game.world.centerX - 95, 300, 'quarry1', this.quarryClick, this, 2, 1 ,0)
					this.gameGroup.addChild(this.btn_StoneClicker);
                } 
				if(!this.tradePost.isBuilt){
					this.btn_GoldClicker = this.game.add.button(this.game.world.centerX - 15, 450, 'tradingPost1', this.tradingPostClick, this, 2, 1 ,0)
					this.gameGroup.addChild(this.btn_GoldClicker);
				}
			},
			
			update: function(){
                if(this.statline1 != undefined)
                {
                    this.statline1.destroy(true);
                    this.statline2.destroy(true);
                }
                let style = { font: "24px Finger Paint", fill: "#e6dcb6", tabs: [ 200] };
                let text1 = "Wood: " + this.lumber.woodCount.toString() + "\tFood: " + this.grain.foodCount.toString();
                let text2 = "Stone: " + this.quarry.stoneCount.toString() + "\tGold: " + this.tradePost.goldCount.toString();
                
                this.statline1 = this.game.add.text(1090, 34, text1, style);
                this.statline2 = this.game.add.text(1090, 84, text2, style);
			},

            render: function(){ 
                if(this.upgradeSidebar != undefined)
                {
                    this.upgradeSidebar.forEach(function(element){
                        element.destroy(true);
                    }, this);
                }
                
                this.upgradeGroup  = aModel.myGame.myUpgrades;

                this.upgradeGroup.forEach(function(upgrade) {
                    console.log(upgrade);
                }, this);

            },

            lumberMillClick: function(pointer){
                this.kingdom.lumberClick();
                let coin = this.game.add.sprite(pointer.x +(Math.random() * 180),pointer.y+(Math.random() * 20), 'lumberParticle')
                let coinCollect = this.game.add.tween(coin);
                coinCollect.to({y: pointer.y-((Math.random() * 200) + 100), alpha:0}, (Math.random() * 100) + 500, Phaser.Easing.Linear.None);
                coinCollect.onComplete.add(function(){coin.destroy();});
				coinCollect.start();
            },

            graineryClick: function(pointer){
                this.kingdom.foodClick();
                let coin = this.game.add.sprite(pointer.x +(Math.random() * 180),pointer.y+(Math.random() * 20), 'foodParticle')
                let coinCollect = this.game.add.tween(coin);
                coinCollect.to({y: pointer.y-((Math.random() * 200) + 100), alpha:0}, (Math.random() * 100) + 500, Phaser.Easing.Linear.None);
                coinCollect.onComplete.add(function(){coin.destroy();});
				coinCollect.start();
            },

            quarryClick: function(pointer){
                this.kingdom.stoneClick();
                let coin = this.game.add.sprite(pointer.x +(Math.random() * 180),pointer.y+(Math.random() * 20), 'stoneParticle')
                let coinCollect = this.game.add.tween(coin);
                coinCollect.to({y: pointer.y-((Math.random() * 200) + 100), alpha:0}, (Math.random() * 100) + 500, Phaser.Easing.Linear.None);
                coinCollect.onComplete.add(function(){coin.destroy();});
				coinCollect.start();
            },

            tradingPostClick: function(pointer){
                this.kingdom.goldClick();
                let coin = this.game.add.sprite(pointer.x +(Math.random() * 180),pointer.y+(Math.random() * 20), 'goldParticle')
                let coinCollect = this.game.add.tween(coin);
                coinCollect.to({y: pointer.y-((Math.random() * 200) + 100), alpha:0}, (Math.random() * 100) + 500, Phaser.Easing.Linear.None);
                coinCollect.onComplete.add(function(){coin.destroy();});
				coinCollect.start();
            },
        }
		
		return mainGameState;
	}
}