import { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SaveArea } from 'components/importSave';
import { Player } from 'data/masteryCalc';
let DATA = require('data/melvorData.json');
let ITEMS = DATA['items'];

export default class BankPage extends Component {
    constructor(props) {
        super(props)

        let player = new Player();
        player.loadPlayer();

        this.state = {
            player: player
        }
    }

    loadUserSave(value) {
        let newPlayer = this.state.player;
        newPlayer.loadData(value[0], value[1]);
        this.setState({
            player: newPlayer
        });
    }

    getItemList() {
        console.log(this.state.player.bank)
        let itemList = []
        for (const [i, item] of ITEMS.entries()) {
            if (!this.state.player.bankIdList.includes(i)) {
                itemList.push(
                    <tr className="bg-white border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800" key={i + item['media']}>
                        <td className="px-8 py-2 flex flex-row items-center"><Image src={"https://cdn.melvor.net/core/v018/" + item['media']} height="36" width="36" /></td>
                        <td className="px-8 py-2 dark:text-gray-300">{item['name']}</td>
                        <td className="px-8 py-2 dark:text-gray-300">{i}</td>
                        <td className="px-8 py-2 dark:text-gray-300">{item['category']}</td>
                        <td className="px-8 py-2 dark:text-gray-300">{item['type']}</td>
                    </tr>
                )
            }
        }
        return itemList
    }

    render() {
        let itemList = []
        for (const [i, item] of ITEMS.entries()) {
            itemList.push(
                <tr className="bg-white border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800" key={i + item['media']}>
                    <td className="px-8 py-2 flex flex-row items-center"><Image src={"https://cdn.melvor.net/core/v018/" + item['media']} height="36" width="36" /></td>
                    <td className="px-8 py-2 dark:text-gray-300">{item['name']}</td>
                    <td className="px-8 py-2 dark:text-gray-300">{i}</td>
                    <td className="px-8 py-2 dark:text-gray-300">{item['category']}</td>
                    <td className="px-8 py-2 dark:text-gray-300">{item['type']}</td>
                </tr>

            )
        }



        return (
            <>
                <Head>
                    <title>Bank Analyzer</title>
                </Head>
                <div className="flex justify-center">
                    <h1 className="text-4xl text-center dark:text-gray-300">Bank Analyzer</h1>
                </div>
                <div>
                    <SaveArea player={this.state.player} onChange={(v) => this.loadUserSave(v)} />
                </div>
                <div>
                    <table className="min-w-full table-auto">
                        <thead className="justify-between">
                            <tr className="bg-red-800">
                                <th className="px-8 py-2 text-gray-300">Item</th>
                                <th className="px-8 py-2 text-gray-300">Name</th>
                                <th className="px-8 py-2 text-gray-300">ID</th>
                                <th className="px-8 py-2 text-gray-300">Category</th>
                                <th className="px-8 py-2 text-gray-300">Type</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                            {this.getItemList()}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

