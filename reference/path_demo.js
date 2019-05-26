const path=require('path');
//base file name
console.log("file name full#" + __filename);
console.log("file name#" + path.basename(__filename));

//directory name
console.log("dir name full#" + __dirname)
console.log(path.dirname(__filename));

// extension name
console.log("exten #" + path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.join(__dirname,'folder','test.html'));