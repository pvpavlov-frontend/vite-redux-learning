import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store/store"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Provider - это компонент, которые оборачивает у нас все прилложение
  // и принимает в качестве пропсы, задание созданный store
  // соответственно все компоненты в приложении могут иметь доступ к глобальному стору
  // следовательно все компоненты имет возможность запршивать изменения в сторе(диспатчить action)
  // и имеет доступ к изменениям которые произошли
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
