// Counter code
var button = document.getElementById('counter');
button.onclick = function() {
    // make a req to counter endpoint
    
    // capture the response and store it in variable
    
    //render the variable in the current span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};