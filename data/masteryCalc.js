let DATA = require('data/melvorData.json');
let MASTERIES = DATA['masteries'];
let EXPERIENCE = DATA['experience'];
let ITEMS = DATA['items'];
let SKILLS = DATA['skills'];
let SKILLS_TO_MASTER = ['3', '5', '13', '14', '15', '19'];
let INTERVALS = { '3': 2.4, '5': 1.6, '13': 1.2, '14': 1.5, '15': 1.6, '19': 1.6 };
let PRESERVATION = { '3': 0.2, '5': 0.3, '13': 0.1, '14': 0.15, '15': 0.65, '19': 0.15 };

class Player {
    constructor() {
        this.skills = {};
    }
    loadPlayer() {
        for (var skillId in MASTERIES) {
            // initialize skill and load attributes
            let skillData = SKILLS[skillId];
            var skill = new Skill();
            skill.skillId = skillId;
            skill.name = skillData['name'].toLowerCase();
            skill.pool = MASTERIES[skillId]['pool'];
            if (SKILLS_TO_MASTER.includes(skillId)) {
                skill.preservation = PRESERVATION[skillId];
                skill.interval = INTERVALS[skillId];
                skill.master = true;
            }

            //loop through skill abilities and load ability attributes
            for (const [i, xp] of MASTERIES[skillId]['xp'].entries()) {
                let ability = new Ability()
                ability.name = skillData['names'][i]
                ability.xp = xp
                ability.parentSkill = skill
                if (SKILLS_TO_MASTER.includes(skillId)) {
                    let ingredients = skillData['ingredients'][i];
                    // loop through ability ingredients required and load data
                    for (var j = 0; j < ingredients.length; j++) {
                        let ingredientId = ingredients[j][0];
                        ability.ingredients.push({
                            'id': ingredientId,
                            'name': ITEMS[ingredientId]['name'],
                            'image': ITEMS[ingredientId]['media'],
                            'owned': 0,
                            'required': ingredients[j][1]
                        });
                    }
                }
                ability.getLevel();
                skill.abilities[ability.name] = ability;
            }
            skill.getMastery();
            this.skills[skill.name] = skill;
        }

        for (var itemId in ITEMS) {
            for (const [skillName, skill] of Object.entries(this.skills)) {
                var current = skill.abilities[ITEMS[itemId].name.toLowerCase().replace(' iv', '')]
                if (current != undefined) {
                    current.image = ITEMS[itemId].media;
                }
            }
        }
    }
    loadData(masteries, bank) {
        for (const [skillName, skill] of Object.entries(this.skills)) {
            //update skill pool
            skill.pool = masteries[skill.skillId]['pool'];

            //loop through all abilities
            const i = 0
            for (const [abilityName, ability] of Object.entries(skill.abilities)) {
                //let ability = skill.abilities[abilityName];

                //update ability xp, level, xpToLevel
                ability.xp = masteries[skill.skillId]['xp'][i]
                ability.getLevel()
                i++

                //update amount of ingredients in bank
                let ingredients = ability.ingredients
                for (var j = 0; j < ingredients.length; j++) {
                    let ingredient = ingredients[j];
                    for (var bankPos in bank) {
                        let bankItem = bank[bankPos]
                        if (bankItem['id'] === ingredient['id']) {
                            ingredient['owned'] = bankItem['qty'];
                            break;
                        }
                    }
                }
            }
        }
    }
}

class Skill {
    constructor() {
        this.skillId = '';
        this.name = '';
        this.pool = 0.0;
        this.abilities = {};
        this.preservation = 0.0;
        this.interval = 0.0;
        this.master = false;
    }
    getMastery() {
        this.totalMastery = Object.keys(this.abilities).length * 99;
        this.currentMastery = 0;
        for (const [abilityName, ability] of Object.entries(this.abilities)) {
            this.currentMastery += ability.level
        }
    }
    xpCalc(ability) {
        let totalAbilities = Object.keys(this.abilities).length;
        //console.log(totalAbilities)

        // .07 for ring, .03 for pet, .05 for 10% pool, .05 for firemaking pool, .0225 for firemaking logs

        return (
            (1 + totalAbilities) * this.currentMastery / this.totalMastery + ability.level * totalAbilities / 10 * this.interval * .5 * 1.2225
        )
    }
}

