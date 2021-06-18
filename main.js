var canvas=new fabric.Canvas('myCanvas'); //ok this is the refrenece of the canvas
var playerx=10;
var playery=10;
blockimgwidth=30;
blockimgheight=30;
var player_object="";
var blockimg_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}
function new_image(getimg) {
    fabric.Image.fromURL(getimg,function(Img) {
        blockimg_object=Img;
        blockimg_object.scaleToWidth(blockimgwidth);
        blockimg_object.scaleToHeight(blockimgheight);
        blockimg_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimg_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') 
    { console.log("p and shift pressed together");
     blockimgwidth = blockimgwidth + 10; 
     blockimgheight = blockimgheight + 10; 
     document.getElementById("current_width").innerHTML = blockimgwidth; 
     document.getElementById("current_height").innerHTML = blockimgheight; } 
     if(e.shiftKey && keyPressed == '77') { console.log("m and shift pressed together"); 
    blockimgwidth = blockimgwidth - 10; 
     blockimgheight = blockimgheight - 10; 
     document.getElementById("current_width").innerHTML = blockimgwidth; 
     document.getElementById("current_height").innerHTML = blockimgheight; } //why whyyyyyyyyyyyyyy
    if (keyPressed=='38') {
    up();
    console.log("up");
    }
    if (keyPressed=='40') {
        down();
        console.log("down");

     }if (keyPressed=='39') {
            right();
            console.log("right");

      }if (keyPressed=='37') {
                left();
                console.log("left");
                }
      
       if(keyPressed=='87')
        { new_image('wall.jpg'); 
        console.log("w"); }                  
        if(keyPressed=='71')
        { new_image('ground.png'); 
        console.log("g"); }                  
        if(keyPressed=='76')
        { new_image('light_green.png'); 
        console.log("l"); }                  
        if(keyPressed=='84')
        { new_image('trunk.jpg'); 
        console.log("t"); }                  
        if(keyPressed=='82')
        { new_image('roof.jpg'); 
        console.log("r"); }                  
        if(keyPressed=='89')
        { new_image('yellow_wall.png'); 
        console.log("y"); }                  
        if(keyPressed=='68')
        { new_image('dark_green.png'); 
        console.log("d"); }                  
        if(keyPressed=='85')
        { new_image('unique.png'); 
        console.log("u"); }
        if(keyPressed=='67')
        { new_image('cloud.jpg'); 
        console.log("c"); }        
            } 
function up(){
    if (playery>=0) {
        playery=playery-blockimgheight;
        console.log("blockimgheight="+blockimgheight);
        console.log("when up arrow key is pressed,x="+playerx+"y="+playery);
        canvas.remove(player_object);player_update();
    }
}                        
function down(){
    if (playery<=500) {
        playery=playery+blockimgheight;
        console.log("blockimgheight="+blockimgheight);
        console.log("when down arrow key is pressed,x="+playerx+"y="+playery);
        canvas.remove(player_object);player_update();
    }
}
function right(){
    if (playerx<=850) {
        playerx=playerx+blockimgwidth;
        console.log("blockimgwidth="+blockimgwidth);
        console.log("when right arrow key is pressed,x="+playerx+"y="+playery);
        canvas.remove(player_object);player_update();
    }
}   
function left(){
    if (playerx>=0) {
        playerx=playerx-blockimgwidth;
        console.log("blockimgwidth="+blockimgwidth);
        console.log("when left arrow key is pressed,x="+playerx+"y="+playery);
        canvas.remove(player_object);player_update();
    }
}                                                