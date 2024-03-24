import { useContext, useEffect, useMemo, useState } from 'react';
import { mergeConfig } from '../utils';
import {
  StateMachineContext,
  useDelayedApi,
  useStateMachine,
} from '../utils/index';
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
    const { stateStep } = useFoodStateMachine(); // TODO CHECK for current state if needed

    useEffect(() => {
      fetchData({});
    }, [fetchData]);

    return (
      <Component {...props} toppings={data} loading={loading} error={error} />
    );
  };
};

export const withStateMachine = (Component: React.FC) => {
  return (props: any) => {
    const [config, setConfig] = useState({});

    const memoConfig = useMemo(() => {
      return mergeConfig(config, {});
    }, [config]);

    const { stateStep, goToNextStep } = useStateMachine(memoConfig, {
      type: 'INIT',
      status: 'INIT',
    });

    return (
      <StateMachineContext.Provider
        value={{ stateStep, goToNextStep, setConfig }}
      >
        <Component {...props} />
      </StateMachineContext.Provider>
    );
  };
};

export const useFoodStateMachine = (config = {}) => {
  const context = useContext(StateMachineContext);
  if (!context) {
    throw new Error('State Machine context not provided');
  }

  useEffect(() => {
    context.setConfig(config);
  }, []);

  return context;
};
