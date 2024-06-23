interface ICharacter {
    name: string;
    weapon?: string;
    health?: number;
    level?: number;
    introduce: () => void; 
    //introduce : Function<>() => void;

}

interface IWarrior extends ICharacter {
    weapon: string;
    attack: () => void;
}

interface IWizard extends ICharacter {
    spell: string;
    castSpell: () => void;
}

// TWO OPTIONS TO ASSIGN TYPE

const character : ICharacter = { // OPTION 1 (: interface)
    name: '',
    health: 100,
    level: 1,
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
    }

}
// HTML... Element -  типизация HTML - элемента, вместо троеточия надо писать имя тега
const warrior = Object.create(character) as IWarrior; // (as interface) OPTION 2 { ...character }
warrior.name = 'Warrior';
warrior.weapon = 'Sword';
warrior.health = 100;
warrior.level = 5;
warrior.attack = function() {
    console.log(`I am ${this.name} and I am attacking with my ${this.weapon}!`);
}



const wizard = Object.create(character);
wizard.name = 'Wizard';
wizard.spell = 'Skadush';
wizard.health = 60;
wizard.level = 7;
wizard.castSpell = function() {
    console.log(`I am ${this.name} and I am casting the ${this.spell} spell!`);
}

warrior.introduce();
wizard.introduce();

warrior.attack();

wizard.castSpell();