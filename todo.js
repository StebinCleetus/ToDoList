// .................LoginPage...............................

function loginToDo() {
    var emailToDo = document.getElementById("emailToDo");
    var passwordToDo = document.getElementById("passwordToDo");
    ToDoCheck(emailToDo.value, passwordToDo.value, myDisplayer);
}

function ToDoCheck(a, b, callback1) {
    let c = 0;
    if (a == "admin" && b == "12345") {
        c = 1;
    }
    callback1(c);
}

function myDisplayer(something) {
    if (something == 1) {
        window.open('todo.html', '_self');
    } else {
        alert("User credentials are not valid");
    }
}
// .................LoginPage   Ended  ..............................

// .................Get data from JSON ..............................

function ajax1() {
    //.............. remove WelocmeScreen...........................
    let beinvisible = document.getElementById("beinvisible");
    beinvisible.innerHTML = "";

    //...................... Ajax Funtion...........................

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let invisible = document.getElementById("table-head");
            invisible.setAttribute("class", "table-dark");
            var response1 = JSON.parse(this.responseText);
            var out = "";
            for (let i = 0, check; i < response1.length; i++) {
                if (response1[i].completed == true) {
                    check = '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked disabled>';
                } else {
                    check = '<input class="form-check-input" name="check1" type="checkbox" value="" id="flexCheckChecked1" onclick="count()" >';
                }

                out += "<tr >" +
                    "<th scope='row'>" + response1[i].id + "</th>" +
                    "<td >" + response1[i].title + "</td>" +
                    "<td>" + check + "</td>" +
                    "</tr>";

                document.getElementById("user1").innerHTML = out;
            }
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

// .......................Counting checkboxes...............................

function count() {
    var checkboxes = document.querySelectorAll('input[name="check1"]:checked').length;
    countpromise(checkboxes);
}

// ...........................Checking status................................
 
function countpromise(a) {
    let myPromise = new Promise(function (myResolve, myReject) {
        if (a == 5) {
            myResolve(a);
        } else {
            myReject(a);
        }
    });

    myPromise.then(
        function (value) {
            alert("Congrats. " + value + " Tasks have been Successfully Completed");
        },
        function (error) {
            console.log(error + " Tasks have been Successfully Completed");
        }
    );
}