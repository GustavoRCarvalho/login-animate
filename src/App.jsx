import { BrowserRouter } from "react-router-dom"
import { Content } from "./router/Content"
import { Header } from "./components/Screens1/Header"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  )
}
