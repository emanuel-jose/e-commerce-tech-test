import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import App from "./App";
import { store } from "./app/store";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/globalStyles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
