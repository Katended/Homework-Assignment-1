var http = require('http');
var url = require('url');
var stringDecoder = require('string_decoder').stringDecoder;


var server = http.createServer(function(req,res){

    // get the URL and parse it
    var parseUrl = url.parse(req.url,true);
    var path = parseUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    req.on('data',function(data){
       
    });
    req.on('end',function(){

         var chosenHandler = typeof(router[trimmedPath])!=='undefined'? router[trimmedPath]:handlers.notfound;
    
    
           // return response
           res.setHeader('content-type','application/json');
           res.end(chosenHandler());
    
  
    })


});

server.listen('2000',function(){
  console.log('The Server is waiting for your request');
});

var handler= {};

handler.sayHello = function(){
    return 'Welcome, please feel free to browse.';

}

handler.notfound = function(){
    return 'Resource not found';
}
// define a request router
var router = {
    'hello':handler.sayHello
}