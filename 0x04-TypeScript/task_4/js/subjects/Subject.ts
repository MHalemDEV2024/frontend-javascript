// js/subjects/Subject.ts
import { Teacher } from './Teacher.js';

export default class Subject {
  teacher!: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}
