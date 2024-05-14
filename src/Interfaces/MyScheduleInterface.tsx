import React from "react"
import { useState } from "react"

import NavigationBar from "./NavigationBar"
import "./MyScheduleInterface.css"

import { type ISchedule, type ISubject, type ISection, type ISession } from "./ScheduleViewer.tsx";
import ScheduleViewer from "./ScheduleViewer.tsx"

const storedData = sessionStorage.getItem("login");
const loginData = storedData !== null ? JSON.parse(storedData) : null;
if (loginData === null) {
  console.log("not logged in");
}

async function getHorario() {
  return await fetch("http://127.0.0.1/api/section/get_schedule_from_owner?ownerName=JohnDoe")
    .then((response) => response.json())
    .then((data) => console.log(data)) // logs the schedule object
    .catch((error) => console.error("Error:", error));
  
}

export default function MySheduleInterface() {
  const [loadedSchedule, setLoadedSchedule] = React.useState()
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleClick = () => {
    /* SendLoginDatabase()
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
      }); */
  };


  /*     <div>
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
      </div> */
  return (
    <div>
      <NavigationBar />
      <div className="main-container">
        {loadedSchedule !== undefined && <ScheduleViewer loadedSchedule={loadedSchedule} /> }
      </div>
    </div>
  );
}