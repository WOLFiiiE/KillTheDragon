import Warrior from "./warrior.js";
import {DragonAttack, attacksArray, Dragon} from "./dragon.js";


/*
############################################################################################################
############################################# GAME #######################################################
############################################################################################################
*/

//ITEM CLASS

class Item
{
    constructor(itemName, type, uses, damage, effect){
        this.itemName=itemName;
        this.type=type;
        this.uses=uses;
        this.damage=damage; //Weapons
        this.effect=effect; //Potions and Armour
    }

    
    changeUse() {
        this.uses--;
    }

    changeDamagne(rate) {
        this.damage+=rate;
    }

}

//ITEM MAGAZINE

const  magazine=[];

//----- itemName, type, uses, damage, effect

magazine[0]=new Item("Stone","Weapon",1,10,0);
magazine[1]=new Item("Spear","Weapon",5,15,0);
magazine[2]=new Item("Sword","Weapon",5,30,0);
magazine[3]=new Item("Crossbow","Weapon",7,20,0);
magazine[4]=new Item("Iron Axe","Weapon",3,60,0);
magazine[5]=new Item("Throwing Daggers","Weapon", 10,20,0);
magazine[6]=new Item("Wooden Armour","Armour",10,0,0.1);
magazine[7]=new Item("Iron Armour","Armour",10,0,0.3);
magazine[8]=new Item("Diamond Armour","Armour",5,0,0.5);
magazine[9]=new Item("Dragonskin Armour", "Armour",3,0,0.75);
magazine[10]=new Item("Health Potion","Potion",1,0,50);
magazine[11]=new Item("Magic Potion","Potion",1,0,80);
magazine[12]=new Item("Halberd","Weapon",5,30,0);
magazine[13]=new Item("Crystal Spear","Weapon",7,40,0);
magazine[14]=new Item("Spirit Blast","MagicAttack",2,50,70);
magazine[15]=new Item("Dragonsoul Attack","MagicAttack",1,70,100);
magazine[16]=new Item("Lightning Bolt","MagicAttack",1,70,100);
magazine[17]=new Item("Golden Wrath","MagicAttack",1,70,100);
magazine[18]=new Item("Shadow Smash","MagicAttack",1,70,100);
magazine[19]=new Item("Crimson Spiral","MagicAttack",1,70,100);
magazine[20]=new Item("Golden Sword","Weapon",7,40,0);
magazine[21]=new Item("Imperial Armour",'Armour',7,0,0.4);
magazine[22]=new Item("Mace","Weapon",3,50,0);

//magazine[22]=new Item("Iron Shield",10,0,0,0.1);




/*
##################################################
##################   GAME CLASS ##################
##################################################
*/


class Game
{

}


/*=========  E X P O R T S  =========*/
export default Game;
export {magazine, Item};
