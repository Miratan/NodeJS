var express = require('express');
var app = express();
	
app.get('/', function(request, response){
	var html = buildHtml(request); 	
	response.end(html);
});

app.post('/palindrome/:name', function(request, response){
	var palindrome = request.params.name;
	var palindromeInverse = reverse(palindrome);
	if(palindrome == palindromeInverse){
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.end("Obrigado por acessar meu servidor!");	
	}else{
		response.writeHead(400, {"Content-Type":"text/plain"});
		response.end("");	
	}
});

function reverse(s){
    return s.split("").reverse().join("");
}

// Aplicação disponível em localhost:8300
var server = app.listen(8300, function(req, res){
	console.log("Aplicação disponível em: localhost:8300");
	var html = buildHtml(req); 
});

function buildHtml(req) { 
	var header = ''; 
	var body = '<form id="palindromeForm" action="http://localhost:8300/palindrome?:nome" method="post"> <div> <label>Digite aqui: </label> <input type="text" id="nome" name="nome"></input> </div> <input type="submit" value="Enviar"></input> </form>'; 
	return '<!DOCTYPE html>' + '<html><header>' + header + '</header><body>' + body + '</body></html>'; 
};