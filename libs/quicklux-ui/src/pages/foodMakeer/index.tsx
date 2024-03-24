import { FoodBuilderContext, baseAllowed } from "@quicklux/utils";
import { FoodBuilder } from "../../organisms";

export interface FoodBuilderScreenProps {
    fetchToppings: () => Promise<any>;
}

export const FoodBuilderScreen = baseAllowed(({ fetchToppings }: FoodBuilderScreenProps) => {
    return <div className="FoodBuilderScreen">

        <FoodBuilderContext.Provider
            value={{ fetchToppings }} >

            <FoodBuilder name="Salad Builder!" />

        </FoodBuilderContext.Provider>
    </div>
})