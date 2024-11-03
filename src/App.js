import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import {  lightGreen } from "@mui/material/colors"
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from 'redux-persist/integration/react'
import "./İndex.css"
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: lightGreen["400"],
      },
      secondary: {
        main: lightGreen["800"],
      },
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </ThemeProvider>
  </>
  );
}

export default App;
