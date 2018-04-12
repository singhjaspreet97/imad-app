console.log('Loaded!');
// change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//move the image
var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveLeft, 100);
    img.style.marginLeft = '100px';
};