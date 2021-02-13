import { Component } from 'react';
import Head from 'next/head';
import Select from 'react-dropdown-select';
import Image from 'next/image';

import * as jStat from 'jstat';

let DATA = require('data/melvorData.json');
let MONSTERS = []
for (const [i, monster] of DATA["monsters"].entries()) {
    if (monster['lootTable'] != undefined) {
        MONSTERS.push(monster);
    }
}
let ITEMS = DATA["items"]

export default class Probabilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            probability: 0.000490,
            trials: 10.0,
            amount: 1.0,
            exact: 0.0,
            atMost: 0.0,
            atLeast: 0.0,
            fifty: 0.0,
            ninetyFive: 0.0,
            selectedMonster: {
                "name": "Black Knight",
                "media": "assets/media/monsters/black_knight.svg",
                "lootTable": [
                    [
                        139,
                        50,
                        1
                    ],
                    [
                        138,
                        30,
                        1
                    ],
                    [
                        134,
                        30,
                        1
                    ],
                    [
                        142,
                        20,
                        1
                    ],
                    [
                        135,
                        20,
                        1
                    ],
                    [
                        136,
                        20,
                        1
                    ],
                    [
                        434,
                        8,
                        1
                    ],
                    [
                        137,
                        20,
                        1
                    ],
                    [
                        140,
                        5,
                        1
                    ],
                    [
                        141,
                        1,
                        1
                    ]
                ],
                "lootChance": 10,
            },
            selectedItem: {
                media: "assets/media/bank/armour_platebody_black.svg",
                name: "Black Platebody",
                probability: 0.0004901960784313725
            },
            itemList: [
                {
                    "id": 139,
                    "category": "Combat",
                    "type": "Armour",
                    "tier": "black",
                    "name": "Black Boots",
                    "equipmentSlot": 3,
                    "sellsFor": 18,
                    "media": "assets/media/bank/armour_boots_black.svg",
                    "attackBonus": [
                        0,
                        0,
                        0
                    ],
                    "strengthBonus": 0,
                    "defenceBonus": 7,
                    "attackSpeed": 0,
                    "defenceLevelRequired": 10,
                    "trimmedItemID": 181,
                    "canUpgrade": true,
                    "rangedAttackBonus": -1,
                    "magicAttackBonus": -3,
                    "rangedDefenceBonus": 0,
                    "magicDefenceBonus": 0,
                    "probability": 0.024510
                },
                {
                    "id": 138,
                    "category": "Combat",
                    "type": "Armour",
                    "tier": "black",
                    "name": "Black Helmet",
                    "equipmentSlot": 0,
                    "sellsFor": 18,
                    "media": "assets/media/bank/armour_helmet_black.svg",
                    "attackBonus": [
                        0,
                        0,
                        0
                    ],
                    "strengthBonus": 0,
                    "defenceBonus": 12,
                    "attackSpeed": 0,
                    "defenceLevelRequired": 10,
                    "trimmedItemID": 180,
                    "canUpgrade": true,
                    "rangedAttackBonus": -2,
                    "magicAttackBonus": -6,
                    "rangedDefenceBonus": 12,
                    "magicDefenceBonus": -1,
                    "probability": 0.014706
                },
                {
                    "id": 134,
                    "category": "Combat",
                    "type": "Weapon",
                    "tier": "black",
                    "name": "Black Dagger",
                    "equipmentSlot": 4,
                    "isTwoHanded": false,
                    "sellsFor": 10,
                    "media": "assets/media/bank/weapon_dagger_black.svg",
                    "attackBonus": [
                        15,
                        5,
                        15
                    ],
                    "strengthBonus": 7,
                    "defenceBonus": 0,
                    "attackSpeed": 2200,
                    "attackLevelRequired": 10,
                    "probability": 0.014706
                },
                {
                    "category": "Combat",
                    "type": "Armour",
                    "tier": "black",
                    "name": "Black Shield",
                    "equipmentSlot": 5,
                    "sellsFor": 48,
                    "media": "assets/media/bank/armour_shield_black.svg",
                    "attackBonus": [
                        0,
                        0,
                        0
                    ],
                    "strengthBonus": 0,
                    "defenceBonus": 17,
                    "attackSpeed": 0,
                    "defenceLevelRequired": 10,
                    "trimmedItemID": 184,
                    "canUpgrade": true,
                    "rangedAttackBonus": -2,
                    "magicAttackBonus": -8,
                    "rangedDefenceBonus": 18,
                    "magicDefenceBonus": -1,
                    "probability": 0.009804
                },
                {
                    "id": 135,
                    "category": "Combat",
                    "type": "Weapon",
                    "tier": "black",
                    "name": "Black Sword",
                    "equipmentSlot": 4,
                    "isTwoHanded": false,
                    "sellsFor": 10,
                    "media": "assets/media/bank/weapon_sword_black.svg",
                    "attackBonus": [
                        18,
                        7,
                        5
                    ],
                    "strengthBonus": 12,
                    "defenceBonus": 0,
                    "attackSpeed": 2400,
                    "attackLevelRequired": 10,
                    "probability": 0.009804
                },
                {
                    "id": 136,
                    "category": "Combat",
                    "type": "Weapon",
                    "tier": "black",
                    "name": "Black Battleaxe",
                    "equipmentSlot": 4,
                    "isTwoHanded": false,
                    "sellsFor": 25,
                    "media": "assets/media/bank/weapon_battleaxe_black.svg",
                    "attackBonus": [
                        -2,
                        20,
                        20
                    ],
                    "strengthBonus": 24,
                    "defenceBonus": 0,
                    "attackSpeed": 3100,
                    "attackLevelRequired": 10,
                    "probability": 0.009804
                },
                {
                    "category": "Combat",
                    "type": "Weapon",
                    "tier": "black",
                    "name": "Black Scimitar",
                    "equipmentSlot": 4,
                    "isTwoHanded": false,
                    "sellsFor": 10,
                    "media": "assets/media/bank/weapon_scimitar_black.svg",
                    "attackBonus": [
                        4,
                        19,
                        4
                    ],
                    "strengthBonus": 14,
                    "defenceBonus": 0,
                    "attackSpeed": 2400,
                    "attackLevelRequired": 10,
                    "probability": 0.003922
                },
                {
                    "id": 137,
                    "category": "Combat",
                    "type": "Weapon",
                    "tier": "black",
                    "name": "Black 2H Sword",
                    "equipmentSlot": 4,
                    "isTwoHanded": true,
                    "sellsFor": 25,
                    "media": "assets/media/bank/weapon_2h_black.svg",
                    "attackBonus": [
                        -4,
                        42,
                        42
                    ],
                    "strengthBonus": 46,
                    "defenceBonus": 0,
                    "attackSpeed": 3600,
                    "attackLevelRequired": 10,
                    "probability": 0.009804
                },
                {
                    "id": 140,
                    "category": "Combat",
                    "type": "Armour",
                    "tier": "black",
                    "name": "Black Platelegs",
                    "equipmentSlot": 2,
                    "sellsFor": 25,
                    "media": "assets/media/bank/armour_platelegs_black.svg",
                    "attackBonus": [
                        0,
                        0,
                        0
                    ],
                    "strengthBonus": 0,
                    "defenceBonus": 21,
                    "attackSpeed": 0,
                    "defenceLevelRequired": 10,
                    "trimmedItemID": 182,
                    "canUpgrade": true,
                    "rangedAttackBonus": -7,
                    "magicAttackBonus": -21,
                    "rangedDefenceBonus": 20,
                    "magicDefenceBonus": -4,
                    "probability": 0.002451
                },
                {
                    "id": 141,
                    "category": "Combat",
                    "type": "Armour",
                    "tier": "black",
                    "name": "Black Platebody",
                    "equipmentSlot": 1,
                    "sellsFor": 48,
                    "media": "assets/media/bank/armour_platebody_black.svg",
                    "attackBonus": [
                        0,
                        0,
                        0
                    ],
                    "strengthBonus": 0,
                    "defenceBonus": 41,
                    "attackSpeed": 0,
                    "defenceLevelRequired": 10,
                    "trimmedItemID": 183,
                    "canUpgrade": true,
                    "rangedAttackBonus": -10,
                    "magicAttackBonus": -30,
                    "rangedDefenceBonus": 40,
                    "magicDefenceBonus": -6,
                    "probability": 0.000490
                }
            ]
        }
    }

    runCalcs() {
        let amount = parseFloat(this.state.amount);
        let trials = parseInt(this.state.trials);
        let probability = parseFloat(this.state.probability);
        this.setState({
            exact: jStat.binomial.pdf(amount, trials, probability),
            atMost: jStat.binomial.cdf(amount, trials, probability),
            atLeast: 1 - jStat.binomial.cdf(amount - 1, trials, probability),
            fifty: Math.ceil(Math.log(.5) / Math.log(1 - probability)),
            ninetyFive: Math.ceil(Math.log(.05) / Math.log(1 - probability))
        });
    }

    selectMonster(monster) {
        if (MONSTERS.includes(monster)) {
            this.setState({
                selectedMonster: monster,
                itemList: this.getItems(monster)
            })
        }
    }

    selectItem(item) {
        if (this.state.itemList.includes(item)) {
            this.setState({
                selectedItem: item,
                probability: item['probability']
            })
        }
    }

    getItems(monster) {
        let lootTable = monster['lootTable']
        let modifier = 1
        if (monster['lootChance'] != undefined) {
            modifier = monster['lootChance']
        }
        let result = []
        let totalProb = 0
        for (const [i, loot] of lootTable.entries()) {
            let item = ITEMS[loot[0]]
            item["probability"] = loot[1] / modifier
            result.push(item)
            totalProb += loot[1]
        }
        for (const [i, item] of result.entries()) {
            item["probability"] = (item["probability"] / totalProb).toFixed(6)
        }
        return result
    }

    customItemRenderer = ({ item, itemIndex, props, state, methods }) => (

        <div onClick={() => methods.addItem(item)}>
            <Image src={"https://cdn.melvor.net/core/v018/" + item['media']} width='24' height='24' />
            {item['name']}
        </div>

    );


    render() {

        return (
            <div>
                <Head>
                    <title>Drop Probability Calculator</title>
                </Head>
                <h1 className="text-4xl text-center dark:text-gray-300">Drop Probability Calculator</h1>
                <div className="sm:grid sm:grid-cols-2 sm:justify-items-auto">
                    <div>
                        <div className="flex flex-wrap p-2 m-2">
                            <p className="dark:text-gray-300 p-2 m-2">Select Monster</p>
                            <Select
                                options={MONSTERS}
                                values={[this.state.selectedMonster]}
                                itemRenderer={this.customItemRenderer}
                                placeholder="Select Monster"
                                labelField="name"
                                searchBy="name"
                                onChange={(value) => this.selectMonster(value[0])}
                                clearOnSelect={false}
                                className="dark:bg-gray-100 p-2 m-2"
                            />
                        </div>
                        <div className="flex flex-wrap p-2 m-2">
                            <p className="dark:text-gray-300 p-2 m-2">Select Item</p>
                            <Select
                                options={this.state.itemList}
                                values={[this.state.selectedItem]}
                                itemRenderer={this.customItemRenderer}
                                placeholder="Select Item"
                                labelField="name"
                                searchBy="name"
                                onChange={(value) => this.selectItem(value[0])}
                                className="dark:bg-gray-100 p-2 m-2"
                            />
                        </div>
                    </div>
                    <div className="grid justify-items-start p-2 m-2">
                        <div >
                            <div className="flex-wrap flex">
                                <input className="mx-1 px-1 text-black border-2 border-gray-800 w-32" value={this.state.probability} onChange={(e) => { this.setState({ probability: e.target.value }) }} />
                                <p className="dark:text-gray-300 p-1 m-1 text-sm sm:text-base">Drop chance</p>
                            </div>
                            <div className="flex-wrap flex">
                                <input className="mx-1 px-1 text-black border-2 border-gray-800 w-32" value={this.state.trials} onChange={(e) => { this.setState({ trials: e.target.value }) }} />
                                <p className="dark:text-gray-300 p-1 m-1">Number of tries</p>
                            </div>
                            <div className="flex-wrap flex">
                                <input className="mx-1 px-1 text-black border-2 border-gray-800 w-32" value={this.state.amount} onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                                <p className="dark:text-gray-300 p-1 m-1">Number of drops</p>
                            </div>
                            <button
                                className="p-2 mx-1 rounded-md bg-green-500 text-white"
                                type='button'
                                onClick={() => this.runCalcs()}>
                                Calculate Probabilities
                            </button>
                        </div>
                        <div className="p-1">
                            <p className="dark:text-gray-300">{this.state.exact.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2 })} chance of getting exacltly {this.state.amount} drops.</p>
                            <p className="dark:text-gray-300">{this.state.atLeast.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2 })} chance of getting at least {this.state.amount} drops.</p>
                            <p className="dark:text-gray-300">{this.state.atMost.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2 })} chance of getting at most {this.state.amount} drops.</p>
                            <p className="dark:text-gray-300">{this.state.fifty.toLocaleString('en')} trials required to have 50% chance of 1 drop</p>
                            <p className="dark:text-gray-300">{this.state.ninetyFive.toLocaleString('en')} trials required to have 95% chance of 1 drop</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
