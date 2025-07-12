// js/subjects/Cpp.ts
import Subject from './Subject.js';
import { Teacher } from './Teacher.js';
export default class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (this.teacher?.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}