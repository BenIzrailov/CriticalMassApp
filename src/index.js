import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const show_spicy = document.getElementById("spicy_check");

//returns startes
function setStarters(){ 
let start = menuItems
  .filter((starter) => starter.type === "starters")
  .sort(function (a, b) {
    return a.menuOrder - b.menuOrder;
  })
  .map((starter) => {
    if (starter.spicy === true) {
      return `<p>
      <span class = spicy_menu> 
      <span> ${starter.name}</span> 
      <span class = "price"> \\$${starter.price.toFixed(2)} </span> 
      </span>
      </p>`;
    } else {
      return `<p>
    <span> ${starter.name}</span>
    <span class="price"> \\$${starter.price.toFixed(2)} </span>
    </p>`;
    }
  })
  .join("");

  return start;
}

//returns pasta items
function setPasta(){  

let pasta = menuItems
  .filter((pasta) => pasta.type === "pasta")
  .sort(function (a, b) {
    return a.menuOrder - b.menuOrder;
  })
  .map((pasta) => {
    if (pasta.spicy === true) {
      return `<p>
    <span class = spicy_menu> 
    <span>${pasta.name} </span>
    <span class = "price">\\$${pasta.price.toFixed(2)} </span>
    </span>
    </p>`;
    } else {
      return `<p>
    <span>${pasta.name}</span>
    <span class="price">\\$${pasta.price.toFixed(2)}</span>
    </p>`;
    }
  })
  .join("");

  return pasta;
}

function setPizza(){  

//returns pizza items
let pizza = menuItems
  .filter((pizza) => {
    //Filters out entry based on spicyness, unable to get list to rerender after checkbox checked
    if (show_spicy.checked == false){
    return pizza.type === "pizza" && pizza.spicy === false;
    }
    else{
      return pizza.type === "pizza"
    }
    })
  .sort(function (a, b) {
    return a.menuOrder - b.menuOrder;
  })
  .map((pizza) => {
    if (pizza.spicy === true) {
      return `<p>
    <span class = spicy_menu>
    <span> ${pizza.name}</span>
    <span class="price"> \\$${pizza.price.toFixed(2)} </span>
     </span>
    </p>`;
    } else {
      return `<p>
     <span>${pizza.name}</span> 
     <span class="price">\\$${pizza.price.toFixed(2)} </p> </span>
    </p>`;
    }
  })
  .join("");

  return pizza
}


document.getElementById("starters").insertAdjacentHTML("afterend", setStarters());
document.getElementById("pasta").insertAdjacentHTML("afterend", setPasta());
document.getElementById("pizza").insertAdjacentHTML("afterend", setPizza());


console.log(menuItems);
