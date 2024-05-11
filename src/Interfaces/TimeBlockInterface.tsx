import React from "react"

import "./TimeBlockInterface.css"
import NavigationBar from "./NavigationBar"
import CourseSemesterContainer from "./CourseSemesterContainer"

/* TODO
  - Crear un contenedor para la materia, debe tener adentro:
    - Nombre de la materia
    - Boton agregar seccion
    - lista de secciones
  - Crear un contenedor para la seccion, debe tener adentro:
    - Nombre de la seccion
    - Ser clickeable para editar
    - Boton eliminar seccion
*/

interface SectionProperties {
  nrc : string
}

function Section({ nrc } : SectionProperties) {
  return (
    <div className="section">
      <div>
        NRC: {nrc}
      </div>
      <div className="delete-section">
        <button type="button">delete</button>
      </div> 
    </div>
  )
}


function Course() {
  return (
    <div>
      <div className="course">
        <div className="course-name">
          Course 1
        </div>
        <div className="add-course">
          <button type="button">Add Section</button> 
        </div>
      </div>
      <ul>
        <li> <Section nrc="123"/> </li>
        <li> <Section nrc="321"/> </li>
        <li> <Section nrc="000"/> </li>
        <li> <Section nrc="999"/> </li>
      </ul>
    </div>
  )
}


function CoursesContainer() {
  return (
    <div>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
    </div>
  )
}

function HourSelector() {
  const [hour, setHour] = React.useState(8)
  const [minutes, setMinutes] = React.useState(0)

  const handleHourChange = (event : any) => {
    setHour(event.target.value)
  }

  const handleMinutesChange = (event : any) => {
    setMinutes(event.target.value)
  }

  return (
    <div className ="hour-selection-container">
      <select value={hour} onChange={handleHourChange}>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <select value={minutes} onChange={handleMinutesChange}>
        <option value="0">0</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
      </select>
    </div>
  )
}

function DaySelector() {
  const [selection, setSelection] = React.useState("1")

  const handleDayChange = (event : any) => {
    setSelection(event.target.value);
  }

  return (
    <select value={selection} onChange={handleDayChange}>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
      <option value="7">Sunday</option>
    </select>
  )
}

function TimeBlock() {
  return (
    <li className="timeblock-container">
      <DaySelector/>
      <HourSelector/>
      <HourSelector/>
      <button>TRASH</button>
    </li>
  )
}

function EditableSectionContainer() {
  return (
    <div className="editable-section-container">
      <div className="editable-section-header">
        <div>SECCION TITLE</div>
        <div>NRC: <input type="text" /></div>
      </div>
      <div>Teacher: <input type="text" /></div>
      <div>Dias: <button>ADD</button></div>
      <div>
        <ul>
          <TimeBlock/>
        </ul>
      </div>
    </div>
  )
}

function SectionEditContainer() {
  return (
    <div className="section-edit-container">
      <EditableSectionContainer/>
    </div>
  )
}

function CourseBox() {
  return (
    <div className="course-box-container">
      <CourseSemesterContainer/>
      <CoursesContainer/>
    </div>
  )
}

export default function TimeBlockInterface() {
  return (
    <div>
      <NavigationBar/>
      <div className="main-container">
        <CourseBox/>
        <SectionEditContainer/>
      </div>
    </div>
  )
}