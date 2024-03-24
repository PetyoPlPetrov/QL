import { Button, FoodBuilder, FoodBuilderScreen, Header } from '@quicklux/components';
import { lightTheme } from '@quicklux/themes';
import { FoodBuilderContext, useFoodStateMachine, withStateMachine } from '@quicklux/utils';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
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
  })

  //TODO use stateStep to determine the current state (logged user, etc.)

  return (
    <ThemeProvider theme={lightTheme}>
      <Header title="Quicklux Green" />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <Button variant='primary' text='Make salad' onClick={() => {
          goToNextStep({
            type: 'ORDER',
            status: 'ADD_TOPPING'
          })
        }} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <FoodBuilderScreen fetchToppings={fetchToppings} />
          }
        />
      </Routes>
      {/* END: routes */}
    </ThemeProvider>
  );
}

export default withStateMachine(App);
