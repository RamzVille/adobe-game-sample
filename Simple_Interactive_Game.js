(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Simple_Interactive_Game_atlas_1", frames: [[262,362,122,41],[0,362,260,68],[0,0,600,360]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Simple_Interactive_Game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Simple_Interactive_Game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW = function() {
	this.initialize(ss["Simple_Interactive_Game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.startBtnMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(37,7.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startBtnMC, new cjs.Rectangle(-0.5,-0.5,130,34), null);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(1,1,1).p("AAAGHImakrICdniIH7AAICdHig");
	this.shape.setTransform(41.125,39.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0099").s().p("AmaBcICdniIH7AAICdHiImbErg");
	this.shape_1.setTransform(41.125,39.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stars, new cjs.Rectangle(-1,-1,84.3,80.3), null);


(lib.playerMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(1,1,1).p("AEMAAQAABvhPBOQhOBPhvAAQhuAAhPhPQhOhOAAhvQAAhuBOhPQBPhOBuAAQBvAABOBOQBPBPAABug");
	this.shape.setTransform(26.75,26.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai8C9QhPhOAAhvQAAhuBPhOQBOhPBuAAQBvAABOBPQBOBOAABuQAABvhOBOQhOBOhvAAQhuAAhOhOg");
	this.shape_1.setTransform(26.75,26.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playerMC, new cjs.Rectangle(-1,-1,55.5,55.5), null);


(lib.enemyMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(1,1,1).p("AqOizIUdAAIAAFnI0dAAg");
	this.shape.setTransform(65.5,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqOC0IAAlnIUdAAIAAFng");
	this.shape_1.setTransform(65.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enemyMC, new cjs.Rectangle(-1,-1,133,38), null);


// stage content:
(lib.Simple_Interactive_Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// --------------------
		// VARIABLES
		// --------------------
		var score = 0;
		var gameStarted = false;
		var canCollideEnemy = true;
		var canCollideStar = true;
		
		var speed = 8;
		var gravity = 5;
		var jumpPower = -35;
		var playerVelocityY = 0;
		
		var enemySpeed = 5;   // enemy moves RIGHT → LEFT
		var starSpeed = 3;    // star moves LEFT → RIGHT
		var groundY = 400;
		
		// --------------------
		// SYMBOL REFERENCES
		// --------------------
		var player = this.player;
		var enemy = this.enemy;
		var star = this.stars;
		var startBtn = this.startBtn;
		var scoreText = exportRoot.score_txt;
		
		scoreText.text = "Score: " + score;
		
		// --------------------
		// START BUTTON
		// --------------------
		startBtn.cursor = "pointer";
		startBtn.on("click", function () {
		    gameStarted = true;
		});
		
		// --------------------
		// PLAYER MOVEMENT
		// --------------------
		window.addEventListener("keydown", function (e) {
		    if (!gameStarted) return;
		
		    if (e.key === " " || e.key === "ArrowUp") playerVelocityY = jumpPower;
		    if (e.key === "ArrowRight") player.x += speed;
		    if (e.key === "ArrowLeft") player.x -= speed;
		});
		
		// --------------------
		// GAME LOOP
		// --------------------
		createjs.Ticker.framerate = 60;
		createjs.Ticker.on("tick", gameLoop);
		
		// --------------------
		// GAME LOOP
		// --------------------
		function gameLoop() {
		    if (!gameStarted) return;
		
		    // Gravity
		    playerVelocityY += gravity;
		    player.y += playerVelocityY;
		
		    if (player.y > groundY) {
		        player.y = groundY;
		        playerVelocityY = 0;
		    }
		
		    // Enemy → right to left
		    enemy.x -= enemySpeed;
		
		    // Star → left to right
		    star.x += starSpeed;
		
		    // Reset enemy when off-screen
		    if (enemy.x < -50) {
		        enemy.x = 800 + Math.random() * 200;
		        enemy.y = groundY;
		        canCollideEnemy = true; // allow next collision
		    }
		
		    // Reset star when off-screen
		    if (star.x > 850) {
		        respawnStar(); // new star appears from left
		    }
		
		    checkCollision();
		}
		
		var gameOverText = new createjs.Text("GAME OVER", "bold 50px Arial", "#FF0000");
		var stageWidth = 800;
		var stageHeight= 600;
		gameOverText.x = stageWidth / 2;
		gameOverText.y = stageHeight / 2;
		gameOverText.textAlign = "center";
		gameOverText.textBaseline = "middle";
		gameOverText.visible = false; // hide at start
		stage.addChild(gameOverText);
		
		// --------------------
		// COLLISION CHECK
		// --------------------
		function checkCollision() {
		
		    // ENEMY HIT → minus score ONCE
		    if (canCollideEnemy) {
		        // Calculate distance between player and enemy
		        var dxEnemy = player.x - enemy.x;
		        var dyEnemy = player.y - enemy.y;
		        var distanceEnemy = Math.sqrt(dxEnemy * dxEnemy + dyEnemy * dyEnemy);
		
		        // If player is close enough to the enemy (e.g., within 30 pixels)
		        if (distanceEnemy < 30) {
		            score -= 1;
		            scoreText.text = "Score: " + score;
		
		            canCollideEnemy = false; // stop repeated deduction
					// Check for Game Over
		            if (score < 0) {
						gameOverText.visible = true; // show Game Over text
		                createjs.Ticker.paused = true; // stop the game loop
						scoreText.text = "Score: 0"
		            }
		        }
		    }
		
		    // STAR COLLECT → add score ONCE
		    if (canCollideStar) {
		        // Get the exact distance between player and star
		        var dx = player.x - star.x;
		        var dy = player.y - star.y;
		        var distance = Math.sqrt(dx*dx + dy*dy);
		
		        // If player is close enough to the star (e.g., within 20 pixels)
		        if (distance < 20) {
		            score += 2;
		            scoreText.text = "Score: " + score;
		
		            canCollideStar = false; // stop repeated add
		        }
		    }
		}
		function respawnStar() {
		    star.x = -50;                          // appear from LEFT
		    star.y = 150 + Math.random() * 250;    // random height
		    star.visible = true;
		
		    canCollideStar = true; // allow next scoring
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.score_txt = new cjs.Text("SCORE", "bold 20px 'Times New Roman'");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 24;
	this.score_txt.lineWidth = 120;
	this.score_txt.parent = this;
	this.score_txt.setTransform(340.25,27.3);

	this.stars = new lib.stars();
	this.stars.name = "stars";
	this.stars.setTransform(67.15,241.45,1,1,0,0,0,41.1,39.1);

	this.startBtn = new lib.startBtnMC();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(402.75,523.45,1,1,0,0,0,64.5,16.5);

	this.enemy = new lib.enemyMC();
	this.enemy.name = "enemy";
	this.enemy.setTransform(715.3,401.5,1,1,0,0,0,65.5,18);

	this.player = new lib.playerMC();
	this.player.name = "player";
	this.player.setTransform(52.85,392.8,1,1,0,0,0,26.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player},{t:this.enemy},{t:this.startBtn},{t:this.stars},{t:this.score_txt}]}).wait(1));

	// bg
	this.instance = new lib._360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW();
	this.instance.setTransform(5,4,1.3157,1.6451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(405,304,389.4,292.29999999999995);
// library properties:
lib.properties = {
	id: '648DF9E036C79D499E36E6FE38967769',
	width: 800,
	height: 600,
	fps: 24,
	color: "#3399CC",
	opacity: 1.00,
	manifest: [
		{src:"images/Simple_Interactive_Game_atlas_1.png?1770684080601", id:"Simple_Interactive_Game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['648DF9E036C79D499E36E6FE38967769'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;