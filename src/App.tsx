import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { Header } from "./components/HeaderComponent/Header";
import { HomeHero } from "./components/HomeHero/HomeHero";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>

      <HomeHero/>
    </ThemeProvider>
    
  )
}

export default App
