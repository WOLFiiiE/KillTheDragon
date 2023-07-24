import { attacksArray, Dragon } from "./dragon.js";
import  Warrior from "./warrior.js";
import {Item ,magazine} from "./game.js";

// ++++++++++++++++ wDECLARATION ++++++++++++++++++

let wName;
let wHealth;
let wMagic;

var warriorCreated;

function warriorDeclaration(wSelected)
{
    //CONSOLE OUTPUT
    console.log("##################################################################");
    console.log("+ "+wSelected+" was Selected as WARRIOR!");
    console.log("##################################################################");

    warriorCreated=null;
    wHealth = 200;
    wMagic = 200;

    if(!wName){
        wName = wSelected;
    }

    //CREATE WARRIOR OBJECT
    warriorCreated= new Warrior(wName, 'no filename', wHealth, wMagic);

    warriorCreated.addItem(magazine[11].itemName);      //Magic Potion
    warriorCreated.addItem(magazine[10].itemName);      //Health Potion
    warriorCreated.addItem(magazine[10].itemName);      //Health Potion
    warriorCreated.addItem(magazine[14].itemName);      //Spirit Blast
    warriorCreated.addItem(magazine[7].itemName);       //Iron Armour

    //DOM OUTPUT
    // Get all the warriors
    const elements = document.getElementById('wOptions').children;

    // Remove "wSelected" class from all elements
    for(let i=0;i<elements.length;i++)
    {
        elements[i].classList.remove('wSelected');
    }

    if(wSelected == "Crimson Sorcerer")
    {
        warriorCreated.changeFileName("../visual/redWarrior.gif")
        warriorCreated.changeHealth(50);
        
        warriorCreated.addItem(magazine[13].itemName);      //Spear
        warriorCreated.addItem(magazine[12].itemName);      //Halberd
        warriorCreated.addItem(magazine[15].itemName);      //Magic Attack
        warriorCreated.addItem(magazine[19].itemName);      //Special Magic Attack

        //DOM OUTPUT
        elements[0].classList.add('wSelected');

    }

    if(wSelected == "Sacred Knight")
    {
        warriorCreated.changeFileName("../visual/blueWarrior.gif")
        warriorCreated.changeHealth(100);
        
        warriorCreated.addItem(magazine[4].itemName);       //Iron Axe
        warriorCreated.addItem(magazine[2].itemName);       //Sword
        warriorCreated.addItem(magazine[16].itemName);      //Special Magic Attack

        //DOM OUTPUT
        elements[1].classList.add('wSelected');

    }

    if(wSelected == "Imperial Defender")
    {
        warriorCreated.changeFileName("../visual/goldWarrior.gif")
        
        warriorCreated.addItem(magazine[7].itemName);       //Gold Armour
        warriorCreated.addItem(magazine[20].itemName);      //Sword
        warriorCreated.addItem(magazine[2].itemName);       //Sword
        warriorCreated.addItem(magazine[17].itemName);      //Special Magic Attack

        //DOM OUTPUT
        elements[2].classList.add('wSelected');

    }

    if(wSelected == "Dark Templar")
    {
        warriorCreated.changeFileName("../visual/blackWarrior.gif")
        
        warriorCreated.addItem(magazine[2].itemName);       //Sword
        warriorCreated.addItem(magazine[3].itemName);      //Crossbow
        warriorCreated.addItem(magazine[5].itemName);       //Daggers
        warriorCreated.addItem(magazine[22].itemName);       //Mace
        warriorCreated.addItem(magazine[18].itemName);      //Special Magic Attack

        //DOM OUTPUT
        elements[3].classList.add('wSelected');

    }

    //DOM OUTPUT
   let image= document.getElementById('wImage');
   image.src=warriorCreated.fileName;

   if(!image){
    alert("no uodate for image");
   }
}

function wCustomNameDeclaration()
{
    wName=document.getElementById('wNameSpace').value;

    //CONSOLE OUTPUT
    console.log('+ WARRIOR custom name is "'+wName+'"');

    if(warriorCreated){
        warriorCreated.changeName(wName);
    }

    //CHEAT CODES FUNCTIONS HERE

}

