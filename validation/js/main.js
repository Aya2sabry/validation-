function validation() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var confrim = document.getElementById("confrim");
    var message = document.getElementById("error");
    var show = document.getElementById("show");

    message.style.color = "red";
    message.style.textAlign = "center";
    message.style.fontSize = "25px";
    message.style.marginBottom = "15px";
    message.style.transition = " all 0.5s ease";

    show.addEventListener('click', function () {
        if (pass.type === 'password') {
            pass.type = 'text';
        } else {
            pass.type = 'password';
        }
    })


    if (name.value == "" && email.value == "" && pass.value == "" && confrim.value == "") {
        message.innerHTML = "please enter data!";
        return false
    } else if (name.value.length < 5 || name.value.length > 15) {
        message.innerHTML = "please insert data between 5-15 character";
        return false
    } else if (email.value.indexOf('@') == -1) {
        message.innerHTML = "please enter valid email";
        return false
    } else if (pass.value.length <= 8) {
        message.innerHTML = " enter at least 8 character in password ";
        return false
    } else if (pass.value != confrim.value) {
        message.innerHTML = "please matched pass";
        return false
    }
}