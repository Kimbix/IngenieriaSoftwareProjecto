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
    <div className="section">
      <div>
        Mock Section
      </div>
      <div className="checkbox">
        <input type="checkbox" disabled={disabled}/>
      </div>
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
      <div className="course">
        <div className="course-name">
          Mock Course
        </div>
        <div className="checkbox">
          <input type="checkbox" checked={enabled} onClick={handleActivate}/>
        </div>
      </div>
      <div>
        <Section disabled={!enabled}/>
        <Section disabled={!enabled}/>
      </div>
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