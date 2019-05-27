const fs=require('fs');
const path=require('path');

// create folder

//  fs.mkdir(path.join(__dirname,'folder'),{}, err=>{
//  if(err)
//  throw err;
//  console.log('Folder created...');
//  }); 

// for comment ctrl + k then after ctrl + c
// for uncomment ctrl + k then after ctrl + u

// create file and write something
// fs.writeFile(path.join(__dirname,'folder','test.txt'),'hello node i am here \n',
//  err=>{

//     if(err)
//     throw err;
//     console.log("file created...");


//     fs.appendFile(path.join(__dirname,'folder','test.txt'),'i love java & node js from core of my heart',
//      err=>{
    
//         if(err)
//         throw err;
//         console.log("file appended...");
    
//     });

// });


fs.readFile(path.join(__dirname,'folder','test.txt'),'utf8',
(err,data)=>{
if (err) throw err;
console.log(data);
});


fs.rename(
    path.join(__dirname,'folder','test.txt'),
    path.join(__dirname,'folder','test.txt'),
    err => {
        if(err) throw err;
        console.log("file renamed...");
    }
    
    );


