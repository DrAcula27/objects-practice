/*********** MANIPULATE AN ARRAY OF OBJECTS EXERCISE ***********/

let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]

// Prompt 1: double the hitpoints of everyone in the party.
const doubleHitpoints = () => {
    party.forEach(member => {
        member.hitpoints = 2 * member.hitpoints;
    });
}
doubleHitpoints();
// console.log(party);

// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp.
const takeDamage = (memberName, hp) => {
    party.forEach(member => {
        if (memberName == member.name) {
            member.hitpoints = member.hitpoints - hp;
        }
    });
}
takeDamage("Timothy", 5);
// console.log(party);

// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it's type to jellyfish.
const changeCompanionToJellyfish = memberName => {
    party.forEach(member => {
        if (memberName == member.name) {
            member.companion.type = "jellyfish";
        }
    });
}
changeCompanionToJellyfish("Sarah");
// console.log(party);

// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
const increaseHitpoints = (memberName, hp, item) => {
    party.forEach(member => {
        if (memberName = member.name) {
            member.hitpoints = member.hitpoints + hp;
            const index = member.belongings.indexOf(item);
            if (index > -1) { // only splice array when item is found
                member.belongings.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    });
}
increaseHitpoints("Timothy", 20, "potion");
// console.log(party);

// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it into Timothy's belongings.
const stealItem = (memberSteal, memberLose, item) => {
    party.forEach(member => {
        if (memberSteal == member.name) {
            member.belongings.push(item);
        }
        if (memberLose == member.name) {
            const index = member.belongings.indexOf(item);
            if (index > -1) { // only splice array when item is found
                member.belongings.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    });
}
stealItem("Timothy", "Joline", "bread");
// console.log(party);

// Prompt 6: Joline got upset and left the party. Take her out of the array.
const removeMember = memberName => {
    party.forEach(member => {
        if (memberName == member.name) {
            party.splice(member, 1);
        }
    });
}
removeMember("Joline");
// console.log(party);

// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const addNewMember = newMember => {
    party.push(newMember);
}
addNewMember({name: "Marvin", hitpoints: 42, belongings: [], companion: {name: "Arthur", type: "human"}});
// console.log(party);

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
const addGold = amountOfGold => {
    party.forEach(member => {
        member.gold = Math.round(amountOfGold / party.length);
    });
}
addGold(200);
// console.log(party);

// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 
const changeCompanion = memberName => {
    party.forEach(member => {
        if (memberName == member.name) {
            member.gold = member.gold - 10;
            member.companion.type = "bear";
        }
    });
}
changeCompanion("Sarah");
// console.log(party);

// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 
const makeWeaponOld = (memberName, weaponName) => {
    party.forEach(member => {
        if (memberName == member.name) {
            member.belongings.forEach(belonging => {
                if (belonging == weaponName) {
                    const index = member.belongings.indexOf(belonging);
                    member.belongings.splice(index, 1); // 2nd parameter means remove one item only
                    member.belongings.push("rusty " + weaponName);
                }
            });
        }
    });
}
makeWeaponOld("Timothy", "sword");
// console.log(party);

// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.
const setLeader = memberName => {
    party.forEach(member => {
        if (memberName == member.name) {
            member.leader = true;
        } else {
            member.leader = false;
        }
    });
}
setLeader("Marvin");
console.log(party);