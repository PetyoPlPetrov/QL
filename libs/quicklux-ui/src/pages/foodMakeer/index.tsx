import { Canvas, FoodBuilder } from '@quicklux/components';
import { FoodBuilderContext, verifyPermissions } from '@quicklux/utils';
import { useMemo } from 'react';

export interface FoodBuilderScreenProps {
  fetchToppings: () => Promise<any>;
  title: string;
}

export const FoodBuilderScreen = verifyPermissions(
  ({ fetchToppings, title }: FoodBuilderScreenProps) => {
    const context = useMemo(() => ({ fetchToppings }), [fetchToppings]);

    return (
      <div className="FoodBuilderScreen">
        <Canvas>
          <FoodBuilderContext.Provider value={context}>
            <FoodBuilder name={title} />
          </FoodBuilderContext.Provider>
        </Canvas>
      </div>
    );
  }
);
