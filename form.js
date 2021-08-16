class Form{
    //to give input
    constructor(){
    this.input=createInput("enter your Name")
    this.button=createButton("Play")
    this.greeting=createElement('h2')
    this.title=createElement("h1")
    }
    
    hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()

    }

    display(){
        this.title.html("GUESS THE WORD")
        this.title.position(displayWidth/2 -100,0)
        this.title.style('font-size', '50px');
        this.title.style('color', '#62506C');

        this.input.html("ENTER YOUR NAME")
        this.input.position(displayWidth/2 - 50,100)

        this.button.html("PLAY")
        this.button.position(displayWidth/2 - 100,100)
        this.button.style('color', 'black');

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            this.greeting.html("Are you ready"+player.name)
            this.greeting.position(displayWidth/2,displayHeight/2)

        })
    }

    
}