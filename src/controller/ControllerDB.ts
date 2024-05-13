import * as mongoose from "mongoose";

import * as CSchedules from "../modules/Schedule";
import * as mongoModels from "../modules/Schema";

// create new Schedule
const a1 = new Date(0);
const a2 = new Date(1);
const a3 = new Date(2);
const a4 = new Date(3);
const a5 = new Date(4);
const a6 = new Date(5);

const session1 = new CSchedules.Session(a1, a2);
const session2 = new CSchedules.Session(a3, a4);
const session3 = new CSchedules.Session(a5, a6);

const section1 = new CSchedules.Section("Section 1", [session1, session2]);
const section2 = new CSchedules.Section("Section 2", [session3]);

const subject1 = new CSchedules.Subject(
  "Subject 1",
  [section1, section2],
  ["Carrera1", "Carrera2"]
);
const subject2 = new CSchedules.Subject("Subject 2", [], ["carrera3"]);

const schedule1 = new CSchedules.Schedule(true, [subject1, subject2]);

// connect to the database
export async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/horariospp");
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos\n" + error + "\n");
  }
}

// disconnect from the database
export async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
    console.log("Desconexión exitosa de la base de datos");
  } catch (error) {
    console.error("Error al desconectar de la base de datos\n" + error + "\n");
  }
}

// saves to the database
/**
 * saveSession
 */
function saveSession(session: CSchedules.Session) {
  const sessionData = session.saveSession();
  // Crear una nueva instancia de SessionModel con los datos de session1
  const docsession1 = new mongoModels.SessionModel(sessionData);
  // Guardar la sesión en la base de datos
  return docsession1;
}

/**
* saveSecction
:  */
function saveSection(section: CSchedules.Section) {
  // Convertir el objeto section a un formato que mongoose pueda entender
  const sessions = section.hours.map((hour) => {
    // Aquí asumimos que saveSession devuelve un objeto de sesión
    const sessionData = saveSession(hour);
    return new mongoModels.SessionModel(sessionData);
  });

  // Crear una nueva instancia de Section con los datos de las sesiones
  const docSection = new mongoModels.SectionModel({
    nrc: section.nrc,
    sessions: sessions,
  });

  // Guardar la sección en la base de datos
  return docSection;
}

function saveSubject(subject: CSchedules.Subject) {
  const sections = subject.sections.map((section) => {
    // Aquí asumimos que saveSection devuelve un objeto de sección
    const sectionData = saveSection(section);
    return new mongoModels.SectionModel(sectionData);
  });

  // Crear una nueva instancia de Subject con los datos de las secciones
  const docSubject = new mongoModels.SubjectModel({
    name: subject.name,
    sections: sections,
    pensum: subject.pensumList,
  });

  // Guardar el tema en la base de datos
  return docSubject;
}

function saveSchedule(schedule: CSchedules.Schedule) {
  const subjects = schedule.subjects.map((subject) => {
    // Aquí asumimos que saveSubject devuelve un objeto de tema
    const subjectData = saveSubject(subject);
    return new mongoModels.SubjectModel(subjectData);
  });

  // Crear una nueva instancia de Schedule con los datos de los temas
  const docSchedule = new mongoModels.ScheduleModel({
    primitivo: schedule.primitivo,
    subjects: subjects,
  });

  // Guardar el horario en la base de datos
  return docSchedule;
}

// Guardar el horario en la base de datos
export async function saveSubjectDB(subject: CSchedules.Subject) {
  const docSubject = saveSubject(subject);
  await docSubject.save();
}
export async function saveSectionDB(Section: CSchedules.Section) {
  const docSection = saveSection(Section);
  await docSection.save();
}
export async function saveScheduleDB(Schedule: CSchedules.Schedule) {
  const docSchedule = saveSchedule(Schedule);
  await docSchedule.save();
}
export async function saveSessionDB(session: CSchedules.Session) {
    const docSession = saveSession(session);
    await docSession.save();
    }
//queries

// Leer
export async function readScheduleDB() {
  return await mongoModels.ScheduleModel.find();
}

export async function readSectionDB(nrc: string) {
  return await mongoModels.SectionModel.find({nrc: nrc});
}
/* // Obtener una materia por su pensum
export async function readSubjectDB(carrera: string) {
  try {
    const materias = await mongoModels.SubjectModel.find();
    return materias.filter((materia) => materia.pensum.includes(carrera));
    
  } catch (error) {
    console.error("Error al leer las materias de la base de datos\n" + error + "\n");
  }
} */
// Obtener una materia por su pensum
export async function readAllSubjectDB() {
  try {
    return await mongoModels.SubjectModel.find();
  } catch (error) {
    console.error("Error al leer las materias de la base de datos\n" + error + "\n");
  }
}

// Buscar Materias en la base de datos
/* 
    * añadir lista de Carreras a las Materias

    * añadir lista de Profesores a las Secciones
    * Buscar Queri de materias por Carrera
 */
// const a= await readSectionDB("Section 1");
// console.log(a);

// read all Animals
/* const schedules = await scheduleModel.find();
console.log(schedules[0]); // logs "Moo!"
 */

// disconnect