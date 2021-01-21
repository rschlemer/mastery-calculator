import React, { Component } from 'react';
import Image from 'next/image';

class ItemButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const ability = this.props.ability
        const image = "https://cdn.melvor.net/core/v018/" + ability.image
        return (
            <div className="p-1">
                <button onClick={() => this.props.onChange(ability, true)} className="w-28 h-44 mx-auto border-blue-200 border-2 p-2 rounded-md capitalize">
                    <Image src={image.toString()} width="36" height="36" />
                    <h4 className="dark:text-gray-300 text-sm text-center">{ability.name}</h4>
                    <h4 className="dark:text-gray-300 text-sm font-medium text-center">{ability.level}</h4>
                </button>
            </div>
        )
    }
}

class IngredientDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ingredient = this.props.ingredient

        return (
            <div className="flex flex-col min-w-44 min-h-44 m-1 border-blue-200 capitalize border-2 p-2 rounded-md">

                <Image src={"https://cdn.melvor.net/core/v018/" + ingredient['image']} width="36" height="36" />
                <h4 className="text-sm text-center dark:text-gray-300">{ingredient['name']}</h4>
                <h4 className="text-sm text-center dark:text-gray-300">Amount Owned: {ingredient['owned'].toLocaleString()}</h4>
                <h4 className="text-sm text-center dark:text-gray-300">Amount Used: {(ingredient['required'] * this.props.used).toLocaleString()}</h4>

            </div>
        )

    }

}

export { ItemButton, IngredientDetail }