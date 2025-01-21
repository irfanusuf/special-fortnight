import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./global.scss";
import App from "./App.tsx";
import store from "./redux/Store.tsx";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#c2185b',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f48fb1',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>

      
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
     
    </Provider>
  </StrictMode>
);
