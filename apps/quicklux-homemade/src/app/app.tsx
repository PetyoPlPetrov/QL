import styled, { ThemeProvider } from 'styled-components';

import { FoodBuilder, Header } from '@quicklux/components';
import { lightTheme } from '@quicklux/themes';
import { FoodBuilderContext } from '@quicklux/utils';
import { Route, Routes } from 'react-router-dom';
const fetchPizaStuff = () => new Promise((resolve) => {
  resolve(['cheese', 'tomato', 'mushroom', 'onion', 'pepperoni']);
});
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>

      <Header title="Quicklux Homemade" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <Routes>
        <Route
          path="/page-2"
          element={
            <FoodBuilderContext.Provider
              value={{ fetchToppings: fetchPizaStuff }} >

              <FoodBuilder name="Piza Builder!" />

            </FoodBuilderContext.Provider>
          }
        />
      </Routes>
      {/* END: routes */}
    </ThemeProvider>
  );
}

export default App;
