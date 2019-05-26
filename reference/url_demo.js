const url=require('url');
const myUrl=new URL('https://google.com:8080/accesskey.html?id=58962&name=sushil_bhaskar');

console.log(myUrl.href);// not function
console.log(myUrl.protocol);// not function
console.log(myUrl.host);// not function, does not include port
console.log(myUrl.hostname);// not function- hostname with port
console.log(myUrl.toString());// it`s function
console.log(myUrl.pathname);// path name
console.log(myUrl.search);// serialized query
console.log(myUrl.searchParams);// all parameters
myUrl.searchParams.append('location','India');// added param in existing URL
console.log(myUrl.searchParams);//view
//loop through param
myUrl.searchParams.forEach((key,value)=>{
    console.log(`${key} : ${value}`);
});



