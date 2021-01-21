import { Player } from 'data/masteryCalc';
import { Component } from 'react';

class SkillBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const player = this.props.player
        let skillList = []
        for (const [skillName, skill] of Object.entries(player.skills)) {
            if (skill.master) {
                skillList.push(
                    <li key={skillName}>
                        <button onClick={(e) => this.props.onChange(skill)} className="p-2 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md capitalize" type="button">
                            {skillName}
                        </button>
                    </li>
                )
            }
        }
        return (
            <div className="grid justify-items-center w-auto">
                <ul className="flex flex-wrap justify-center">
                    {skillList}
                </ul>
            </div>
        )
    }
}
export { SkillBar }