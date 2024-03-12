let val;

// val = document;
// val = document.doctype;
// val = document.head;
// val = document.body;
// val = document.URL;

// val = document.links;
// val = document.links[0];
// val = document.links[3];

// val = document.links[3].id;
// val = document.links[5].id;

// val = document.links[5].className; // display class as string
// val = document.links[5].classList; // display class as DOMTokenList (Array)
// val = document.links[5].classList[0]; // display class from index 0 of array.
// val = document.links[3].classList[0];
// val = document.links[3].classList[1];

// val = document.forms; // HTMLCollection(1) - array type
// val = document.forms[0];
// val = document.forms[0].id; 
// val = document.forms[0].className;
// val = document.forms[0].classList;
// val = document.forms[0].classList[0];
// val = document.forms[0].action;
// val = document.forms[0].method;

// val = document.images; 
// val = document.images[0];
// val = document.images[0].id;
// val = document.images[0].className;
// val = document.images[0].classList[0];
// val = document.images[0].src;
// val = document.images[0].alt;

// val = document.scripts; 
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].type;

// console.log(val);




// =>Change Styling
document.getElementById('tasktitle').style.backgroundColor = "green";
document.getElementById('tasktitle').style.color = "blue";
document.getElementById('tasktitle').style.padding = "5px";

// => Change Content
//document.getElementById('tasktitle').textContent = "My Job"; // html code can't write in here
//document.getElementById('tasktitle').innerText = "My Tasks"; // html code can't write in here
document.getElementById('tasktitle').innerHTML = "<span style='color:yellow;'>My Todo List</span>";
// 5DO