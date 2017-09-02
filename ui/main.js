/*console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('madi');
    var marginLeft = 0;
    function moveRight () {
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft + 'px';
        
    }
    img.onclick = function() {
    var interval = setInterval(moveRight, 100);
};*/

// counter code
var button = document.getElementById('counter');
button.onClick = function () {
    //Make request to the endpoint
    
    //Capture the response store it in a variable
    
    // render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    
}