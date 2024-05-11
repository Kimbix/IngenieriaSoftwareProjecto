import NavigationBar from "./NavigationBar"
import "./GenerationInterface.css"
import React, { type ReactEventHandler } from "react"

function ScheduleBox() {
  return (
    <div className="schedule-box">
      // TODO: Generated schedules goes here
    </div>
  )
}

interface SectionInput {
  disabled : boolean;
}

function Section({ disabled } : SectionInput) {
  return (
    <div>
      Mock Section
      <input type="checkbox" disabled={disabled}/>
    </div>
  )
}

function Course() {
  const [enabled, setEnabled] = React.useState(false);

  function handleActivate(event : any) {
    setEnabled(!enabled)
  }

  return (
    <div>
      Mock Course
      <input type="checkbox" checked={enabled} onClick={handleActivate}/>
      <Section disabled={!enabled}/>
    </div>
  )
}

// TODO: Here goes possible courses
function CourseContainer(){
  return (
    <div className="course-container">
      <Course/>
      <Course/>
    </div>
  )
}
function GenerateButton(){
  async function sendGenerateSignal(event : any) {
    alert("We sent a signal to the server, awaiting response")
  }

  return (
    <div className="generate-button-container">
      <button onClick={sendGenerateSignal}> GENERAR </button>
    </div>
  )
}

function CareerSemesterSelection() {
  const [selectedCareer, setSelectedCareer] = React.useState("ingenieria_informatica") // Valor default
  const [selectedSemester, setSelectedSemester] = React.useState("20240205") // Valor default

  function handleCareerChange(event : any) {
    setSelectedCareer(event.target.value)
    // TODO: Add function that uses selectedSemester and event.target.value to fetch horarios
  }

  const handleSemesterChange = (event : any) => {
    setSelectedSemester(event.target.value)
    // TODO: Add function that uses selectedCareer and event.target.value to fetch horarios
  }

  return (
    <div>
      <div className="semester-dropdown-container">
        <select value={selectedSemester} onChange={handleSemesterChange}>
          <option value="20240205">2024 Feb-Jun</option>
        </select> 
      </div>
      <div className="career-dropdown-container">
        <select value={selectedCareer} onChange={handleCareerChange}>
          <option value="ingenieria_informatica">Ingenieria Informatica</option>
          <option value="theology">Teologia</option>
        </select> 
      </div>
    </div>
  )
}

function CourseBox() {
  return (
    <div className="course-box">      
        <CareerSemesterSelection/>
        <CourseContainer/>
        <GenerateButton/>
    </div>
  )
}


export default function GenerationInterface() {
  return (
    <div>
      <NavigationBar />
      <div className="main-container">
        <CourseBox />
        <ScheduleBox />
      </div>
    </div>
  )
}