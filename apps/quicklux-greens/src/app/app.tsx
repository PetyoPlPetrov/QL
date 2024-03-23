import { Button, Header } from '@quicklux/components';
import { lightTheme } from '@quicklux/themes';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


export function App() {
  const navigate = useNavigate();

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
        <Button variant='primary' text='Make salad' onClick={()=>{
          navigate('/order')
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
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </ThemeProvider>
  );
}

export default App;
