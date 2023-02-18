"use strict"

//#region Task - Practices in lesson 

// let stu = {
//     name: "Resul",
//     surname: "Hesenov",
//     age: 15
// }

// stu.address = "Xalqlar";

// console.log(stu.address);

// let count = 0
// for (const key in stu)
// {
//     count++;
// }
// console.log(count);

// let stu1 = {
//     id: 1,
//     name: "Resul",
//     surname: "Hesenov",
//     age: 15
// }

// let stu2 = {
//     id: 2,
//     name: "Gultac",
//     surname: "Ceferova",
//     age: 18
// }

// let stu3 = {
//     id: 3,
//     name: "Nicat",
//     surname: "Novruzzade",
//     age: 25
// }

// let stu4 = {
//     id: 4,
//     name: "Musa",
//     surname: "Efendiyev",
//     age: 15
// }

// let stu5 = {
//     id: 5,
//     name: "Anar",
//     surname: "Huseynov",
//     age: 15
// }

// let group = {
//     name: "P414",
//     capacity: 4,
//     students: [],
//     addStudent: function(student){

//          let stu = this.students.find(s=>s.id == student.id);
//          if (stu!=undefined)
//          {
//             console.log("This student already existed.");
//             return;
//          }

//          if (this.students.length == this.capacity)
//          {
//             console.log("Group already filled.");
//             return;
//          }

//         this.students.push(student);
//     },

//     updateStudent: function(updatedStudent)
//     {
//         let existedStudent = this.students.find(s=>s.id == updatedStudent.id);
//         if(updatedStudent.name != undefined){
//             existedStudent.name = updatedStudent.name;
//         }
//         if(updatedStudent.surname != undefined){
//             existedStudent.surname = updatedStudent.surname;
//         }
//         if(updatedStudent.age != undefined){
//             existedStudent.age = updatedStudent.age;
//         }
//     },

//     deleteStudent: function(id){
//     this.students = this.students.filter(s=>s.id != id);
//     // let existStudentIndex = this.students.findIndex(s=>s.id == id);
//     // this.students.splice(existStudentIndex,1);
//     },

//     getAllStudents: function(){
//         return this.students;
//     }
// }

// group.addStudent(stu5);
// group.addStudent(stu4);
// group.addStudent(stu3);
// group.addStudent(stu2);
// group.deleteStudent(5);
// console.log(group.getAllStudents());

// let updatedStudent = {
//     id: 5,
//     name: "Yunis",
//     surname: "Balakisiyev",
//     age: 20
// }
// group.deleteStudent(5);
// console.log(group.getAllStudents());

// class Car{
//     constructor(color,speed,test){
//         this.color = color;
//         this.speed = speed;
//         this.test = test;
//     }

//     speedCar(data){
//         return 600 + data; 
//     }
// }


// let car1 = new Car("Mercedes",500);
// // console.log(car1.name + "/" + car1.color + "/" + car1.speed);
// let car2 = new Car();
// car2.speedCar(400);


// class BMW extends Car{
//     constructor(marka,color,speed,test)
//     {
//         super(color,speed,test);
//         this.marka = marka;
//     }
// }

// let bmw = new BMW("F30","Red",400,"ramil");
// console.log(bmw.marka + "/" + bmw.color + "/" + bmw.speed + "/" + bmw.test);

// class Test{
//     static eating()
//     {
//         console.log("eat");
//     }
// }

// Test.eating();

// let numbers = [1,2,3,4,5,6,7];
// let names = ["Ramil","Yunis","Elcan"];

// Array.prototype.musa = "yatma";
// console.log(numbers.musa);
// console.log(names.musa);


// Array.prototype.sum = function()
// {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//        sum+=this[i];
//     }
//     return sum;
// }

// console.log(numbers.sum());


// let numbers = [1,2,3,4,5,6,7];
// Array.prototype.maxNumber = function()
// {
//     return Math.max(...this);
// }

// console.log(numbers.maxNumber());

// let str = "Allahverdiyev";
// String.prototype.lengthOfString = function()
// {
//     return this.length;
// }

// console.log(str.lengthOfString());

// let number = 10;
// Number.prototype.powerOfNumber = function(num)
// {
//     return Math.pow(this,num);
// }

// console.log(number.powerOfNumber(3));


//#endregion