//++++++++++ dDECLARATION

let dName;
let dFileName;
let dHealth;
let specialAttk

var dragonCreated;

function dragonDeclaration(dSelected)
{
    //CONSOLE OUTPUT
    console.log("##################################################################");
    console.log("> "+dSelected+" was Selected as DRAGON!");
    console.log("##################################################################");

    dragonCreated=null;
    dHealth = 1000;

    //DOM OUTPUT
    // Get all the warriors
    const elements = document.getElementById('dOptions').children;

    // Remove "wSelected" class from all elements
    for(let i=0;i<elements.length;i++)
    {
        elements[i].classList.remove('dSelected');
    }

    if(!dName){
        dName = dSelected;
    }

    if(dSelected=="Blood Dragon")
    {
        dFileName="../visual/redDragon.gif";
        specialAttk="Blood Storm";

        //DOM OUTPUT
        elements[0].classList.add('dSelected');
    }

    if(dSelected=="Soul Dragon")
    {
        dFileName="../visual/blueDragon.gif";
        specialAttk="Demon Soul Bomb";

        //DOM OUTPUT
        elements[1].classList.add('dSelected');
    }

    if(dSelected=="Death Dragon")
    {
        dFileName="../visual/greenDragon.gif";
        specialAttk="Death Nightmare Annihilation";

        //DOM OUTPUT
        elements[2].classList.add('dSelected');
    }  

    if(dSelected=="Shadow Dragon")
    {
        dFileName="../visual/blackDragon.gif";
        specialAttk="Wraith of the Shadows";

        //DOM OUTPUT
        elements[3].classList.add('dSelected');
    }    

    //DOM OUTPUT
    document.getElementById('dImage').src=dFileName;

    //CREATE DRAGON OBJECT
    dragonCreated= new Dragon(dName, dFileName, dHealth, specialAttk);
    
}

function dCustomNameDeclaration()
{
    dName=document.getElementById('dNameSpace').value;

    //CONSOLE OUTPUT
    console.log('> DRAGON custom name is "'+dName+'"');

    if(dragonCreated){
        dragonCreated.changeName(dName);
    }

    //CHEAT CODE FUNCTIONS HERE (BELOW)

}

// ++++++++++++ SET DIFFICULTY

var selectedDifficulty;

function setDifficulty(){
    selectedDifficulty=document.getElementById('difficultySpace').value;

    //CONSOLE OUTPUT
    console.log("##################################################################");
    console.log('$ DIFFICULTY is set to "'+selectedDifficulty+'"');
    console.log("##################################################################");
    
}

// ######################### FUNCTIONS FOR DECLARATIONS ######################### 

//WARRIOR DECLARATION
//NAME
document.getElementById('wNameButton').addEventListener('click',wCustomNameDeclaration);

//SELECTION
let warriors=["Crimson Sorcerer","Sacred Knight","Imperial Defender","Dark Templar"];
let warriorOptions = document.getElementById('wOptions').children;

// Attach the event listener to each element
for (let i = 0; i < 4; i++) {
    warriorOptions[i].addEventListener('click', function() {
      warriorDeclaration(warriors[i]); 
    });
}

//DRAGON DECLARATION
//NAME
document.getElementById('dNameButton').addEventListener('click',dCustomNameDeclaration);

//SELECTION
let dragons=["Blood Dragon","Soul Dragon","Death Dragon","Shadow Dragon"];
let dragonOptions = document.getElementById('dOptions').children;

// Attach the event listener to each element
for (let j = 0; j < 4; j++) {
    dragonOptions[j].addEventListener('click', function() {
      dragonDeclaration(dragons[j]); 
    });
}

//DIFFICULTY DECLARATION

document.getElementById('difficultyButton').addEventListener('click',setDifficulty);







//############## EXPORTS #################
export default {warriorCreated};
export {dragonCreated};