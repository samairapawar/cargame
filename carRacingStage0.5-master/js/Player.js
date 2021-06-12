class Player {
  constructor(){
    this.name=null
    this.distance=0
    this.index=0
    this.time=0
  }

updateTime(abc){
  database.ref('/').set({start_time:abc})
}
readEndTime(){
    database.ref('players/player'+player.index+"end_time").on('value',(data)=>{
    this.time=data.val()
    })
}
updateEndTime(a){
  database.ref('players/player'+player.index).update({end_time:a})
}

readTime(){
  database.ref('start_time').on('value',(data)=>{
  start_time=data.val()
  })
}
  getCount(){
    var playerCountRef = database.ref('player_count');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      player_count: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, distance: this.distance
    });
  }
  static readdata (){
    database.ref("players").on("value",(data)=>{
  array=data.val()
    })
  }
}
