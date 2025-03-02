import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { Header } from "./components/HeaderComponent/Header";
import { HomeHero } from "./components/HomeHero/HomeHero";
import { About } from "./components/About/About";
import { MyProjects } from "./components/MyProjects/MyProjects";
import { Experience } from "./components/Experience/Experience"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>

      <HomeHero/>
      <About/>
      <MyProjects/>
      <Experience/>
    </ThemeProvider>
    
  )
}

export default App
