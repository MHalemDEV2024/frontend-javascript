// js/subjects/React.ts
import { Teacher } from './Teacher.js';
import Subject from './Subject.js';

export default class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (this.teacher?.experienceTeachingReact) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
