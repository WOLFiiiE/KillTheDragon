import Warrior from "/js/warrior.js";
import { magazine } from "/js/game.js";
import Dragon from "./js/dragon.js";
import { DragonAttack } from "./js/dragon.js";
import { magFind } from "./js/warrior.js";


//Warrior test

let warrior=new Warrior('MARYAM','maryam.jpg',200,200,magazine);

warrior.changeName("LITTLE GIRLIE");

console.log(warrior);
warrior.setDodge();

//warrior.useItem(magazine[8];'nothing');

//Dragon test
console.log("###################### DRAGON #################################")

let dragon=new Dragon('CALEB','caleb.jpg',1000,"Poop on Chest");

console.log(dragon.specialAttack.attackName);

dragon.attack(warrior,"normal");
console.log(warrior);

dragon.setDodge("veryHard");

warrior.useItem(warrior.inventory[21],dragon);
warrior.useItem(warrior.inventory[0],dragon);

console.log(warrior.armour);

dragon.attack(warrior,"normal");
console.log(warrior);
console.log(warrior.armour);
warrior.armour.uses=0;
console.log(warrior.armour);
dragon.attack(warrior,"veryHard");

dragon.changeName("LORD CAL3B");
console.log(dragon);

dragon.setDodge("easy");
warrior.useItem(warrior.inventory[16],dragon);

console.log("######################################################");
console.log("############# TESTING UPDATE INVENTORY ###############");
console.log("######################################################");


console.log(magFind("stone"));

warrior.useItem(warrior.inventory[3],dragon);
warrior.useItem(warrior.inventory[5],dragon);
warrior.addItem("imPerialarmour")

warrior.updateInventory();

console.log(warrior.inventory.length);

console.log("######################################################");

for(let i=0;i<magazine.length;i++) {
 console.log(magazine[i]);
}

