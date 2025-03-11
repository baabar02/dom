// const h1 = document.getElementsByTagName("h1")[0];
// console.log("select", h1);
// const randomToo = Math.random() * 10;
// console.log(randomToo);

// h1.innerText = "sain uu Pinecone";
// h1.className = "title";
// h1.className +=  " border";
// h1.classList.add("title");
// h1.classList.add("border");
// h1.classList.add("add");

// h1.classList.toggle("add");

// h1.innerHTML = "<p> Sain uu</p>";
// h1.style.color = "green";
// h1.style.fontSize = "20px";
// h1.style.backgroundColor = "yellow";

// console.log("selected element", h1);

const h2 = document.getElementById("garchig");
h2.textContent = "Welcome";
console.log("garchig", h2);

const h3 = document.getElementsByClassName("subtitle");
console.log("se", h3);

const el1 = document.querySelectorAll(".subtitle");
console.log("se", el1);

// el1[0].innerText = "Welcome Pinecone-3";
// el1[1].innerText = "Welcome Pinecone-3";
const textContent = ["Pinecone", "Google", "Facebook"];

for (let i = 0; i < el1.length; i++) {
  //   el1[i].innerText = "Pinecone" + (i + 1);
  //   el1[i].innerText = `Pinecone ${i + 1}`;
  el1[i].innerText = textContent[i];
}

const box1 = document.getElementById("box1");

const p = document.createElement("p");
p.innerText = "lorem";
p.style.color = "red";

const p2 = "<p>lorem text-2 </p> ";

// box1.appendChild(p);
box1.innerHTML = '<p class = "title" >lorem text-2 </p> ';

//event
const btn = document.getElementById("btn");
const h1 = document.querySelector('h1');
let toggle1 = 0 ;
console.log(btn);

// btn.addEventListener("click", () => {
//   console.log("clicked");
//   if (toggle1 % 2 === 0) {
//     h1.classList.toggle("title");
//   } else {
//     h1.classList.toggle("border");
//   }
//  toggle1++;
// });



// btn.addEventListener("click", () => {
//   console.log("clicked");
//   h1.classList.toggle("title");
//   h1.classList.toggle("border");
// });


btn.addEventListener('click', () => {
  console.log("clicked");
  if (h1.classList.contains("title")) {
    h1.classList.remove("title");
    h1.classList.remove("border");
  } else {
    h1.classList.add("title");
    h1.classList.add("border");
  }
  
});