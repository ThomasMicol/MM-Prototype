class MainGameState{
	static getState(game, aModel){
		let mainGameState;
            
        mainGameState = {
			
			setup: function(){
				this.kingdom = aModel.myGame.myKingdom;
				this.lumber = this.kingdom.lumberMill;
				this.grain = this.kingdom.grainery;
				this.quarry = this.kingdom.quarry;
				this.tradePost = this.kingdom.tradingPost;
				this.guiGroup = new Phaser.Group(game);
				this.game = game;
			},
			
            preload:function(){
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

            },

            create: function(){
				this.setup();
                this.background = this.game.add.image(0,0, 'gameBackground');
                this.btn_godlupgrader = this.game.add.button(this.game.world.centerX - 95, 200, 'lumberMill1', this.goldClickUpgrade, this, 2, 1 ,0)
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 85, 390, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 85, 425, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 85, 460, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 85, 495, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 40, 390, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 40, 425, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 40, 460, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX - 40, 495, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 5, 390, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 5, 425, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 5, 460, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 5, 495, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 50, 390, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 50, 425, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 50, 460, 'cornField');
                this.btn_godlupgrader = this.game.add.sprite(this.game.world.centerX + 50, 495, 'cornField');

            },
			
			update: function(){
				this.drawGui();
			},

            render: function(){
                if(this.lumber.isBuilt){
                    this.btn_WoodClicker = this.game.add.button(this.game.world.centerX - 720, 10, 'lumberMill1', this.lumberClick, this, 2, 1 ,0)
                }
                if(this.grain.isBuilt){
                    this.btn_FoodClicker = this.game.add.button(this.game.world.centerX - 95, 150, 'grainery1', this.foodClick, this, 2, 1 ,0)
                }
                if(this.quarry.isBuilt){
                    this.btn_StoneClicker = this.game.add.button(this.game.world.centerX - 95, 300, 'quarry1', this.stoneClick, this, 2, 1 ,0)
                }
                if(this.tradePost.isBuilt){
                    this.btn_GoldClicker = this.game.add.button(this.game.world.centerX - 615, 450, 'tradingPost1', this.tradingPostClick, this, 2, 1 ,0)
                }
                
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
		
		return mainGameState;
	}
}