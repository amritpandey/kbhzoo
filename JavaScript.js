function getDate() {
    document.getElementById('demo').innerHTML = Date();
  
        }

    function validateForm() {

            var fname = document.myForm.fname.value;
            var lname = document.myForm.lname.value;
            var num = document.myForm.tel.value;
            var x = document.myForm.email.value;
            var atposition = x.indexOf("@");
            var dotposition = x.lastIndexOf(".");
        if (fname == null || fname == "") {
        alert("Firstname can't be blank");
            return false;
        } else if (lname == null || lname == "") {
        alert("Last name can't be blank");
            return false;
            }

            else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address \n ex: youremail@email.com");
                return false;
            }  else if (num=="" && isNaN(num)) {
        alert("Enter numbers only");

                return false;
            } else {
                return true;
            }
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "openingInfo.txt", true);
    xhttp.send();
}
