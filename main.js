console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}

2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}

3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried 1) 
function sum(x,y){
  return x+y
}


var color="Blue"1) 
function sum(x,y){
  return x+y
}


var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE         
class Sum {
x:
y:
// must change the function to class and the name of class must start with capital letter then the object 

//2) WRITE YOUR CODE UNDER THIS LINE         
class ConsoleReturn {

}
//3) WRITE YOUR CODE UNDER THIS LINE         
let name="Alex"
let age=25
const result="My name is: " , name , "and my age is: " , age
//4) WRITE YOUR CODE UNDER THIS LINE         

//5) WRITE YOUR CODE UNDER THIS LINE         
let object2{
  multi:class = (a,b){
   a * b
  }
}







/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  OS:'Windows',
  RAM:16,
  CPU:'I7',
  doubleRAM:f(){}class Computer 
}
*/

// WRITE YOUR CODE UNDER THIS LINE
class Computer{
  constructor(
  OS:windows,linux,mac
  Ram:16,8,4
  Cpu:I7,I5,I3
  )
}

// must make a new class to change the ram value using (this) then return the new value with object




/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eact again']
  };
  changeTitle() {
    state.title = 'AGGREGOR ZOLDYCK'
  }
  render() {
    return (
      <>
    <h1>App Component => state.title</h1>
      <button onClick={this.changeTitle}>Change Title</button>
      <Tasks tasks={this.todos} changeTitleFromChild={this.changeTitle} />
      </>
    );
  }
}




// Tasks Component
import React, { Component } from 'react';

class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    day = 'Sun'
  }

  render() {
    return (
      <div>
        <h1>Tasks Component => state.day</h1>
        <button onClick={this.changeDay}>Change Tasks State</button>
        <button onClick={this.changeTitle}>Change App State</button>
      </div>
    );
  }
}
