let user_input = document.getElementById("user-input");
let submit = document.getElementById("submit");
let change = document.getElementById("change");

submit.onclick = function(){
    change.innerHTML = user_input.value.toUpperCase();
}
//----------------------------------------------------------
let bgColorElements = document.getElementsByClassName("bg-color");
let btnElements = document.getElementsByClassName("btn");

for (let i = 0; i < btnElements.length; i++) {
    btnElements[i].onclick = function() {
        for (let j = 0; j < bgColorElements.length; j++) {
            bgColorElements[j].style.backgroundColor = 'yellow';
        }
    }
}
//----------------------------------------------------------

let heading = document.createElement("h1");
let heading_container = document.getElementById('headline');

heading.textContent = 'Dynamic Headline'
heading_container.appendChild(heading);

heading.id = 'myHeadline';
setTimeout(function() {
    let myHeadline = document.getElementById("myHeadline");
        myHeadline.style.fontSize = "5em";
}, 8000);

//----------------------------------------------------------

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    alert('Hello, ' + name + '!');
});

//----------------------------------------------------------

let backbutton = document.getElementById("backbutton");
let reload = document.getElementById("reload");

backbutton.onclick = function(){
    window.history.back();
}
reload.onclick = function(){
    window.location.reload();
}
//----------------------------------------------------------
let dec1 = document.getElementById("dec1");
let dec2 = document.getElementById("dec2");
let dec3 = document.getElementById("dec3");
let dec4 = document.getElementById("dec4");
let dec5 = document.getElementById("dec5");
let about = document.getElementById("about");

dec1.onclick = function(){
    dec1.style.backgroundColor = 'red'
    dec2.style.backgroundColor = 'white'
    dec3.style.backgroundColor = 'white'
    dec4.style.backgroundColor = 'white'
    dec5.style.backgroundColor = 'white'

    about.style.backgroundColor = 'yellow';
    about.innerHTML = "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies."
}
dec2.onclick = function(){
    dec1.style.backgroundColor = 'white'
    dec2.style.backgroundColor = 'red'
    dec3.style.backgroundColor = 'white'
    dec4.style.backgroundColor = 'white'
    dec5.style.backgroundColor = 'white'

    about.style.backgroundColor = 'yellow';
    about.innerHTML = "The C programming language is a general-purpose, operating system-agnostic, and procedural language that supports structured programming and provides low-level access to the system memory. Dennis Ritchie invented C language in 1972 at AT&T (then called Bell Laboratory), where it was implemented in the UNIX system on DEC PDP II. It was also the successor of the B programming language invented by Ken Thompson. C was designed to overcome the problems encountered by BASIC, B, and BPCL programming languages."
}
dec3.onclick = function(){
    dec1.style.backgroundColor = 'white'
    dec2.style.backgroundColor = 'white'
    dec3.style.backgroundColor = 'red'
    dec4.style.backgroundColor = 'white'
    dec5.style.backgroundColor = 'white'

    about.style.backgroundColor = 'yellow';
    about.innerHTML = "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. "
}
dec4.onclick = function(){
    dec1.style.backgroundColor = 'white'
    dec2.style.backgroundColor = 'white'
    dec3.style.backgroundColor = 'white'
    dec4.style.backgroundColor = 'red'
    dec5.style.backgroundColor = 'white'

    about.style.backgroundColor = 'yellow';
    about.innerHTML = "JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games.It works seamlessly alongside HTML and CSS, complementing CSS in formatting HTML elements while providing user interaction, a capability that CSS alone lacks.JavaScript’s widespread applications in web, mobile app, and game development make it a valuable language to learn"
}
dec5.onclick = function(){
    dec1.style.backgroundColor = 'white'
    dec2.style.backgroundColor = 'white'
    dec3.style.backgroundColor = 'white'
    dec4.style.backgroundColor = 'white'
    dec5.style.backgroundColor = 'red'

    about.style.backgroundColor = 'yellow';
    about.innerHTML = "C# tutorial provides basic and advanced concepts of C#. Our C# tutorial is designed for beginners and professionals. C# is a programming language of .Net Framework.Our C# tutorial includes all topics of C# such as first example, control statements, objects and classes, inheritance, constructor, destructor, this, static, sealed, polymorphism, abstraction, abstract class, interface, namespace, encapsulation, properties, indexer, arrays, strings, regex, exception handling, multithreading, File IO, Collections etc."
}

//----------------------------------------------------------

let p_submit = document.getElementById("p-submit");

p_submit.onclick = function(){
    let password = document.getElementById("pass").value;
    if(password.length < 8){
        window.alert("password must contain 8 latters");
    }
    else{
        window.alert("success");
    }
}

//----------------------------------------------------------

box = document.getElementById("box");
text = document.getElementById("text");

box.addEventListener('click',function(){
    text.innerHTML ="You Clicked😒"
})
box.addEventListener('mouseover',function(){
    text.innerHTML ="I Said Don't Touch😡"
})
box.addEventListener('mouseout',function(){
    text.innerHTML ="Don't Touch⚠️"
})

