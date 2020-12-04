class Form{
 constructor(){
  this.input=createInput("name")
  this.button=createButton("turbo")
  this.greeting=createElement("h3")
 }
 display(){
     var title=createElement("h2")
     title.html("dhoom-5")
     title.position(150,50)

     this.input.position(150,100)

     this.button.position(250,150)

     this.button.mousePressed(()=>{
        this.button.hide()
        this.input.hide()
        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)

        this.greeting.html("swag se swagat "+player.name)
        this.greeting.position(150,150)
     })
 }
 hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
 }
}