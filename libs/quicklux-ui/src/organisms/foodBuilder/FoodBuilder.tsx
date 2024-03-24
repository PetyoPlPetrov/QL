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

const BaseFoodBuilder = ({
  name,
  toppings: initialTopigs,
}: FoodBuilderProps) => {
  const [meal, setMeal] = useState<Food>({ toppings: [] });
  const [toppings, setToppings] = useState<Topping[]>(initialTopigs);

  const addTopping = (topping: Topping) => {};

  const removeTopping = (topping: Topping) => {};

  return (
    <div>
      <h2>{name}</h2>
      <h3>Toppings:</h3>
      <ul>
        {toppings.map((topping) => (
          <li key={topping.id}>
            {topping.name} - ${topping.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FoodBuilder = compose(
  withFoodBuilder,
  withLoading,
  withError
)(BaseFoodBuilder);
