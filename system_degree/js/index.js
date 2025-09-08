var grade = prompt(" enter your Grade");
if (grade == null || grade == "") console.log("please enter your grade ...");
else if (grade > 100 || grade < 0) console.log("this is unvalid value");
else if (grade >= 90 && grade <= 100) console.log("A+");
else if (grade >= 80 && grade < 90) console.log("A");
else if (grade >= 70 && grade < 80) console.log("B");
else if (grade >= 60 && grade < 70) console.log("c");
else if (grade >= 50 && grade < 60) console.log("D");
else if (grade < 50) console.log("Failed");
