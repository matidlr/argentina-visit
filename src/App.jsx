import Router from "./routes/Router"
import Provider from "./contexto/Provider"
import './App.css'

function App() {


  return (
    <>
     <Provider>
        <Router/>
     </Provider>
    </>
  )
}

export default App
