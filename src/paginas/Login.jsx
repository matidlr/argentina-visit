import { useNavigate } from "react-router-dom"
import {useContext} from 'react'
import Context from "../contexto/Context"

const Login = () => {
  const {logearse,setReferencia}=useContext(Context)
  const navegacion=useNavigate()
  const login =()=> {
    logearse('jab')
     navegacion('/',{replace:true})
  }
  const registro=(e)=>{
    setReferencia(e.currentTarget.value)
  }
  return (
    <>
      <section className="login">
        <h1>Vive el pais: 545</h1>
        <label htmlFor="referencia">Referencia: </label>
        <input id="referencia" onChange={registro} placeholder="Referencia de tu billete" autofocus autocomplete="off" />
        <button className="botonRegistro" onClick={login}>Login</button>
      </section>
    </>
  )
}

export default Login