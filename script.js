// Get all input fields by id

var myname = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var college = document.getElementById("college");
var country = document.getElementById("country");
var username = document.getElementById("username");
var password = document.getElementById("password");

// extract all input values from localstorage to set in input fields initially
var res_myname = localStorage.getItem("myname")
var res_email = localStorage.getItem("email")
var res_phone = localStorage.getItem("phone")
var res_college = localStorage.getItem("college")
var res_country = localStorage.getItem("country")
var res_username = localStorage.getItem("username")
var res_password = localStorage.getItem("password")

// If localstorage values are not null then set them in input fields
if(res_myname!=null){
    myname.value = res_myname;
}
if(res_email!=null){
    email.value = res_email;
}
if(res_phone!=null){
    phone.value = res_phone;
}
if(res_college!=null){
    college.value = res_college;
}
if(res_country!=null){
    country.value = res_country;
}
if(res_username!=null){
    username.value = res_username;
}
if(res_password!=null){
    password.value = res_password;
}

// when any input changes then update those values in localstorage
myname.oninput = function () {
    localStorage.setItem("myname", myname.value);
}
email.oninput = function () {
    localStorage.setItem("email", email.value);
}
phone.oninput = function () {
    localStorage.setItem("phone", phone.value);
}
college.oninput = function () {
    localStorage.setItem("college", college.value);
}
country.oninput = function () {
    localStorage.setItem("country", country.value);
}
username.oninput = function () {
    localStorage.setItem("username", username.value);
}
password.oninput = function () {
    localStorage.setItem("password", password.value);
}


var currentTab = 0;
showTab(currentTab);

function showTab(n){
    var x = document.getElementsByClassName("tab");
    // console.log("debugging");
    // console.log(x[n].childNodes[1].childNodes[0].attributes.id.nodeValue);
    // console.log("debugging ends");
    // console.log(curr_input_id_name);
    var curr_input_id_name = x[n].childNodes[1].childNodes[0].attributes.id.nodeValue;
    console.log(curr_input_id_name);
    var xxx = document.getElementById(curr_input_id_name);
    x[n].style.display = "block";
    if(n==0){
        document.getElementById("prevBtn").style.display="none";
    }else{
        document.getElementById("prevBtn").style.display="inline";
    }
    if(n==(x.length-1)){
        document.getElementById("nextBtn").innerHTML="Submit";
    }else{
        document.getElementById("nextBtn").innerHTML="Next";
    }
    fixStepIndicator(n);
}



function nextPrev(n){
    var x = document.getElementsByClassName("tab");
    if(n == 1 && validateForm()==false) return false;
    x[currentTab].style.display="none";
    currentTab = currentTab + n;
    if(currentTab>=x.length){
        // localStorage.setItem("myname", myname.value)
        // localStorage.setItem("email", email.value)
        // localStorage.setItem("phone", phone.value)
        // localStorage.setItem("college", college.value)
        // localStorage.setItem("country", country.value)
        // localStorage.setItem("username", username.value)
        // localStorage.setItem("password", password.value)
        // localStorage.clear()
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}




function validateForm(){
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input")

    for(i = 0; i<y.length; i++){
        if(y[i].value==""){
            y[i].className += " invalid";
            valid = false;
        }
    }

    if(valid){
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }

    return valid;
}


function fixStepIndicator(n){
    var i,x=document.getElementsByClassName("step");
    for(i=0;i<x.length;i++){
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}