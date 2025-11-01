import { Route, Routes } from "react-router"
import { Footer, Header } from "./components"
import { routes } from "./data/routes"

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map(item => (
            <Route path={item.path} element={item.element} key={item.path} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
