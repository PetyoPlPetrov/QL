import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  Canvas,
  FoodBuilderScreen,
  Header,
  Panel,
} from '@quicklux/components';
import { lightTheme } from '@quicklux/homemade';
import { useFoodStateMachine, withStateMachine } from '@quicklux/utils';

const fakeAPi = (data: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });

const fetchPizaStuff = () =>
  fakeAPi([
    { id: 1, name: 'Cheese', price: 1 },
    { id: 2, name: 'Pepperoni', price: 2 },
  ]);

export function App() {
  const navigate = useNavigate();

  const { stateStep, goToNextStep } = useFoodStateMachine({
    ORDER: {
      ADD_TOPPING: () => {
        navigate('/order');
      },
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <Header title="Quicklux Homemade" />
      <Panel>
        <Routes>
          <Route
            path="/"
            element={
              <Canvas>
                <Button
                  variant="primary"
                  text="Make pizza"
                  onClick={() => {
                    goToNextStep({
                      type: 'ORDER',
                      status: 'ADD_TOPPING',
                    });
                  }}
                />
              </Canvas>
            }
          />
          <Route
            path="/order"
            element={
              <FoodBuilderScreen
                title="Piza Builder!"
                fetchToppings={fetchPizaStuff}
              />
            }
          />
        </Routes>
      </Panel>
    </ThemeProvider>
  );
}

export default withStateMachine(App);
