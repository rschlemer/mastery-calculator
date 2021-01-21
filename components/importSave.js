import { Component } from 'react';

const pako = require('pako');

class SaveArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: ''
        }
    }

    loadSave(e) {
        e.preventDefault();
        let gameData = JSON.parse(
            pako.ungzip(
                atob(this.state.textArea),
                { to: 'string' }
            )
        );
        let masteries = gameData.MASTERY;
        let bank = gameData.bank;
        this.props.onChange([masteries, bank])
    }

    render() {
        return (
            <div className="w-auto grid justify-items-center">
                <div className="w-4/5 p-2">
                    <textarea
                        className="resize-none px-1 rounded-md h-56 w-full border-gray-800 border-2"
                        placeholder="Enter save data."
                        value={this.state.textArea}
                        onChange={e => this.setState({ textArea: e.target.value })}
                    />
                    <button onClick={(e) => this.loadSave(e)} type="button" className="dark:text-gray-300 rounded-md dark:hover:bg-gray-700 p-2">Load Save</button>
                </div>
            </div>
        )
    }
}

export { SaveArea }
