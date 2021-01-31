import { Component } from 'react';
import Head from 'next/head';

import * as jStat from 'jstat';


export default class Probabilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            probability: 0.1,
            trials: 10.0,
            amount: 1.0,
            exact: 0.0,
            atMost: 0.0,
            atLeast: 0.0,
            fifty: 0.0,
            ninetyFive: 0.0
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

    render() {
        return (
            <div>
                <Head>
                    <title>Drop Probability Calculator</title>
                </Head>
                <h1 className="text-4xl text-center dark:text-gray-300">Drop Probability Calculator</h1>
                <div>
                    <input value={this.state.probability} onChange={(e) => { this.setState({ probability: e.target.value }) }} />
                    <input value={this.state.trials} onChange={(e) => { this.setState({ trials: e.target.value }) }} />
                    <input value={this.state.amount} onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                    <button type='button' onClick={() => this.runCalcs()}>Calculate Probabilities</button>
                </div>
                <div>
                    <p>{this.state.exact.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2 })} chance of getting exacltly {this.state.amount} drops.</p>
                    <p>{this.state.atLeast.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2 })} chance of getting at least {this.state.amount} drops.</p>
                    <p>{this.state.atMost.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2 })} chance of getting at most {this.state.amount} drops.</p>
                    <p>{this.state.fifty.toLocaleString('en')} trials required to have 50% chance of 1 drop</p>
                    <p>{this.state.ninetyFive.toLocaleString('en')} trials required to have 95% chance of 1 drop</p>
                </div>
            </div>
        )
    }
}