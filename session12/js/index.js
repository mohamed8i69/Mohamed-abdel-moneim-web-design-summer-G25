// 1

// var grade = prompt(" enter your Grade");
// if (grade == null || grade == "") console.log("please enter your grade ...");
// else if (grade > 100 || grade < 0) console.log("this is unvalid value");
// else if (grade >= 90 && grade <= 100) console.log("A+");
// else if (grade >= 80 && grade < 90) console.log("A");
// else if (grade >= 70 && grade < 80) console.log("B");
// else if (grade >= 60 && grade < 70) console.log("c");
// else if (grade >= 50 && grade < 60) console.log("D");
// else if (grade < 50) console.log("Failed");
// this is code 
 



// 2

// var myname="mohamed";
// for (var i = 0; i <=20; i++) {
//     var Name = prompt("enter the correct name");
//     if (myname === Name) {
//         console.log("welcome mohamed");
//         break;
//     }
// }


// 3

// function looping(startNum,endNum,breakNum,continueNum){
//     if (startNum != undefined && endNum != undefined && breakNum !=undefined && continueNum != undefined) {
//         for (let i = startNum; i < endNum; i++) {
//         if(i ==continueNum) continue; 
//         if (i == breakNum) break;
//             console.log(i);
//         }
//     }
//     else console.log("please enter full arguments");
// }
// looping(1,9);
// looping(1,9,6,3);

// 4

var course= prompt("enter your course");
var courses =["html","css","js","bootstrap"];
if (courses.includes(course)) {
  console.log("found")  
}
else{
    courses.push(course);
    console.log(courses);
}
