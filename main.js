var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    Keypressed = e.keyCode;
    console.log(Keypressed);
    if (e.shiftKey == true && Keypressed == 80) {
        console.log("p and shift key pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && Keypressed == 77) {
        console.log("m and shift key pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (Keypressed == 37) {
        console.log("left");
        left();
    }

    if (Keypressed == 38) {
        console.log("up");
        up();
    }
    if (Keypressed == 39) {
        console.log("right");
        right();
    }

    if (Keypressed == 40) {
        console.log("down");
        down();
    }

    if (Keypressed == 87) {
        console.log("W");
        new_image("wall.jpg");
    }

    if (Keypressed == 71) {
        console.log("G");
        new_image("ground.png");
    }

    if (Keypressed == 76) {
        console.log("L");
        new_image("light_green.png");
    }

    if (Keypressed == 84) {
        console.log("T");
        new_image("trunk.jpg");
    }

    if (Keypressed == 82) {
        console.log("R");
        new_image("roof.jpg");
    }

    if (Keypressed == 89) {
        console.log("Y");
        new_image("yellow_wall.png");
    }

    if (Keypressed == 68) {
        console.log("D");
        new_image("dark_green.png");
    }

    if (Keypressed == 85) {
        console.log("U");
        new_image("different.png");
    }

    if (Keypressed == 67) {
        console.log("C");
        new_image("cloud.jpg");
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}