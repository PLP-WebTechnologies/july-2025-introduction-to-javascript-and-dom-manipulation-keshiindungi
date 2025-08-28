let userName = prompt("What's your name?");
let userAge = Number(prompt("How old are you?"));


let ageMessage;
if (userAge >= 18) {
  ageMessage = `Hi ${userName}, you're an adult.`;
} else if (userAge > 0) {
  ageMessage = `Hi ${userName}, you're still a minor.`;
} else {
  ageMessage = `Hi ${userName}, please enter a valid age.`;
}

console.log(ageMessage);


function calculateTotal(price, quantity) {
  return price * quantity;
}

function greet(name) {
  return `Hello, ${name}! Welcome to the project.`;
}


console.log(calculateTotal(10, 3)); 
console.log(greet(userName));


let colors = ["Red", "Blue", "Green", "Yellow"];

for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}

let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}


document.getElementById("checkAgeBtn").addEventListener("click", function() {
  document.getElementById("ageResult").innerText = ageMessage;
});

document.getElementById("calcBtn").addEventListener("click", function() {
  let total = calculateTotal(15, 4); 
  document.getElementById("calcResult").innerText = "Total price = $" + total;
});

document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("colorList");
  list.innerHTML = ""; 
  colors.forEach(function(color) {
    let li = document.createElement("li");
    li.innerText = color;
    list.appendChild(li);
  });
});


document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("secret").classList.toggle("hidden");
});
