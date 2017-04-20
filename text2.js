var http = require ('http');

http.createServer(function(request, response){
	console.log('er was een request');
	response.writeHead(200,{'Content-Type': 'text/json'});
	var json = JSON.stringify({
		tekst: "Hi"
	});
response.end(json);
}).listen(3000);

console.log('De server luistert op port 3000');