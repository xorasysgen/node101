const Persons=require("./person_class");
const obj=new Persons("Sushil", 32 , "india");
obj.getPerson();

const Logger=require('./reference/event_logger');

const logger=new Logger();
logger.on('message', result =>  console.log('Called listner# ' + result.id + '/' + result.msg));

logger.log('hello');
logger.log('hi');