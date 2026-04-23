/* const course = ["JS"];
 addCourse("PHP");
 addCourse("Shopify");
undo();
 featuredCourse("Git");
 removeFeaturedCourse();
 addCourse("Wordpress");
replaceCourse();
 sortCourse();

 function addCourse(item){
     course.push(item);
 }

function undo(){
    course.pop();
}
 function featuredCourse (item){
     course.unshift(item);
 }
 function removeFeaturedCourse (item){
     course.shift();
 }
 function replaceCourse(){
   course.splice(0,1, "JavaScript")
}
function sortCourse(){
    const courseSorted = course.sort((a,b)=> a.localeCompare(b))
   console.log(courseSorted);
 }
 console.log("Courses", course.slice[0,1]);
console.log("Courses", course);
 class Person{
    greet(){
      console.log("Hello, I am Pragya");
  }
}
 const person1= new Person()
 person1.greet(); */

 //Class 2 Assignments starts here: 
 //1. Exercise 1: 
 let course = ["PHP", "JS", "HTML", "CSS", "WordPress", "Shopify", "Python", "Ruby", "Laravel", "GoLang"];
 console.log("Before operations: " + course);

 course.splice(4, 3, "Java", "C++", "C#", "C", "React");
 console.log("After operations: " + course);


