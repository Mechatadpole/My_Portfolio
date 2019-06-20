// TODO: THIS IS THE SECTION FOR CUBE ONE
// Sets all instances of the class face to a constant variable "faces"
const faces = document.querySelectorAll('.face');

// Cube One Loop for movement and transformation targeting
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');
for (var i = 0, l = props.length; i < l; i++) {
    if (typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

// Cube One rotates and spins left or right
var yAngle = 0;
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37: // left
            yAngle -= 90;
            console.log(e);
            console.log(prop);
            break;
        case 39: // right
            yAngle += 90;
            console.log(e);
            console.log(prop);
            break;
    }
    document.getElementById('cube').style[prop] = "rotateY(" + yAngle + "deg)";
});

// TODO: THIS IS THE SECTION FOR CUBE TWO
// Sets all instances of the class face2 to a constant variable "faces2"
const faces2 = document.querySelectorAll('.face2');

// Cube Two Loop for movement and transformations
var props2 = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop2,
    el2 = document.createElement('div');
// Assigns "props2" to be an array of css transformations, the selected animation of the loop, and a newly created div element to take in the selected index of the new CSS ARRAY.
for (var i = 0, l = props2.length; i < l; i++) {
    if (typeof el2.style[props2[i]] !== "undefined") {
        prop2 = props2[i];
        break;
    }
}

// Cube Two rotates and spins up or down
var xAngle = 0;
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 38: // Up
            xAngle += 90;
            console.log(e);
            console.log(prop2);
            break;
        case 40: // Down
            xAngle -= 90;
            console.log(e);
            console.log(prop2);
            break;
    }
    document.getElementById('cube2').style[prop2] = "rotateX(" + xAngle + "deg)";
});
var draggie = new Draggabilly(document.querySelector('.draggie'));


