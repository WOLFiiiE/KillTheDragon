import { Item, magazine } from "./game.js";

function magFind(itemString) {

    
    for(let i=0;i<magazine.length;i++)
    {
        if((itemString.toLowerCase().replace(/\s/g, '')==(magazine[i].itemName).toLowerCase().replace(/\s/g, '')))
        {
            let output=new Item(magazine[i].itemName,magazine[i].type,magazine[i].uses,magazine[i].damage,magazine[i].effect);
            return output;
        }
    }
    
  return null;  
}

/*
############################################################################################################
############################################# WARRIOR ######################################################
############################################################################################################
*/

class Warrior
{
    constructor(name, fileName, health, magic)
    {
        this.name=name;
        this.fileName=fileName;
        this.health=health;
        this.armour=new Item("no armour","Armour",0,0,0);
        this.magic=magic;        
        this.inventory=[];

        
        this.dodge=false;
        Boolean(this.dodge);

        //CONSOLE OUTPUT
        console.log("+ New Warrior Created ---> "+this.name);
        console.log(this);
    }

    useItem(item, dragon) //item class item
    {
        //ATTACK
        if(item.type == "Weapon")
        {
            //CONSOLE OUTPUT
            console.log("+ "+this.name+" used "+item.itemName);
            //DRAGON DODGE CHECK
            if(dragon.dodge)
            {
                console.log("> "+dragon.name+" dodged "+item.itemName+" attack!");
                item.changeUse();
                return;
            }

            dragon.changeHealth(-item.damage);
            item.changeUse();
        }

        //MAGICATTACK
        if(item.type == "MagicAttack")
        {
            //CONSOLE OUTPUT
            console.log("+ "+this.name+" used "+item.itemName);
            //DRAGON DODGE CHECK
            if(dragon.dodge)
            {
                console.log("> "+dragon.name+" dodged "+item.itemName+" attack!");
                item.changeUse();
                return;
            }

            this.changeMagic(-item.effect);
            dragon.changeHealth(-item.damage);
            item.changeUse();
        }

        //HEAL / MAGIC REPLENISH
        if(item.type == "Potion")
        {
            //CONSOLE OUTPUT
            console.log("+ "+this.name+" used "+item.itemName);
            if(item.itemName == "Health Potion")
            {    
                changeHealth(item.effect);
            }

            if(item.itemName == "Magic Potion")
            {
                this.changeMagic(item.effect);
            }
            item.changeUse();
        } 

        //Armour
        if(item.type == "Armour")
        {
            //EQUIPING
            //this.armour=item;
            this.armour=new Item(item.itemName,item.type,item.uses,item.damage,item.effect);
            item.uses=0;
            
            //CONSOLE OUTPUT
            console.log("+ "+this.name+" wore "+item.itemName);
            return;
        } 
    }

    changeHealth (rate)
    {
        //TAKE DAMAGE
        if(rate<0)
        {
            if(this.armour.uses>0)
            {
                this.health+=rate-Math.floor(this.armour.effect*rate);
                this.armour.changeUse();

                //CONSOLE OUTPUT
                console.log("+ "+this.name+" used "+this.armour.itemName+" --- "+(Math.ceil(this.armour.effect*-rate))+"pts BLOCKED");
                console.log("+ "+this.name+" lost "+(rate-Math.floor(this.armour.effect*rate))+" pts --- HEALTH" );                               
            }
            else
            {
                this.health+=rate;    
                // CONSOLE OUTPUT
                console.log("+ "+this.name+" lost "+rate+" pts --- HEALTH" );   
            }
            return;
        }
        //HEAL
        if(rate>0)
        {
            this.health+=rate;
            // CONSOLE OUTPUT
            console.log("+ "+this.name+" healed "+rate+" pts --- HEALTH" );
        }
    }

    changeFileName(rate)
    {
        this.fileName=rate;

        //CONSOLE OUTPUT
        console.log("+ "+this.name+' updated fileName to "'+rate+'"' );
    }

