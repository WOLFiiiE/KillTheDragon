/*
############################################################################################################
############################################# DRAGON #######################################################
############################################################################################################
*/

class DragonAttack
{
    constructor(attackName, damage)
    {
        this.attackName=attackName;
        this.damage=damage;
    }
}


//++++++++++++++ DRAGON ATTACKS
var attacksArray=[];

attacksArray[1]=new DragonAttack("Tail Hammer",20);
attacksArray[2]=new DragonAttack("Dragon Rage",20);
attacksArray[3]=new DragonAttack("Scale Storm",15);
attacksArray[4]=new DragonAttack("Dragon Breath",20);
attacksArray[5]=new DragonAttack("Claw Swing",10);
attacksArray[6]=new DragonAttack("Wing SonicWave",15);

class Dragon
{
    constructor(name, fileName, health, specialAttack) //just a string for specialAttack
    {
        this.name=name;
        this.fileName=fileName;
        this.health=health;
        this.specialAttack=new DragonAttack(specialAttack,30);
        this.dodge=false;
        Boolean(this.dodge);
        
        //CONSOLE OUTPUT
        console.log("> New Dragon Created ---> "+this.name);
        console.log(this);
    }

    attack (warrior, difficulty)
    {
        attacksArray[0]=this.specialAttack;
        attacksArray[7]=this.specialAttack;

        //RANDOM ATTACK
        var randAttack=attacksArray[Math.floor(Math.random() * 8)];


        //WARRIOR DODGE CHECK
        if(warrior.dodge)
        {
            //CONSOLE OUTPUT
            console.log("> "+this.name+" used "+randAttack.attackName);
            console.log("+ "+warrior.name+" dodged "+randAttack.attackName);
            return;
        }

        if(difficulty=="easy")
        {
            randAttack=attacksArray[Math.floor(Math.random() * 7)];

            //CONSOLE OUTPUT
            console.log("> "+this.name+" used "+randAttack.attackName);

            warrior.changeHealth(-(randAttack.damage));
        }

        //CONSOLE OUTPUT
        console.log("> "+this.name+" used "+randAttack.attackName);

        if(difficulty=="normal")
        {
            warrior.changeHealth(-(randAttack.damage));
        }

        if(difficulty=="hard")
        {

            warrior.changeHealth(-(randAttack.damage+5));
        }

        if(difficulty=="veryHard" || difficulty=="hell")
        {
            warrior.changeHealth(-(randAttack.damage+10));
        }
    }

    changeHealth(rate)
    {
        //TAKE DAMAGE
        if(rate<0)
        {
            this.health+=rate;    
            //CONSOLE OUTPUT
            console.log("> "+this.name+" lost "+rate+" pts --- HEALTH" );   
        }
        //HEAL
        if(rate>0)
        {
            this.health+=rate;
            //CONSOLE OUTPUT
            console.log("> "+this.name+" healed "+rate+" pts --- HEALTH" );
        }
    }

    changeName(customName)
    {
        if(!customName){
            customName="Nameless Beast"; 
         }


        //CONSOLE OUTPUT
        console.log('> Dragon name changed from "'+this.name+'" to "'+customName+'"');

        this.name=customName;
    }

    setDodge(difficulty="normal"){

        let randNUM=Math.floor(Math.random() * 5);

        if(difficulty=="easy")  // 20% chance
        {
            if(randNUM==1)
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("> Dragon can dodge !");
                return;
            }
        }

        if(difficulty=="normal")  // 40% chance
        {

            if(randNUM==1 || randNUM==3)
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("> Dragon can dodge !");
                return;
            }
        }

        if(difficulty=="hard")  // 60% chance
        {

            if(randNUM==2 || randNUM==4 || randNUM==0)
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("> Dragon can dodge !");
                return;
            }
        }

        if(difficulty=="veryHard" || difficulty=="hell")   // 80% chance
        {
            if(randNUM!=3)
            {
                this.dodge=1;
                //CONSOLE OUTPUT
                console.log("> Dragon can dodge !");
                return;
            }
        }
        //CONSOLE OUTPUT
        this.dodge=0;
        console.log("> Dragon CANNOT dodge !");
        return;
    }

}

/*=========  E X P O R T S  =========*/
export default Dragon; 
export { DragonAttack, Dragon, attacksArray};