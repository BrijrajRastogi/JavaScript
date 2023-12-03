//creating a const object named "student" for storing student details
const student = {
    fullName : "Brijraj Rastogi", //storing details in key:value pair
    rollNum : 32034,
    age : 21,
    cgpa : 9.40,
    isPass : true
}; //terminating the object

//printing the object on console
console.log(student);

//printing the age key of student object
console.log(student.age);

//accessing the key "fullName" of object student and updating it's value
student.fullName = "suraj";

//updating the key "age"
student["age"] = 22;

//printing the updated age key
console.log(student.age);

//printing the updated object student
console.log(student);
