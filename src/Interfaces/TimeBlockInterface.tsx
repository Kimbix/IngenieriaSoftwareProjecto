import React, { type MouseEventHandler } from "react"

import trash from "../svg/trash-svgrepo-com.svg"

import "./TimeBlockInterface.css"
import NavigationBar from "./NavigationBar"
import CourseSemesterContainer from "./CourseSemesterContainer"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"

/* TODO
  Funcion que envie al backend la seccion modificada
  Funcion que envie al backend una instruccion para remover la seccion
  Funcion que envie al backend una instruccion para agregar una nueva
*/

interface CourseProperties {
  displayCourse: Course
  newSectionBind: any
  removeSectionBind: any
  selectSectionBind: any 
}

function Course({ displayCourse, newSectionBind, removeSectionBind, selectSectionBind }: CourseProperties) {
  function addNewSection() {
    displayCourse = newSectionBind(displayCourse)
  }

  function removeExistingSection(section: Section) {
    displayCourse = removeSectionBind(displayCourse, section)
  }

  return (
    <div>
      <div className="course">
        <div className="course-name">
          {displayCourse.name}
        </div>
        <div className="add-section">
          <button onClick={addNewSection} type="button">Add Section</button>
        </div>
      </div>
      <div>
        {displayCourse?.sectionList.map((value) => {
          return <div className="section">
            <div>
              <button onClick={() => selectSectionBind(value)}>
                NRC: {value.nrc}
              </button>
            </div>
            <div className="delete-section">
              <button onClick={() => removeExistingSection(value)}> TRASH </button>
            </div>
          </div>; 
        })
        }
      </div>
    </div>
  )
}

interface HourSelectorProperties {
  changeBind: any
  hour: number
  minutes: number
  date: Date
}

function HourSelector({ changeBind, hour, minutes, date }: HourSelectorProperties) {
  const handleHourChange = (event: any) => {
    hour = event.target.value
    date.setHours(hour)
    changeBind()
  }

  const handleMinutesChange = (event: any) => {
    minutes = event.target.value
    date.setMinutes(minutes)
    changeBind()
  }

  return (
    <div className="hour-selection-container">
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
        <option value="00">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
      </select>
    </div>
  )
}

interface DaySelectorProperties {
  changeBind: any
  day: number
}

