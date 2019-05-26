console.log(__dirname, __filename);

class Persons{
    
    constructor(name , age, country){
        this.name=name;
        this.age=age;
        this.country=country;
    }

    getPerson(){
        console.log(`my name is ${this.name} , i am ${this.age} and i am from ${this.country}`);
    }

    
}

module.exports=Persons;