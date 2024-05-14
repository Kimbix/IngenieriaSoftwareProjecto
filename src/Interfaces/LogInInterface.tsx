import NavigationBar from "./NavigationBar"
import "./LogInInterface.css"
import React, { useState } from "react";


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
    .then(data => { 
      if (data === "successful"){
        // log in persistance 
        sessionStorage.setItem('login', 'yes'); 
      }
      console.log(data)
      return data;//botar la data fuera para dibujar el error
    } 
    )
    .finally()
}



export default function LogInInterface() {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleClick = () => {
    SendLoginDatabase()
      .then((data) => {
        if (data === "successful") {
          setShowError(false);
          //window.location.href = "/home";
        } else {
          
          setShowError(true);
          if (data === "User doesn't exist") {
            setErrorMessage("Usuario no encontrado");
          } else if (data === "password doesn't match") {
            setErrorMessage("Contraseña incorrecta");
          } else {
            setErrorMessage("Error desconocido");
          }
        }
      })
      .catch(() => {
        setShowError(true);
      });
  };



  return (
    <div>
      <NavigationBar />
      <div className="main-container">
        <div className="login-container">
          <div className="login-bg">
            <div className="login-header">Horarios Plus Plus</div>
            {showError && <div className="login-error">{errorMessage}</div>}
            <div className="login-user">
              <input placeholder="Email" type="text" />
            </div>
            <div className="login-password">
              <input placeholder="Contraseña" type="text" />
            </div>
            <div className="login-button">
              <button type="button" onClick={handleClick}>
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}