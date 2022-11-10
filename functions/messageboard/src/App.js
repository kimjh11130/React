import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme"
import Footer from "./components/common/Footer";
import { GlobalStyle } from "./style/GlobalSyle";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
