var ball;

var database, position;

function setup() {
    createCanvas(500, 500);

    database = firebase.database();

    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";


    var locOfNode = database.ref("ball/position");
    locOfNode.on("value", readPosition, showError);

}

function draw() {
    background("white");
    if (position !== undefined) {
        if (keyDown(LEFT_ARROW)) {
            writePosition(-1, 0);
        }
        else if (keyDown(RIGHT_ARROW)) {
            writePosition(1, 0);
        }
        else if (keyDown(UP_ARROW)) {
            writePosition(0, -1);
        }
        else if (keyDown(DOWN_ARROW)) {
            writePosition(0, +1);
        }
        drawSprites();
    }
}

function writePosition(x, y) {
    database.ref("ball/position").set({
        x: position.x + x,
        y: position.y + y
    })

}


function readPosition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function showError() {
    console.log("im error")
}


// //ref()
// //refer to a location
// //ball -> position -> x & y

// //read
// var locOfNode = database.ref("ball/position");
// locOfNode.on("value", readPosition, showError)


// //call back func
// //on()
// //on creates a listener
// //it listens to the changes in the path

// on("value", readPosition, showError)


// function readPosition(){

// }

// function showError(){
// console.log("im error")
// }
//set() - to save data to a specified reference replacing any existing data at that path.
//val() - We can extract the contents of the snapshot as a JavaScript object using the val() method

//readPosition - Every time a change in the database values of position (reference) happens, the readPosition function is called.
