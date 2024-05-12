import * as mongoose from 'mongoose';

import * as CSchedules from './Schedule';
import * as mongoModels from './Schema';

await mongoose.connect("mongodb://127.0.0.1:27017/horariospp");

// create new Schedule

const session1 = new CSchedules.Session(new Date(0), new Date(1));
const session2 = new CSchedules.Session(new Date(2), new Date(3));
const session3 = new CSchedules.Session(new Date(4), new Date(5));

const section1 = new CSchedules.Section("Section 1", [session1, session2]);
const section2 = new CSchedules.Section("Section 2", [session3]);

const subject1 = new CSchedules.Subject("Subject 1", [section1, section2]);
const subject2 = new CSchedules.Subject("Subject 2");

const schedule1 = new CSchedules.Schedule(true, [subject1, subject2]);

// saves to the database
/**
 * guardarHorario
 */
const session1data=session1.guardarSession();
    // Crear una nueva instancia de SessionModel con los datos de session1
    const docsession1 = new mongoModels.SessionModel(session1.guardarSession());
    // Guardar la sesión en la base de datos
    await docsession1.save();


// read all Animals
/* const schedules = await scheduleModel.find();
console.log(schedules[0]); // logs "Moo!"
 */ 


// disconnect
await mongoose.disconnect();
