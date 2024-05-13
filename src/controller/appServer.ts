import express from 'express';

import * as CSchedules from '../modules/Schedule';
import {
  connectToDatabase,
  disconnectFromDatabase,
  returnSubjects,
    saveSubjectDB
} from './ControllerDB';

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
const subject1 = new CSchedules.Subject("Subject 1", [section1, section2], ["Carrera1", "Carrera2"]);
const subject2 = new CSchedules.Subject("Subject 2", [], ["carrera3"]);
const schedule1 = new CSchedules.Schedule("dehidalgo.22@est.ucab.edu.ve", [subject1, subject2]);

await connectToDatabase();

// Crear una instancia de Express
const app = express();

// Ruta para obtener todas las clases
app.get('/getClasses', async (req, res) => {
    try {
        // Obtener todas las clases de la base de datos
        const clases = await returnSubjects();

        // Enviar las clases como respuesta en formato JSON
        res.json(clases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las clases' });
    }
});

// Ruta para guardar una sección
app.post('/guardarSeccion', async (req, res) => {
    try {
        // Obtener el JSON de materias por guardar del cuerpo de la solicitud
        const { materias } = req.body;

        let SubjectsToSave:CSchedules.Subject=JSON.parse(materias);

        // Llamar a la función saveSubject para guardar las materias
        await saveSubjectDB(SubjectsToSave);

        // Enviar una respuesta exitosa
        res.json({ message: 'Materias guardadas exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar las materias' });
    }
});

// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

console.log(JSON.stringify(session1));

await disconnectFromDatabase();