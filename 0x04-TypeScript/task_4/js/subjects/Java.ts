// js/subjects/Java.ts
import { Teacher } from './Teacher.js';
import Subject from './Subject.js';

export default class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher?.experienceTeachingJava) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}