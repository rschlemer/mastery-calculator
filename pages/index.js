import Head from 'next/head';
import { Component } from 'react';
import { SaveArea } from 'components/importSave';
import { SkillBar } from 'components/skillbar';
import { ItemButton } from 'components/item';
import Modal from 'components/modal';
import { Player, Skill, Ability } from 'data/masteryCalc';

export default class Homepage extends Component {
    constructor(props) {
        super(props);

        let player = new Player();
        player.loadPlayer();

        this.state = {
            player: player,
            currentSkill: new Skill(),
            currentAbility: new Ability(),
            showModal: false,
            abilities: []
        }
    }

    loadUserSave(value) {
        let newPlayer = this.state.player;
        newPlayer.loadData(value[0], value[1]);
        this.setState({
            player: newPlayer
        });
        this.changeSkill(this.state.currentSkill)
    }

    changeSkill(value) {
        let a = [];
        for (const [abilityName, ability] of Object.entries(value.abilities)) {
            a.push(<ItemButton key={ability.name} ability={ability} onChange={(v, b) => { this.changeAbility(v), this.changeModal(b) }} />);
        }
        this.setState({
            currentSkill: value,
            abilities: a
        });
    }

    changeAbility(value) {
        this.setState({
            currentAbility: value
        });
    }

    changeModal(value) {
        this.setState({
            showModal: value
        });
    }

    updatePlayer(player) {
        this.setState({
            player: player,
        });
        this.changeSkill(this.state.currentSkill)
    }

    render() {
        return (
            <>
                <Head>
                    <title>Melvor Mastery Calculator</title>
                </Head>

                <div className="flex justify-center">
                    <h1 className="text-4xl text-center dark:text-gray-300">Melvor Mastery Calculator</h1>
                </div>
                <div className="">
                    <SaveArea player={this.state.player} onChange={(v) => this.loadUserSave(v)} />
                    <SkillBar player={this.state.player} onChange={(v) => this.changeSkill(v)} />

                    <div className='flex flex-wrap justify-center'>
                        {this.state.abilities.length > 0 && this.state.abilities}
                    </div>

                    {this.state.showModal &&
                        <Modal show={this.state.showModal} changePlayer={(p) => this.updatePlayer(p)} changeModal={(v) => this.changeModal(v)} player={this.state.player} skill={this.state.currentSkill} ability={this.state.currentAbility} />
                    }
                </div>
            </>
        )
    }
}