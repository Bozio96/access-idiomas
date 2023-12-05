import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/Header/NavBar";
import Banner from "./components/Main/Banner";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#312783",
    },
    secondary: {
      main: "#FFA500",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Banner />
    </ThemeProvider>
  );
}

export default App;
