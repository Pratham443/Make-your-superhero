var canvas = new fabric.Canvas("Canvas");

var block_width = 100;
var block_height = 100;

var player_X = 10;
var player_Y = 10;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        })

        canvas.add(player_object);
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_Y,
            left:player_X
        })

        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey && keyPressed == 70) {
        new_image("ironman_face.png");
        console.log("shift and f");
    }

    if(e.shiftKey == false && keyPressed == 70) {
        new_image("hulk_face.png");
        console.log("f");
    }

    if(e.shiftKey && keyPressed == 66) {
        new_image("ironman_body.png");
        console.log("shift and b");
    }

    if(e.shiftKey == false && keyPressed == 66) {
        new_image("spiderman_body.png");
        console.log("b");
    }

    if(e.shiftKey && keyPressed == 76) {
        new_image("spiderman_legs.png");
        console.log("shift and l");
    }

    if(e.shiftKey == false && keyPressed == 76) {
        new_image("hulk_legs.png");
        console.log("l");
    }

    if(e.shiftKey && keyPressed == 82) {
        new_image("thor_right_hand.png");
        console.log("shift and r");
    }

    if(e.shiftKey == false && keyPressed == 82) {
        new_image("hulk_right_hand.png");
        console.log("r");
    }

    if(e.shiftKey && keyPressed == 72) {
        new_image("thor_left_hand.png");
        console.log("shift and h");
    }

    if(e.shiftKey == false && keyPressed == 72) {
        new_image("captain_america_left_hand.png");
        console.log("h");
    }

    if(keyPressed == 38) {
        up();
        console.log("up");
    }

    if(keyPressed == 40) {
        down();
        console.log("down");
    }

    if(keyPressed == 37) {
        left();
        console.log("left");
    }

    if(keyPressed == 39) {
        right();
        console.log("right");
    }
}

function up() {
    if(player_Y >=  0) {
        player_Y = player_Y - 10;
        console.log("image height is " + block_height);
        console.log("X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_Y <=  500) {
        player_Y = player_Y + 10;
        console.log("image height is " + block_height);
        console.log("X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_X >=  0) {
        player_X = player_X - 10;
        console.log("image height is " + block_height);
        console.log("X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_X <=  850) {
        player_X = player_X + 10;
        console.log("image height is " + block_height);
        console.log("X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}