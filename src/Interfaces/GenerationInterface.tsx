import NavigationBar from "./NavigationBar"
import CourseSemesterContainer from "./CourseSemesterContainer"
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

function CourseBox() {
  return (
    <div className="course-box">      
        <CourseSemesterContainer/>
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