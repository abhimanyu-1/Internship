let radiusInput = document.getElementById("radius");
let answer1 = document.getElementById("answer");
let ar = document.getElementById("area");
let cir = document.getElementById("circ");


ar.onclick = function() {
        let radius = parseFloat(radiusInput.value);
        let area = Math.PI * radius * radius;
        answer1.innerHTML = area.toFixed(2);
}

cir.onclick = function() {
        let radius = parseFloat(radiusInput.value);
        let circumference = 2 * Math.PI * radius;
        answer1.innerHTML = circumference.toFixed(2);
    
}

//--------------------------------------

let price = document.getElementById("p");
let number = document.getElementById("n");
let rate = document.getElementById("r");
let answer2 = document.getElementById("ans");
let button = document.getElementById("submit-s");

button.onclick = function() {
    let result = (parseFloat(price.value) * parseFloat(number.value) * parseFloat(rate.value)) / 100;
    answer2.innerHTML = result.toFixed(2);
}
//---------------------------------------

let cel = document.getElementById("cel");
let faran = document.getElementById("faran");
let ctof = document.getElementById("cel-ans");
let ftoc = document.getElementById("far-ans");
let celbox = document.getElementById("cel-box");
let faranbox = document.getElementById("faran-box");

celbox.onclick = function() {
        let celcius = parseFloat(cel.value);
        let canswer = (celcius)*9/5 + 32;
        ctof.innerHTML = canswer.toFixed(2)+'°F';
}

faranbox.onclick = function() {
        let faranheit = parseFloat(faran.value);
        let fanswer = (faranheit-32)* (5/9);
        ftoc.innerHTML = fanswer.toFixed(2) +'°C';
    
}

//------------------------------------------------
let press = document.getElementById("press");
press.onclick = function(){
    let user = window.prompt("Enter your name");

let greeting_name = document.getElementById("greeting_name");
let reverse_name = document.getElementById("reverse_name");
let occurance = document.getElementById("occurance");
let occ = document.getElementById("occ");
let submit = document.getElementById("submit-occ");

greeting_name.innerHTML = "HI  "+user.toUpperCase();
let rev = []
for(i=user.length; i>=0 ; i--){
    rev.push(user[i])
}
let rev_name = rev.join('')
reverse_name.innerHTML = rev_name.toUpperCase();

let count = 0;
submit.onclick = function() {
    let charToCount = occ.value;
    let count = 0;
    for (let i = 0; i < user.length; i++) {
        if(user[i] !=' '){
        if (user[i] === charToCount) {
            count++;
        }
    }}
    occurance.innerHTML = count;
};}

//------------------------------------------------

let enter = document.getElementById("enter");
let random_ans = document.getElementById("random_ans");

let name_array = document.getElementById('name_array');
let name_enter = document.getElementById("name_enter");
let values = document.getElementById("values");

let asum = document.getElementById("a-sum");
let aavg = document.getElementById("a-avg");
let amax = document.getElementById("a-max");
let amin = document.getElementById("a-min");

let arr =[1,2,3,4,5];
enter.onclick = function(){
    let count = 5;
    a = [];
    while(count > 0){
        let rand = Math.floor(Math.random()*10);
        a.push(rand);
        random_ans.innerHTML = a;
        count -= 1;
    }
}
asum.onclick = function(){
    let sum = 0;
    for(let i=0; i<=4; i++){
        sum += arr[i];
    }
    ars_ans.innerHTML = sum;
}
aavg.onclick = function(){
    let sum = 0;
    for(let i=0; i<=4; i++){
        sum += arr[i];
    }
    ars_ans.innerHTML = sum/5;
}
amax.onclick = function(){
    ars_ans.innerHTML = Math.max(...arr);
}
amin.onclick = function(){
    ars_ans.innerHTML = Math.min(...arr);
}

name_enter.onclick = function() {
    let v = values.value;
    let names = []
    if (v) {
        names.push(v);
        name_array.innerHTML = names;
        values.value = ' ';
    } 
}
//-------------------------------------------------------

let addressBook = [];

function addEntry() {
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    addressBook.push({name: name, phoneNumber: phoneNumber});
    displayAddressBook();
}


function displayAddressBook() {
    let result = "Address Book:<br>";
    addressBook.forEach(entry => {
        result += entry.name + " - " + entry.phoneNumber + "<br>";
    });
    document.getElementById("addressBookResult").innerHTML = result;
}

function createStudent() {
    let name = document.getElementById("studentName").value;
    let gradesInput = document.getElementById("grades").value;
    let grades = gradesInput.split(",").map(grade => parseInt(grade.trim()));
    let student = {
        name: name,
        grades: grades
    };
    document.getElementById("studentResult").innerHTML = "Student: " + student;
}

let products = [];

function addProduct() {
    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let quantity = document.getElementById("productQuantity").value;
    products.push({name: name, price: price, quantity: quantity});
}

function searchProduct() {
    let searchTerm = document.getElementById("searchProduct").value.toLowerCase();
    let foundProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    let result = "Search Results:<br>";
    foundProducts.forEach(product => {
        result += product.name + " - Price: " + product.price + ", Quantity: " + product.quantity + "<br>";
    });
    document.getElementById("productResult").innerHTML = result;
}

//-------------------------------------------------------

let enter_color = document.getElementById("enter-color");
enter_color.onclick = function(){

    let list = ['red','green','yellow','violet','orange','white'];
    let number = Math.floor(Math.random()*10);
    document.body.style.background = list[number];
    console.log(number);
}