function DaySelector({ day, changeBind }: DaySelectorProperties) {
  const handleDayChange = (event: any) => {
    day = event.target.value;
    changeBind()
  }

  return (
    <select value={day} onChange={handleDayChange}>
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

interface TimeBlockProperties {
  changeBind: any;
  dayValue: number;
  startHour: Date;
  endHour: Date;
}

function TimeBlock({ changeBind, dayValue, startHour, endHour }: TimeBlockProperties) {
  return (
    <li className="timeblock-container">
      <DaySelector changeBind={changeBind} day={dayValue} />
      <HourSelector changeBind={changeBind} hour={startHour.getHours()} minutes={startHour.getMinutes()} date={startHour}/>
      <HourSelector changeBind={changeBind} hour={endHour.getHours()} minutes={endHour.getMinutes()} date={endHour}/>
    </li>
  )
}

interface ActionableButton {
  action: MouseEventHandler;
}

function SaveButton({ action }: ActionableButton) {
  return (
    <div className="save-button">
      <button onClick={action} type="button">Save</button>
    </div>
  )
}

interface Course {
  name: string;
  sectionList: Array<Section>;
}

interface Class {
  day: number;
  start: Date
  end: Date;
  section: Section;
}

interface Section {
  nrc: string;
  course: Course;
  classesList: Array<Class>;
}

interface EditableSectionContainerProperties {
  selectedSection: Section
  updateSectionBind: any
  addClassBind: any
  removeClassBind: any
  updateClassBind: any
}

function EditableSectionContainer({ selectedSection, updateSectionBind, addClassBind, removeClassBind, updateClassBind }: EditableSectionContainerProperties) {
  function addNewClass() {
    addClassBind(selectedSection)
  }

  function removeClass(classs: Class) {
    removeClassBind(selectedSection, classs)
  }

  function updateClassTime(classs: Class, time: TimeBlockProperties) {
    let newClass = classs
    newClass = {
      ...classs,
      day: time.dayValue,
      start: time.startHour,
      end: time.endHour
    }
    updateClassBind(selectedSection, classs, newClass)
  }

  function updateSectionNRC(event: any) {
    let newSection : Section = selectedSection
    newSection = { ...newSection,
      nrc: event.target.value
    } 
    updateSectionBind(selectedSection, newSection)
  }

  function debugPrintHour(time: TimeBlockProperties) {
    alert(
      "Day: " + time.dayValue + 
      "\n" + "Start: " + time.startHour.getHours() + ":" + time.startHour.getMinutes() +
      "\n" + "End: " + time.endHour.getHours() + ":" + time.endHour.getMinutes()
    )
  }

  return (
    <div className="editable-section-container">
      <div className="editable-section-header">
        <div className="basic-info" >{selectedSection.course.name}</div>
        <div>NRC: <input value={selectedSection.nrc} onChange={updateSectionNRC} type="text" /></div>
      </div>
      <div className="teacher-container">Teacher: <input type="text" /></div>
      <div className="day-container">Dias: <button onClick={() => addNewClass()}>ADD</button></div>
      <div>
        {selectedSection.classesList.map((value) => {
          return <div className="day-buttons">
            <TimeBlock changeBind={() => updateClassTime(value, { changeBind: undefined, dayValue: value.day, startHour: value.start, endHour: value.end })} dayValue={value.day} startHour={value.start} endHour={value.end}/>
            <button onClick={() => debugPrintHour({ changeBind: undefined, dayValue: value.day, startHour: value.start, endHour: value.end })}> TEST </button>
            <div className="delete-day">
              <button onClick={() => removeClass(value)}> TRASH </button>
            </div>
          </div>
        })}
      </div>
      <SaveButton action={() => alert("Shoud send to server")} />
    </div>
  )
}

const testingCourse: Course = {
  name: "Matematica Basica",
  sectionList: []
}

const testCourse2: Course = {
  name: "Calculo I",
  sectionList: []
}

const testCourse3: Course = {
  name: "porgmaram I",
  sectionList: []
}

export default function TimeBlockInterface() {
  const [selectedSection, setSelectedSection] = React.useState<Section | undefined>(undefined);
  const [loadedCourses, setLoadedCourses] = React.useState<Array<Course>>(
    // Here should go a function to load courses from the backend
    [testingCourse, testCourse2, testCourse3]
  );

  function changeSelectedSection(section: Section) {
    setSelectedSection(section)
    console.log("Section NRC: " + section.nrc + " from course " + section.course.name)
  }

  // Adds new section to a specified course
  function addSectionToCourse(course: Course): Course {

    function findFreeNrc(list: Section[]): string {
      let max = 0;
      list.forEach(x => {
        let x_int = parseInt(x.nrc)
        if (x_int >= max) { max = x_int + 1; }
      });
      return max.toString();
    }

    let ret: Course = course
    setLoadedCourses(
      loadedCourses.map(x => {
        if (x !== course) return x;
        ret = {
          ...x,
          sectionList: x.sectionList.concat({ course: course, nrc: findFreeNrc(x.sectionList), classesList: [] })
        }
        return ret
      })
    )
    return ret
  }

  function removeSectionFromCourse(course: Course, section: Section): Course {
    let ret: Course = course
    setLoadedCourses(
      loadedCourses.map((x) => {
        if (x !== course) return x;
        ret = {
          ...x,
          sectionList: x.sectionList.filter((y) => y !== section)
        }
        return ret
      })
    )
    if (section === selectedSection) { setSelectedSection(undefined); }
    return ret
  }
  
  function updateSectionFromCourse( section: Section, newSection : Section): Section {
    setLoadedCourses(
      loadedCourses.map((x) => {
        if (!x.sectionList.includes(section)) return x;
        x.sectionList[x.sectionList.indexOf(section)] = newSection
        return x
      })
    )
    setSelectedSection(newSection)
    return newSection
  }

  function addClassToSection(section: Section): Section {
    function ReturnDefaultDate(): Date {
      let ret = new Date()
      ret.setMinutes(0)
      ret.setHours(6)
      return ret
    }

    setLoadedCourses(
      loadedCourses.map((x) => {
        if (!x.sectionList.includes(section)) return x;
        section.classesList.push({ day: 0, end: ReturnDefaultDate(), start: ReturnDefaultDate(), section: section })
        return x;
      })
    )
    setSelectedSection(section)
    return section
  }

  function removeClassFromSection(section: Section, classs: Class): Section {
    setLoadedCourses(
      loadedCourses.map((x) => {
        if (!x.sectionList.includes(section)) return x;
        console.log(classs.day)
        section.classesList = section.classesList.filter(y => y !== classs)
        return x;
      })
    )
    setSelectedSection(section)
    return section
  }

  function updateClassFromSection(section: Section, classs: Class, newClass: Class): Section {
    setLoadedCourses(
      loadedCourses.map((x) => {
        if (!x.sectionList.includes(section)) return x;
        section.classesList[section.classesList.indexOf(classs)] = newClass
        return x;
      })
    )
    setSelectedSection(section)
    return section
  }

  return (
    <div>
      <NavigationBar />
      <div className="main-container">
        <div className="course-box-container">
          <CourseSemesterContainer />
          <div>
            {loadedCourses?.map((value) => {
              return <Course displayCourse={value} newSectionBind={addSectionToCourse} removeSectionBind={removeSectionFromCourse} selectSectionBind={changeSelectedSection} />
            })}
          </div>
        </div>
        <div className="section-edit-container">
          {selectedSection != undefined && <EditableSectionContainer selectedSection={selectedSection} updateSectionBind={updateSectionFromCourse} addClassBind={addClassToSection} removeClassBind={removeClassFromSection} updateClassBind={updateClassFromSection}/>}
        </div>
      </div>
    </div>
  )
}