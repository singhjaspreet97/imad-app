// Counter code
var button = document.getElementById('counter');

button.onclick = function() {
    // create a request object
    var request = new XMLHttpRequest();  
    
    // capture the response and store it in variable
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText; 
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    // Not done yet
   };
  // MAke a request
  request.open('GET', 'http://jassi80singh80.imad.hasura-app.io/counter', true);
  request.send(null);
};