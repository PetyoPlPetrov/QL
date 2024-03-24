import { useContext, useEffect } from 'react';
import { useDelayedApi, useFoodStateMachine } from '../utils';
import { FoodBuilderContext } from './context';

export const withFoodBuilder = (Component: React.FC) => {


    return (props: any) => {

        const { fetchToppings } = useContext(FoodBuilderContext);

        if (!fetchToppings) {
            throw new Error('FoodBuilder not provided');
        }
        const [fetchData, data, loading, error] = useDelayedApi({
            api: fetchToppings,
            defaultData: [],
            transform: (data) => data,
        });

        //
        const { stateStep } = useFoodStateMachine();// TODO CHECK for current state if needed

        useEffect(() => {
            fetchData({});
        }, [fetchData]);


        return (
            <Component {...props}
                toppings={data}
                loading={loading}
                error={error}

            />
        );
    };
}



