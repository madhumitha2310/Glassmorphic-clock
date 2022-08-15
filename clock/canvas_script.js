
// SCRIPT FOR CANVAS ANIMATION ON MOUSE MOVE

canvas = document.getElementsByTagName('canvas')[0];
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var canvas_context = canvas.getContext('2d');

//NUMBERS TO BE DISPLAYED ON THE CANVAS
var characterList = ['1','2','3','4','5','6','7','8','9','10','11','12'];

//SETTING UP LAYERS
var layers = {
    n: 5, //NUMBER OF LAYERS
    numbers: [120, 40, 30, 20, 15], //NUMBERS THAT EACH LAYER CONTAINS
    coef: [0.2, 0.4, 0.6, 0.8, 0.9], //SPACE BETWEEN ONE NUMBER OF A LAYER FROM ANOTHER
    size: [16, 22, 36, 40, 42], //SIZE OF NUMBERS
    color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //COLOR CODE OF NUMBERS
    font: 'Harrington' 
};

var characters = [];
var mouseX = document.body.clientWidth/2;
var mouseY = document.body.clientHeight/2;

var random_number = {
    btwn: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function(list) {
        return list[random_number.btwn(0, list.length)];
    }
};


function drawNumbers(char) {
    canvas_context.font = char.size + 'px ' + char.font;
    canvas_context.fillStyle = char.color;
    
    var x = char.posX + (mouseX-canvas.width/2)*char.coef;
    var y = char.posY + (mouseY-canvas.height/2)*char.coef;

    canvas_context.fillText(char.char, x, y);
}



/*ANIMATION onMousemove*/

document.onmousemove = function(ev) {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
        requestAnimationFrame(update);
    } else {
        update();
    }
};

function update() {
    clear();
    render();
}

function clear() {
    canvas_context.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
    for (var i = 0; i < characters.length; i++) {
        drawNumbers(characters[i]);
    }
}



/*INITIALIZE*/

function createNumbers() {
    for (var i = 0; i < layers.n; i++) {
        for (var j = 0; j < layers.numbers[i]; j++) {

            var character = random_number.choose(characterList);
            var x = random_number.btwn(0, canvas.width);
            var y = random_number.btwn(0, canvas.height);

            characters.push({
                char: character,
                font: layers.font,
                size: layers.size[i],
                color: layers.color[i],
                layer: i,
                coef: layers.coef[i],
                posX: x,
                posY: y
            });

        }
    }
}

createNumbers();
update();

/*REAJUST CANVAS AFTER RESIZE*/

window.onresize = function() {
    location.reload();
};

document.getElementById('close').onclick = function() {
    this.parentElement.style.visibility = 'hidden';
    this.parentElement.style.opacity = '0';
}