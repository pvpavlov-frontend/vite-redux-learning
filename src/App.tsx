import { BrowserRouter } from "react-router-dom";
// import Weather from "./pages/Weather";
import GlobalStyles from "./styles/GlobalStyles";
import Homework29 from "./homeworks/Homework29";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Weather /> */}
      <Homework29 />
    </BrowserRouter>
  )
}

export default App
