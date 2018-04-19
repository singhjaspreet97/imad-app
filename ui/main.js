// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    // make a req to counter endpoint
    var request = new XMLHttpRequest();  
    
    // capture the response and store it in variable
    request.onreadystatechange = function() {
        if(request,statechange === XMLHttpREquest,DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText; 
            }
        }
    // Not done yet
};
    
    //render the variable in the current span
    counter = counter + 1;
    var hel = document.getElementById('count');
    hel.innerHTML = counter.toString();
};