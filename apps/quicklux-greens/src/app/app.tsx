import {
  Button,
  Canvas,
  FoodBuilderScreen,
  Header,
  Panel,
} from '@quicklux/components';
import { lightTheme } from '@quicklux/themes';
import { useFoodStateMachine, withStateMachine } from '@quicklux/utils';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fetchToppings } from '../utils';

export function App() {
  const navigate = useNavigate();
  const { stateStep, goToNextStep } = useFoodStateMachine({
    ORDER: {
      ADD_TOPPING: () => {
        navigate('/order');
      },
    },
  });

  //TODO use stateStep to determine the current state (logged user, etc.)

  return (
    <ThemeProvider theme={lightTheme}>
      <Header title="Quicklux Green" />

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
          ></Route>

          <Route
            path="/order"
            element={
              <FoodBuilderScreen
                title="Salad Builder!"
                fetchToppings={fetchToppings}
              />
            }
          />
        </Routes>
      </Panel>
    </ThemeProvider>
  );
}

export default withStateMachine(App);