class Ability {
    constructor() {
        this.name = '';
        this.xp = 0;
        this.parentSkill = '';
        this.xpToLevel = 0;
        this.ingredients = [];
        this.image = '';
        this.xpEarned = 0;
        this.timeToLevel = 0;
        this.ingredientsUsed = [];
        this.poolXpEarned = 0;
    }
    getLevel() {
        for (var level in EXPERIENCE) {
            if (this.xp >= 13034431) {
                this.level = 99;
                break;
            } else if (this.xp >= EXPERIENCE[level]) {
                ;
            } else {
                this.level = parseInt(level) - 1;
                this.xpToLevel = EXPERIENCE[level] - this.xp;
                break;
            }
        }
    }
    simulate(goal) {
        console.log(this.parentSkill);
        let timeList = [];
        let itemUsedList = [];
        let xpList = [];
        let i = 0;
        for (let i = 0; i < 100; i++) {
            //clone ability
            let simAbilityCopy = new Ability();
            simAbilityCopy.name = this.name;
            simAbilityCopy.xp = this.xp;
            simAbilityCopy.getLevel();
            simAbilityCopy.parentSkill = this.parentSkill;

            let time = 0;
            let itemsUsed = 0;
            let simLevel = this.level;
            let simXpRequired = this.xpToLevel;
            let simXpEarned = this.parentSkill.xpCalc(simAbilityCopy);
            let basePreserve = this.parentSkill.preservation;
            let preserve = basePreserve;
            if (this.parentSkill.name == 'crafting' || this.parentSkill.name == 'fletching' || this.parentSkill.name == 'herblore') {
                preserve = basePreserve + simAbilityCopy.level * .002
            } else if (this.parentSkill.name == 'smithing') {
                preserve = basePreserve + Math.floor(simAbilityCopy.level / 20) * .05
            }

            while (simLevel < goal) {
                if (simXpRequired <= 0) {
                    simXpEarned = simAbilityCopy.parentSkill.xpCalc(simAbilityCopy);
                    simAbilityCopy.getLevel();
                    if (this.parentSkill.name == 'crafting' || this.parentSkill.name == 'fletching' || this.parentSkill.name == 'herblore') {
                        preserve = basePreserve + simAbilityCopy.level * .002
                    } else if (this.parentSkill.name == 'smithing') {
                        preserve = basePreserve + Math.floor(simAbilityCopy.level / 20) * .05
                    }
                    //console.log(preserve)
                    simLevel = simAbilityCopy.level
                    simAbilityCopy.parentSkill.getMastery()
                    simXpRequired = simAbilityCopy.xpToLevel;
                }
                simXpRequired -= simXpEarned
                simAbilityCopy.xp += simXpEarned
                if (Math.random() > preserve) {
                    itemsUsed += 1
                }
                time += simAbilityCopy.parentSkill.interval
            }
            timeList.push(time)
            itemUsedList.push(itemsUsed)
            xpList.push(simAbilityCopy.xp - this.xp)
            console.log(preserve)
        }
        var average = arr => arr.reduce((a, b) => a + b) / arr.length;

        this.xpEarned = average(xpList);
        this.ingredientsUsed = Math.ceil(average(itemUsedList));
        let timeAverage = average(timeList);
        let days = Math.floor(timeAverage / 86400) > 0 ? Math.floor(timeAverage / 86400).toString() + " day " : "";
        this.timeToLevel = days + new Date(timeAverage * 1000).toISOString().substr(11, 8);
        this.poolXpEarned = Math.floor(this.xpEarned * .5);
        this.xp += this.xpEarned
        this.getLevel()
        console.log(this)
    }
}

export { Player, Skill, Ability };