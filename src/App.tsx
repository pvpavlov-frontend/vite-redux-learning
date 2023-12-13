import { BrowserRouter } from "react-router-dom";
import Weather from "./pages/Weather";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Weather />
    </BrowserRouter>
  )
}

export default App
