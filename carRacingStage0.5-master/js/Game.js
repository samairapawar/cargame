class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,displayHeight/2,20,20)
    car1.addImage(carimage1)
    car2=createSprite(150,displayHeight/2,20,20)
    car2.addImage(carimage2)
    car3=createSprite(200,displayHeight/2,20,20)
    car3.addImage(carimage3)
    car4=createSprite(250,displayHeight/2,20,20)
    car4.addImage(carimage4)
    car5=createSprite(300,displayHeight/2,20,20)
    car5.addImage(carimage4)

    car=[car1,car2,car3,car4,car5]
  }
  begingame(){
  
console.log(new Date().getTime())
    form.title.hide()
    form.greeting.hide()
    image(track,0,-20*displayHeight,displayWidth,21*displayHeight)
    Player.readdata()
    if(array!=undefined){
       var carindex=0
       var x=100  
       var y               
      for(var a in array){
      carindex++
      x=x+150
      y=displayHeight-array[a].distance
      car[carindex-1].x=x
      car[carindex-1].y=y
      if(carindex==player.index){
      //  car[carindex-1].shapeColor="pink"
      textSize(30)
      text (array[a].name,x,y-100)
        camera .position.x=width/2
        camera.position.y=car[carindex-1].y
      } 
        
      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!=0){
      player.distance+=50
      player.update()
    }
    if (player.distance>16050){
      gameState=2
      player.time= new Date ().getTime()
    player.updateendtime (player.time)
      alert("GAME OVER")
    }
    drawSprites()
  }
}
