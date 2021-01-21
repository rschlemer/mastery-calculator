import { useRef, useState } from 'react';
import useOnClickOutside from 'components/outsideclick';
import { IngredientDetail } from 'components/item';

export default function Modal(props) {
    const [value, setValue] = useState(0)
    //from props
    var ability = props.ability
    var skill = props.skill

    //create a reference for outside click
    const ref = useRef()
    useOnClickOutside(ref, () => { props.show && props.changeModal(false) });

    //simlation level state
    const [simLevel, setSimLevel] = useState(99)

    const ingredientList = ability.ingredients.map((ingredient) =>
        <IngredientDetail key={ingredient['name']} ingredient={ingredient} used={ability.ingredientsUsed} />
    )

    function simLevelChange(e) {
        const reg = /^(0?[0-9]|[1-9][0-9])$/;
        if (e.target.value === '' || reg.test(e.target.value)) {
            setSimLevel(e.target.value);
        }
    }

    function updatePlayer() {
        let player = props.player
        skill.abilities[ability.name] = ability
        player.skills[skill.name] = skill
        props.changePlayer(player)
    }

    return (
        <div val={value}>
            <div className="z-20 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0">
                <div className="relative my-6 mx-auto max-w-3xl w-4/5">
                    {/* Content */}
                    <div ref={ref} className="relative flex flex-col w-full items-start rounded-md shadow-md bg-white dark:bg-gray-700">
                        {/* Header */}
                        <div className="flex w-full justify-between border-b border-solid p-1 border-gray-300">
                            <h3 className="text-xl capitalize font-semibold dark:text-gray-300">Simulate Mastery - {ability.name}</h3>
                            <button onClick={() => { props.changeModal(false) }} className="float-right">
                                <span className="bg-transparent dark:text-gray-300 h-6 w-6 text-xl block">
                                    X
                            </span>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="grid sm:grid-cols-2 gap-3 mx-auto p-2">
                            <div className="dark:text-gray-300 uppercase">
                                <p>current mastery level: {ability.level}</p>
                                <div className="flex">
                                    <p className="align-text-bottom">Simulate to Level:</p>
                                    <input className="mx-1 px-1 w-12 text-black border-2 border-gray-800" value={simLevel} onChange={(e) => simLevelChange(e)} />
                                    <button onClick={() => { ability.simulate(simLevel), updatePlayer() }} type="button" className="px-2 mx-2 rounded-md bg-green-500 text-white">Simulate</button>
                                </div>
                                <p>preservation rate: {skill.preservation.toLocaleString("en", { style: "percent" })}</p>
                                <p>action interval: {skill.interval} seconds</p>
                                <p>XP earned: {ability.xpEarned.toLocaleString()}</p>
                                <p>Time Taken: {ability.timeToLevel}</p>
                                <p>Pool XP earned: {ability.poolXpEarned.toLocaleString()}</p>
                            </div>
                            <div className="dark:text-gray-300">
                                <p>Ingredients:</p>
                                {ingredientList}
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="w-full border-t border-solid border-gray-300 flex justify-end">
                            <button
                                className="text-red-500 font-bold px-6 py-2 text-sm"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => { props.changeModal(false) }}
                            >Close
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black opacity-50 fixed inset-0 z-10"></div>
        </div>
    )
}
