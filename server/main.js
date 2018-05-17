//import './../imports/utils';
import {meteor} from 'meteor/meteor';
import {Players} from  './../imports/api/players';
Meteor.startup(()=>{
  

});

/*let house={
  bedroom : 2,
  bathroom : 1.5
}
let yearbuilt = 1995;
 let complet ={
   ...house,
   bedroom: 3,
   yearbuilt,
   flooring : "carpet"
 }
 console.log(complet);

/*class Person {
  
  constructor   (name = "default", age= 0){
    this.name = name;
    this.age =age;
  }
  getGreeting(){
    return`Hi, i am ${this.name} .` ;
  }
  getPersonDescription(){
    return`${this.name} is  ${this.age} years old.` ;
    
  }
}
  
  class Employee extends Person {
    constructor (name, age, job){
      super(name, age);
      this.job=job;
    }
    hasJob(){
      return !!this.job;
    }
    getGreeting(){
      if (this.job){
        return`${this.name} is  a ${this.job } .` ;
      }else{
        return super.getGreeting();
      }
    }
    
  } 
  
  let pers= new Employee('marwa', 27, 'Programmer');
  console.log(pers.getGreeting())*/
  
  
  
  
  
  //let square = (x) => x * x;
  //console.log(square(10));
  /*let user = {
    name : "marwa",
    sayHi(){
     
      setTimeout(()=>{
         console.log(this.name);
      }, 1000);
     
    }
  };
  user.sayHi();*/
  
  /*let numbers = [9, 99, 100, 101];
  let newNumbers = numbers.map((number) => number+=1) ;
  console.log(newNumbers);*/
