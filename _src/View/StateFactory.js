class StateFactory{
    static getLaunchingStates(aModel){
        let stateHolder = {};
        stateHolder.splashState = function(game){
            this.title;
            this.timer;
            
        };

        stateHolder.splashState.prototype = {
            preload: function(){
                this.load.image('titleText', '_sprites/Splash Screen/Thomas Made this.png');
            },

            create: function(){
                this.title = this.add.sprite(200,200, 'titleText');
                this.title.alpha = 0;
                this.game.add.tween(this.title).to({alpha: 1},2000,Phaser.Easing.Linear.None, true,0,1000,true);
                this.timer = this.game.time.create(false);
                this.timer.add(1000, function(){this.game.state.start('mainMenuState')}, this);
                this.timer.start();
            },

            render: function(){
                this.game.debug.text("Time until event: " + this.timer.duration.toFixed(0), 10, 20,'red');
            }
        }

        stateHolder.mainMenuState = function(game){
            this.btn_NewGame;
            this.btn_LoadGame;
            this.btn_Options;
        }

        stateHolder.mainMenuState.prototype = {
            preload: function(){
                this.load.image('newGame', '_sprites/Main Menu/newGameButton.jpg');
                this.load.image('loadGame', '_sprites/Main Menu/loadGameButton.jpg');
                this.load.image('options', '_sprites/Main Menu/optionsButton.jpg');
            },

            create: function(){
                this.btn_NewGame = this.game.add.button(this.game.world.centerX - 95, 400, 'newGame', this.newGameClick, this, 2, 1 ,0)
                this.btn_LoadGame = this.add.sprite(200,400,'loadGame');
                this.btn_Options = this.add.sprite(200,600,'options');

            },

            render: function(){
                this.game.debug.text("Money: " + aModel.getCurrency(), 10, 20,'red');
            },

            newGameClick: function(){
                this.game.state.start('characterCreationState')

            }
        }

        stateHolder.bootState = function(game){

        }

        stateHolder.bootState.prototype = {
            create: function(){
                this.game.state.start('splashState');
            }
        }

        stateHolder.characterCreationState = function(game){
            
        }
            
        stateHolder.characterCreationState.prototype = {
            create: function(){
                this.game.state.start('mainGameState');
            }
        }

        stateHolder.loadSelectionState = function(game){
            
        }
            
        stateHolder.loadSelectionState.prototype = {
            create: function(){
                console.log("in the load selection state")
            }
        }

        stateHolder.optionsState = function(game){
            
        }
            
        stateHolder.optionsState.prototype = {
            create: function(){
                console.log("in the options menu")
            }
        }

        stateHolder.mainGameState = function(game){
            this.kingdom = aModel.myGame.myKingdom;
            this.lumber = this.kingdom.lumberMill;
            this.grain = this.kingdom.grainery;
            this.quarry = this.kingdom.quarry;
            this.tradePost = this.kingdom.tradingPost;
			this.guiGroup = game.add.group();
        }
            
        stateHolder.mainGameState.prototype = {
            preload:function(){
                this.load.image('gameBackground', '_sprites/Game Screen/gameBackground.png')
                this.load.image('sidebarBackground', '_sprites/Game Screen/sidebarBackground.png')
                this.load.image('lumberMill1', '_sprites/Game Screen/lumberMill1.jpg');
                this.load.image('grainery1', '_sprites/Game Screen/grainery1.jpg');
                this.load.image('quarry1', '_sprites/Game Screen/quarry1.jpg');
                this.load.image('tradingPost1', '_sprites/Game Screen/tradingPost1.jpg');
                this.load.image('lumberParticle', '_sprites/Game Screen/Particles/lumber.png')
                this.load.image('foodParticle', '_sprites/Game Screen/Particles/food.png')
                this.load.image('stoneParticle', '_sprites/Game Screen/Particles/stone.png')
                this.load.image('goldParticle', '_sprites/Game Screen/Particles/gold.png');


            },

            create: function(){

            },
			
			update: function(){
				this.drawGui();
			},

            render: function(){
                
                this.game.debug.text(this.lumber.getWoodCount(), 10, 20,'red');
                this.game.debug.text(this.grain.getFoodCount(), 10, 40,'red');
                this.game.debug.text(this.quarry.getStoneCount(), 10, 60,'red');
                this.game.debug.text(this.tradePost.getGoldCount(), 10, 80,'red');

            },
			
			drawGui(){
				this.guiGroup.remove();
				if(this.lumber.isBuilt){
                    let btn_WoodClicker = this.game.add.button(this.game.world.centerX - 95, 10, 'lumberMill1', this.lumberClick, this, 2, 1 ,0)
					this.guiGroup.add(btn_WoodClicker);
					
                }
                if(this.grain.isBuilt){
                    let btn_FoodClicker = this.game.add.button(this.game.world.centerX - 95, 150, 'grainery1', this.foodClick, this, 2, 1 ,0)
					this.guiGroup.add(btn_FoodClicker);
                }
                if(this.quarry.isBuilt){
                    let btn_StoneClicker = this.game.add.button(this.game.world.centerX - 95, 300, 'quarry1', this.stoneClick, this, 2, 1 ,0)
					this.guiGroup.add(btn_StoneClicker);
                } 
				if(this.tradePost.isBuilt){
					let btn_goldUpgrader = this.game.add.button(this.game.world.centerX - 95, 100, 'lumberMill1', this.goldClickUpgrade, this, 2, 1 ,0)
					this.guiGroup.add(btn_goldUpgrader);
					let btn_GoldClicker = this.game.add.button(this.game.world.centerX - 15, 450, 'tradingPost1', this.tradingPostClick, this, 2, 1 ,0)
					this.guiGroup.add(btn_GoldClicker);
				}
				
                
			},

            lumberClick: function(){
                this.kingdom.lumberClick();
            },

            foodClick: function(){
                this.kingdom.foodClick();
            },

            stoneClick: function(){
                this.kingdom.stoneClick();
            },

            tradingPostClick: function(pointer){
                this.kingdom.goldClick();
                let coin = this.game.add.sprite(pointer.x +(Math.random() * 180),pointer.y+(Math.random() * 20), 'goldParticle')
                let coinCollect = this.game.add.tween(coin);
                coinCollect.to({y: pointer.y-((Math.random() * 200) + 100), alpha:0}, (Math.random() * 100) + 500, Phaser.Easing.Linear.None);
                coinCollect.onComplete.add(function(){coin.destroy();});
				coinCollect.start();
				
				
				
            },

            goldClickUpgrade: function(){
                this.kingdom.buildTradingPost();
				
            }

        }


        console.log(stateHolder);
        return stateHolder;
    }


}