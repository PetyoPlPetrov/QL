

import { compose, withFoodBuilder } from '@quicklux/utils';
import { useState } from 'react';
import { withError, withLoading } from '../../hocs';

interface Topping {
    id: number;
    name: string;
    price: number;
}
interface Food {
    toppings: Topping[];

}
interface FoodBuilderProps {
    name: string;
    toppings: Topping[];

}

const BaseFoodBuilder = ({ name, toppings: initialTopigs }: FoodBuilderProps) => {
    const [meal, setMeal] = useState<Food>({ toppings: [] });
    const [toppings, setToppings] = useState<Topping[]>(initialTopigs);


    const addTopping = (topping: Topping) => {
        setMeal({
            ...meal,
            toppings: [...meal.toppings, topping],
        });
    };

    const removeTopping = (topping: Topping) => {
        setMeal({
            ...meal,
            toppings: meal.toppings.filter((t) => t.id !== topping.id),
        });
    };

    return (
        <div>
            <h2>{name}</h2>
            <h3>Toppings:</h3>
            <ul>
                {toppings.map((topping) => (
                    <li key={topping.id}>
                        {topping.name} - ${topping.price}
                        <button onClick={() => removeTopping(topping)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Add Toppings</h3>
        </div>
    )
};

export const FoodBuilder = compose(
    withFoodBuilder,
    withLoading,
    withError
)(BaseFoodBuilder);
