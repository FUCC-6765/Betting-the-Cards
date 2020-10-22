const Player = require('./Player.js').Player
class Game {
  constructor(deck1,deck2){
    this.players = [new Player(deck1,0),new Player(deck2,1)]
    this.whosTurnNext = 1
    this.whosTurnCurrent = 0
  }
  nextTurn(){
    this.players[this.whosTurnCurrent].endTurn()
    this.players[this.whosTurnNext].startTurn()
    let save = this.whosTurnNext
    this.whosTurnNext = this.whosTurnCurrent
    this.whosTurnCurrent = save
  }
  applyAuraEffects(){
    for(let i=0;i<7;i++){
      if(this.game.players[0].slots[i]!=null){
        this.game.players[0].slots[i].applyAuraEffects(this)
      }
    }
      for(let i=0;i<7;i++){
        if(this.game.players[1].slots[i]!=null){
          this.game.players[1].slots[i].applyAuraEffects(this)
        }
      }
  }
}
module.exports = {Game}