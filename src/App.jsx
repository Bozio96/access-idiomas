import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/Header/NavBar";
import Banner from "./components/Main/Banner";
import Examenes from "./components/Main/Examenes";
import Cursos from "./components/Main/Cursos";
import Coworking from "./components/Main/Coworking";
import SobreNosotros from "./components/Main/SobreNosotros";
import Contacto from "./components/Main/Contacto";
import Iframe from "./components/Main/Iframe";
import Footer from "./components/Footer/Footer";

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
      <Examenes />
      <Cursos />
      <Coworking />
      <SobreNosotros />
      <Contacto />
      <Iframe/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
