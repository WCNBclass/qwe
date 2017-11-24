var http = require("http");
var urlA = require("url");
var fs = require("fs");
http.createServer(function(req,res){
	var url = urlA.parse(req.url).pathname;
	var url1 = urlA.parse(req.url,true).query.abc;
	if(url=="/favicon.ico"){
		res.end();
		return;
	}else{
		fs.readFile("../data"+url+".json",function(err,data){
			if(err){
				res.write("404");
			}else{
				res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
				res.write(url1+"("+data+")");
			}
			res.end()
		})
	}
}).listen(8080);
console.log("运行");