function lightsOn(){
    var x = document.body.style.backgroundImage;
    
    var y = 'url("../images/room-wall.jpg")';
    console.log(y+"="+x);

    if(x == y){
        document.body.style.backgroundImage = "url(../images/room-win.jpg)";
        

    }

    else{
    document.body.style.backgroundImage = "url(../images/room-wall.jpg)";
    }

}