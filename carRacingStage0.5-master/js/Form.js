class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.restart= createButton("Restart")
  }

  display(){
    
    this.title.html("Car Racing Game");
   this.title.position(width/2, 0);
    
    
    this.input.position(width/2, height/2);
    this.button.position(width*3/4, height/2);

    this.restart.position(width/2, height/5);
    this.restart.mousePressed(()=>{
      game.update(0)
      player.updateCount(0)
    })
    this.button.mousePressed(()=>{
     this.input.hide();
    this.button.hide();

      player. name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      if(player.index==5){
        console.log(new Date.getTime())
        var time=new Date.getTime()
        player.updateTime(time)
      }
      player.update()
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(width/2, height*3/4)
    });

  }
}
