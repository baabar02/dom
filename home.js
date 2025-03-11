
const box = document.getElementsByClassName("box")[0];
console.log('select', box);


box.className = "red";
box.classList.add("red");
box.className = "border";
box.classList.add("border");

// box.className = "blue";
// box.classList.add("blue");
// box.className = "green";
// box.classList.add("green");

// box.style.backgroundColor = " ";

const btn1 = document.getElementById("btn1")
console.log(btn1);


btn1.addEventListener('click', () => {
    console.log("clicked");
    if (box.classList.contains("red")) {
      box.classList.remove("red")
    } else {
      box.classList.add("red");
    }    
  }); 
console.log(btn1);
  

const btn2 = document.getElementById("btn2")
console.log(btn2);


btn2.addEventListener('click', () => {
    console.log("clicked");
    if (box.classList.contains("blue")) {
      box.classList.remove("blue")
    } else {
      box.classList.add("blue");
    }    
  }); 
console.log(btn2);

const btn3 = document.getElementById("btn3")
console.log(btn3);

btn3.addEventListener('click', () => {
    console.log("clicked");
    if (box.classList.contains("green")) {
      box.classList.remove("green")
    } else {
      box.classList.add("green");
    }    
  }); 
console.log(btn3);


const btn4 = document.getElementById("btn4")
console.log(btn4);


btn4.addEventListener('click', () => {
    console.log("clicked");

//    const randomColor = Math.random() * 10;
//    random.computedStyleMap = randomColor;
   
    if (box.classList.contains("random")) {
      box.classList.remove("random")
    } else {
      box.classList.add("random");
    }    
  }); 
console.log(btn4);

