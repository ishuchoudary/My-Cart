/*let signuser = document.getElementById("signuser");
let signpass = document.getElementById("signpass");
let signemail = document.getElementById("signemail");
let signbtn = document.getElementById("signbtn");
let SignUsers = [];

signbtn.addEventListener("click", function() {

    if (signuser.value.trim() == '' || signpass.value.trim() == '' || signemail.value.trim() == '') {
        alert("input box is empty");
        return;
    }

    let obj = {

            Name: signuser.value,
            Password: signpass.value,
            Email: signemail.value,
            role: "user"

        }
        //console.log(obj);
    if (localStorage.getItem("myUsers") != null) {
        SignUsers = JSON.parse(localStorage.getItem("myUsers"));
        SignUsers.push(obj);
        addLocalStorage();
    } else {
        SignUsers.push(obj);
        addLocalStorage();
    }


    if (signemail.value === "kirti2004" && signpass.value === "1009") {
        window.location.href = "login.html";
    } else {
        window.location.href = "home.html";
    }


    signuser.value = '';
    signpass.value = '';
    signemail.value = '';



})


function addLocalStorage() {
    localStorage.setItem("myUsers", JSON.stringify(SignUsers));

}*/