const box = document.getElementsByClassName("box")[0];
console.log("select", box);

box.className = "red";
box.classList.add("red");
// box.className = "blue";
// box.classList.add("blue");
box.className = "border";
box.classList.add("border");

const btn1 = document.getElementById("btn1");
console.log(btn1);

btn1.addEventListener("click", () => {
  console.log("clicked");

  if (box.classList.contains("red")) {
    box.classList.remove("red");
  } else {
    box.classList.add("red");
  }
});
console.log(btn1);

const btn2 = document.getElementById("btn2");
console.log(btn2);

btn2.addEventListener("click", () => {
  console.log("clicked");

  if (box.classList.contains("blue")) {
    box.classList.remove("blue");
  } else {
    box.classList.add("blue");
  }
});
console.log(btn2);

const btn3 = document.getElementById("btn3");
console.log(btn3);

btn3.addEventListener("click", () => {
  console.log("clicked");
  // box.style.backgroundColor = "green";

  if (box.classList.contains("green")) {
    box.classList.remove("green");
  } else {
    box.classList.add("green");
  }
});
console.log(btn3);

const btn4 = document.getElementById("btn4");
console.log(btn4);

btn4.addEventListener("click", () => {
  console.log("clicked");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  //   if (box.classList.contains("random")) {
  //     box.classList.remove("random");
  //   } else {
  //     box.classList.add("random");
  //   }
});
console.log(btn4);

// const boxColor = document.getElementById("box");

// const greenbtn = document.getElementById("green");
// const redbtn = document.getElementById("red");

// redbtn.addEventListener("click", () => {
//   boxColor.style.backgroundColor = "blue";
// });

// greenbtn.addEventListener("click", () => {
//   boxColor.style.backgroundColor = "green";
// });

// const randFunction = () => {};

// randBtn.addEventListener("click", () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   console.log(r);

//   box.style.backgroundColor = `${r}, ${g}, ${b}`;
// });
