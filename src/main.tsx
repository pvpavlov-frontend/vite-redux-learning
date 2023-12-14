import Counter from "components/Counter"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "store/redux/store"
import GlobalStyles from "styles/GlobalStyles"

ReactDOM.createRoot(document.getElementById("root")!).render(

  <Provider store={store}>
    <GlobalStyles />
    <Counter />
  </Provider>,
)