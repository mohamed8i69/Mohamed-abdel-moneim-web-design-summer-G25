function changeImage() {
    var img = document.querySelector("#img");
    // console.log(img.src);
    if (img.src == "file:///D:/coding/html/pictures/1015-350x333.jpg") {
        img.src = "../pictures/1020-350x333.jpg"

    } else img.src = "../pictures/1015-350x333.jpg"
}

var users = []
var userForm = document.getElementById("userform")
var table = document.querySelector("tbody")

userForm.addEventListener("submit", e => {
    e.preventDefault()

    let userName = e.target.elements.userName.value
    let email = e.target.elements.email.value

    var user = {
        userName: userName,
        email : email
    };
    users.push(user)

    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = user.userName;

    var td2 = document.createElement("td")
    td2.innerText = user.email;

    var td3 = document.createElement("td")

    
    var btnedit = document.createElement("button")
    btnedit.classList.add("btn" , "btn-success","me-3")

    btnedit.innerText = "Edit";
    btnedit.addEventListener("click", () => {
        var newName = prompt("Enter new name", td1.innerText)
        var newEmail = prompt("Enter new email", td2.innerText)
        if (newName != undefined) td1.innerText = newName
        if (newEmail != undefined) td2.innerText = newEmail
    })

   
    var btndelete = document.createElement("button")
    btndelete.innerText = "Delete"
    btndelete.classList.add("btn","btn-danger")
    btndelete.addEventListener("click", () => {
        tr.remove()
    })

    td3.append(btnedit)
    td3.append(btndelete)

    
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)


    table.append(tr)
})