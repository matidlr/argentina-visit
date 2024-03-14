import { useContext } from "react"
import Context from "../contexto/Context"
import Router2 from "./Router2"


const RutasPublicas = ({children}) => {
  const {logueado} = useContext(Context)
    return (logueado)
     ? <Router2/>
     : children
}

export default RutasPublicas