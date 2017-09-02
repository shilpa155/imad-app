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
//var counter = 0;
button.onclick = function () {
    //Make request to the endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response store it in a variable
    request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE) {
           // take some action
           if(request.status === 200) {
           var counter = request.responseText;
           var span = document.getElementById('count');
            span.innerHTML = counter.toString();
           }
       } 
       // not done yet
       
    };
    
    // make a request
    request.open('GET', 'http://reddyshilpa155.imad.hasura-app.io/counter', true);
    request.send(null);
    /* render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    */
};
// submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
// make request tot theserver send the name

// capture the list of name and render it as list
var names = ['Name1' , 'Name2' , 'Name3' ,'Name4'];
var list = '';
for (var i=0; i<names.length; i++) {
    list == '<li>' +names[i] + '</li>';
    
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;

};