    changeMagic(rate)
    {
        if(rate<0)
        {
            //CONSOLE OUTPUT
            console.log("+ "+this.name+" lost "+rate+" pts --- MAGIC" );
        }

        if(rate>0)
        {
            //CONSOLE OUTPUT
            console.log("+ "+this.name+" gained "+rate+" pts --- MAGIC" );
        }

        this.magic+=rate;
    }

    changeName(customName)
    {
        if(!customName){
           customName="Nameless Warrior" 
        }

        //CONSOLE OUTPUT
        console.log('+ Warrior name changed from "'+this.name+'" to "'+customName+'"');

        this.name=customName;
    }
    
    setDodge(difficulty="normal"){

        let randNUM=Math.floor(Math.random() * 5)+1;

        if(difficulty=="easy")
        {
            if(randNUM!=1)  // 75% chance
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("+ Warrior can dodge !");
                return;
            }
        }

        if(difficulty=="normal")
        {

            if(randNUM==1 || randNUM==3)  // 50% chance
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("+ Warrior can dodge !");
                return;
            }
        }

        if(difficulty=="hard")
        {

            if(randNUM==2 || randNUM==4)   // 50% chance
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("+ Warrior can dodge !");
                return;
            }
        }

        if(difficulty=="veryHard" || difficulty=="hell")
        {
            if(randNUM==3)  // 25% chance
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("+ Warrior can dodge !");
                return;
            }
        }

        //CONSOLE OUTPUT
        this.dodge=0;
        console.log("+ Warrior CANNOT dodge !");
    }

    updateInventory(){
        //CONSOLE OUTPUT
        console.log("+ Warrior Inventory Update")

        if(this.armour.uses==0){
            console.log("   -"+this.armour.itemName+" was removed as ARMOUR");
            this.armour=new Item("No Armour","Armour",0,0,0);
        }

        for(let i=0;i<this.inventory.length;i++)
        {
            if(this.inventory[i].uses==0)
            {
                //CONSOLE OUTPUT
                console.log("   -"+this.inventory[i].itemName+" was removed");
            }
        }

        //FILTER 0 USES IN INVENTORY
        this.inventory=this.inventory.filter((item) => (item.uses!=0));


        //REPLACING OPTIONS

        //REMOVING ALL FIRST
        let itemOptions= document.getElementById('itemSelect');

        while (itemOptions.firstChild) {
            itemOptions.removeChild(itemOptions.lastChild);
        }

        //console.log(this.inventory.length);

        //ADDING NEW OPTIONS TO DOM
        let invLength=this.inventory.length;
        for(let i=0; i<invLength; i++)
        {
            //ADD NEW ITEM OPTION
            // create option using DOM
            const newOption = document.createElement('option');
            newOption.innerHTML='<b id="optName">'+this.inventory[i].itemName+'</b> - DMG: <span id="optDamage">'+this.inventory[i].damage+'</span> USE: <span id="optDamage">'+this.inventory[i].uses+'</span>';
            // and option value
            newOption.setAttribute('value',this.inventory[i].itemName);

            const select = document.querySelector('#itemSelect'); 
            select.appendChild(newOption);
        }

    }

    addItem(newItem){

        ///ADDING TO INVENTORY ARRAY
        let freshItem=magFind(newItem);        //uses string to find item in magazine and returns Item object
        this.inventory.push(freshItem);

        //CONSOLE OUTPUT
        console.log("+ "+this.name+" received "+freshItem.itemName);

        //ADD NEW ITEM OPTION
        // create option using DOM
        const newOption = document.createElement('option');
        newOption.innerHTML='<b id="optName">'+freshItem.itemName+'</b> - DMG: <span id="optDamage">'+freshItem.damage+'</span> USE: <span id="optDamage">'+freshItem.uses+'</span>';
        // and option value
        newOption.setAttribute('value',freshItem.itemName);

        const select = document.querySelector('#itemSelect'); 
        select.appendChild(newOption);
    }

}


/*=========  E X P O R T S  =========*/
export default Warrior;
export {magFind};
