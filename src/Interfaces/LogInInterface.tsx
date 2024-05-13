import NavigationBar from "./NavigationBar"
import "./LogInInterface.css"

let email = 0

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
              <input type="text"/>
            </div>
            <div className="login-password">
              <input type="text"/>
            </div>
            <div className="login-button">
              <button type="button">LOGAIN!!!</button> 
            </div>
          </div>  
        </div>  
      </div>
    </div>
  )
}