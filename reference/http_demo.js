const http=require('http');

http.createServer((req,res)=>{

res.write('hello node');
res.end();

}).listen(9000, ()=> console.log('Server running... on port 9000'));