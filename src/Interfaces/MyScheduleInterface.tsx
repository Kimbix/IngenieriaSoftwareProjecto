import React from "react"

import NavigationBar from "./NavigationBar"
import "./MyScheduleInterface.css"

import { Schedule, Subject, Section, Session } from "../modules/Schedule.ts"

const dayNames = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
const dayHours = [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const empty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

interface ISession {
  section: ISection
  day: number
  start: Date
  end: Date
}

interface ISection {
  sessionList: ISession[]
  subject: ISubject
  nrc: string
}

interface ISchedule {
  sectionList: ISection[]
}

interface ISubject {
  color: string | undefined
  name: string
}

interface ScheduleViewerProperties {
  loadedSchedule: ISchedule
}

function ScheduleViewer({ loadedSchedule }: ScheduleViewerProperties) {
  const [subjectList, setSubjectList] = React.useState<ISubject[]>(getSubjectsFromSectionList())

  function assignMissingColors(subjectList: ISubject[]) {
    subjectList.map((subject) => {
      const color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")"
      subject.color = color
      return subject
    })
  }

  function getSubjectsFromSectionList(): ISubject[] {
    let ret = loadedSchedule.sectionList.map((value) => {
      return value.subject
    })
    assignMissingColors(ret)
    return ret
  }

  function hourInBetween(start: Date, end: Date, hour: number, minutes: number) {
    if (start.getHours() * 60 + start.getMinutes() <= hour * 60 + minutes
      && end.getHours() * 60 + end.getMinutes() > hour * 60 + minutes) {
      return true
    }
    return false
  }

  function hourIsSame(time: Date, hour: number, minutes: number): Boolean {
    if (time == undefined) return false
    if (time.getHours() * 60 + time.getMinutes() == hour * 60 + minutes) {
      return true
    }
    return false
  }

  function DateToString(time: Date): string {
    return "" + (time.getHours() > 9 ? time.getHours() : "0" + time.getHours()) + ":" + (time.getMinutes() == 0 ? "00" : time.getMinutes())
  }

  function CreateSubdivisions(sessionsToday: ISession[], hour: number): any {
    return <div className="hour-subdivision">
      {["00", "15", "30", "45"].map((subsection) => {
        let currentSession: ISession | undefined = sessionsToday.filter((session) => hourInBetween(session.start, session.end, hour + 6, parseInt(subsection)))?.at(0)
        if (currentSession == undefined) {
          return <div/>
        }

        let color = currentSession?.section?.subject.color
        let isFirstHour = hourIsSame(currentSession.start, hour + 6, parseInt(subsection))
        let borderTop = isFirstHour ? "2px solid #000" : undefined

        if (isFirstHour) {
          return <div style={{ background: color, borderTop: borderTop }}>
            {currentSession.section.subject.name} <br/>
            {"NRC: " + currentSession.section.nrc} <br/>
            {DateToString(currentSession.start) + " - " + DateToString(currentSession.end)}
          </div>
        }

        let minutes = parseInt(subsection)
        let hourMinus = (hour + 6) - (minutes + 15 < 0 ? 1 : 0)
        let minutesMinus = (minutes + 15) < 0 ? 45 : minutes + 15

        let isLastHour = hourIsSame(currentSession.end, hourMinus, minutesMinus)
        let borderBottom = isLastHour ? "2px solid #000" : undefined

        return <div style={{ background: color, borderBottom: borderBottom }} />
      })}
    </div>
  }

  return (
    <div className="grid-container">
      {dayHours.map((hour) => {
        return <div>
          {hour}
        </div>
      })}
      {
        dayNames.map((dayName) => {
          let sessionsToday: ISession[] = []
          loadedSchedule.sectionList.forEach((section) => {
            sessionsToday = sessionsToday.concat(section.sessionList.filter((session) => {
              return dayNames[session.day] == dayName
            }))
          })
          return empty.map((mock, index) => {
            return <>
              {index == 0 && <div> {dayName} </div>}
              {CreateSubdivisions(sessionsToday, index)}
            </>
          })
        })
      }
    </div>
  )
}

const sixam = () => {
  let date = new Date()
  date.setHours(6)
  date.setMinutes(0)
  return date
}

const eightam = () => {
  let date = new Date()
  date.setHours(8)
  date.setMinutes(0)
  return date
}

const fourpm = () => {
  let date = new Date()
  date.setHours(16)
  date.setMinutes(0)
  return date
}

const sixpm = () => {
  let date = new Date()
  date.setHours(18)
  date.setMinutes(0)
  return date
}

const twohalfpm = () => {
  let date = new Date()
  date.setHours(14)
  date.setMinutes(30)
  return date
}

const fourhalfpm = () => {
  let date = new Date()
  date.setHours(16)
  date.setMinutes(30)
  return date
}

let testSchedule: ISchedule = {
  sectionList: [
    {
      subject: { color: undefined, name: "Matematica Basica" },
      nrc: "32",
      sessionList: [
        { section: undefined, day: 0, start: sixam(), end: eightam() },
        { section: undefined, day: 2, start: sixam(), end: eightam() }
      ]
    },
    {
      subject: { color: undefined, name: "Calculo 1" },
      nrc: "50",
      sessionList: [
        { section: undefined, day: 0, start: fourpm(), end: sixpm() },
        { section: undefined, day: 2, start: fourpm(), end: sixpm() }
      ]
    },
    {
      subject: { color: undefined, name: "Program III" },
      nrc: "72",
      sessionList: [
        { section: undefined, day: 1, start: twohalfpm(), end: fourhalfpm() },
        { section: undefined, day: 3, start: twohalfpm(), end: fourhalfpm() }
      ]
    },
  ]
}

testSchedule.sectionList.map((section) => {
  section.sessionList.map((session) => {
    session.section = section
  })
})

export default function MySheduleInterface() {
  return (
    <div>
      <NavigationBar />
      <div className="main-container">
        <div>
          <ScheduleViewer loadedSchedule={testSchedule} />
        </div>
      </div>
    </div>
  )
}