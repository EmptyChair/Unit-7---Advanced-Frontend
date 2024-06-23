// TWO OPTIONS TO ASSIGN TYPE
var character = {
    name: '',
    health: 100,
    level: 1,
    introduce: function () {
        console.log("Hello, my name is ".concat(this.name, ", I am at level ").concat(this.level, ", and I have ").concat(this.health, " health."));
    }
};
// HTML... Element -  типизация HTML - элемента, вместо троеточия надо писать имя тега
var warrior = Object.create(character); // (as interface) OPTION 2 { ...character }
warrior.name = 'Warrior';
warrior.weapon = 'Sword';
warrior.health = 100;
warrior.level = 5;
warrior.attack = function () {
    console.log("I am ".concat(this.name, " and I am attacking with my ").concat(this.weapon, "!"));
};
var wizard = Object.create(character);
wizard.name = 'Wizard';
wizard.spell = 'Skadush';
wizard.health = 60;
wizard.level = 7;
wizard.castSpell = function () {
    console.log("I am ".concat(this.name, " and I am casting the ").concat(this.spell, " spell!"));
};
warrior.introduce();
wizard.introduce();
warrior.attack();
wizard.castSpell();
