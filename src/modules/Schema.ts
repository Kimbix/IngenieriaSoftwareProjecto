import * as mongoose from 'mongoose';

/* const animalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sound: { type: String, required: true },
  },
  {
    methods: {
      speak() {
        console.log(`${this.sound}!`);
      },
    },
  }
);

export type Animal = mongoose.InferSchemaType<typeof animalSchema>;
export const Animal = mongoose.model("Animal", animalSchema); */
const SessionSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  day: { type: Number, required: true }
});

type TSession = mongoose.InferSchemaType<typeof SessionSchema>;
export const SessionModel = mongoose.model("Session", SessionSchema);
export interface ISession extends TSession {}

const SectionSchema = new mongoose.Schema({
  nrc: { type: String, required: true },
  hours: { type: [SessionSchema], required: true }
});

type TSection = mongoose.InferSchemaType<typeof SectionSchema>;
export interface ISection extends TSection{}
export const SectionModel = mongoose.model("Section", SectionSchema);

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sections: { type: [SectionSchema], required: true }
});

export type TSubject = mongoose.InferSchemaType<typeof SubjectSchema>;
export interface ISubject extends TSubject {}
export const subjectModel = mongoose.model("Subject", SubjectSchema);

const ScheduleSchema = new mongoose.Schema({
  primitivo: { type: Boolean, required: false },
  subjects: { type: [SubjectSchema], required: true }
});

export type TSchedule = mongoose.InferSchemaType<typeof ScheduleSchema>;
export interface ISchedule extends TSchedule {}

export const scheduleModel = mongoose.model("Schedule", ScheduleSchema);
/* 
export type Animalote = mongoose.InferSchemaType<typeof animalSchema>;
export const animal = mongoose.model("Animal", animalSchema); */