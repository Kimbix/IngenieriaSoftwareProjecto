import NavigationBar from "./NavigationBar"
import "./SignUpInterface.css"

async function SendCredentialsDatabase() {
  return await fetch("",{ headers: { 'Accept': 'application/json' } })
    .then(response => response.json()) 
    .catch((e) => {
      console.log("Could not send sign up to database")})
    .then(data => { console.log(data)} )
    .finally()
}


export default function SignUpInterface() {
  return (
    <div>
      <NavigationBar/>
      <div className="main-container">
        <div className="signup-container">
          <div className="signup-bg">
            <div className="signup-header">
              Horarios Plus Plus
            </div>
            <div className="signup-user">
              <input placeholder="Introduzca un email" type="text"/>
            </div>
            <div className="signup-password">
              <input placeholder="Introduzca una contraseña" type="text"/>
            </div>
            <div className="signup-button">
              <button type="button">Crear Cuenta</button> 
            </div>
          </div>  
        </div>  
      </div>
    </div>
  )
}