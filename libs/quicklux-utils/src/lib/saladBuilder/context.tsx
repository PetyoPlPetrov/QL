import React from 'react';

interface FoodBuilderContextProps{
    fetchToppings: () => Promise<any>;
}
export const FoodBuilderContext = React.createContext<FoodBuilderContextProps>({
    fetchToppings: async () => [],
});