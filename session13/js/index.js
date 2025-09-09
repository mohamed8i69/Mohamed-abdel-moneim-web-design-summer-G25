// var p = prompt("enter your course")
// tracks = ["html", "css", "js", "bootstrap"];
// var ind = tracks.findIndex(e => e == p)
// if (ind >= 0) {
//     console.log("found in " + ind + " index4");
// }
// else {
//     tracks.push(p)
//     tracks.forEach(element => console.log(element));
// };


// var users = [
//     {
//         name: "mohamed",
//         Job: "engineer",
//         address: "October",
//         age: 30
//     },
//       {
//         name: "mohamed",
//         Job: "engineer",
//         address: "October",
//         age: 25
//     },
//       {
//         name: "mohamed",
//         Job: "engineer",
//         address: "October",
//         age: 40
//     }
// ]
// var ind = users.findIndex(e => e.age == 25)
// console.log(ind)
var users=[];
var iterations = prompt("enter number of user");
function addUser(){
   var id = prompt("enter Id of user")
   var name =prompt("enter name of user")
   var balance = prompt("enter balance of user")
    users.push({"id":id,"name":name,"balance":balance})
    
}
for (var i = 0; i < iterations; i++) {
    addUser()
}
console.log(users)
function editUserBlanceById(){
     var id = prompt("enter Id of user that you want edit on it")
    var ind = users.findIndex(e => e.id == id)
   var newbalance = prompt(`enter new balance for user number ${ind} by id:${id}: `) 
    users[ind].balance=newbalance;
}
editUserBlanceById()
console.log(users)
function deleteUserById() {
    var id = prompt("enter Id of user deleted ")
    var ind = users.findIndex(e => e.id == id);
    if (ind !== -1) {
        users.splice(ind, 1);
        console.log(`User with id ${id} deleted successfully`);
    } else {
        console.log(`User with id ${id} not found`);
    }

}
deleteUserById()
console.log(users)