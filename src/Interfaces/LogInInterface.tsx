import NavigationBar from "./NavigationBar"
import "./LogInInterface.css"

let email = 0

async function SendSignupDatabase() {
  return await fetch("http://localhost:4000/api/sign_up?email=USERNAME,password=PASSWORD",{ headers: { 'Accept': 'application/json' } })
    .then(response => response.json()) 
    .catch((e) => {
      console.log("Could not send signup to database")})
    .then(data => { console.log(data)} )
    .finally()
}

async function SendLoginDatabase() {
  return await fetch("http://localhost:4000/api/login?email=USERNAME,password=PASSWORD",{ headers: { 'Accept': 'application/json' } })
    .then(response => response.json()) 
    .catch((e) => {
      console.log("Could not send signup to database")})
    .then(data => { console.log(data)} )
    .finally()
}

export default function LogInInterface() {
  return (
    <div>
      <NavigationBar/>
      <div className="main-container">
        <div className="login-container">
          <div className="login-bg">
            <div className="login-header">
              Horarios Plus Plus
            </div>
            <div className="login-user">
              <input placeholder="Email" type="text"/>
            </div>
            <div className="login-password">
              <input placeholder="Contraseña" type="text"/>
            </div>
            <div className="login-button">
              <button type="button">Iniciar Secion</button> 
            </div>
          </div>  
        </div>  
      </div>
    </div>
  )
}