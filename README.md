# Frontend JavaScript  
<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=black" alt="Webpack"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint"/>
</p>

A collection of modern JavaScript and TypeScript projects developed as part of the **ALX Frontend Curriculum**. These projects emphasize strong software engineering principles, deep language understanding, and practical problem-solving skills.

---

## 📚 Overview

This repository covers core frontend concepts from fundamentals to advanced topics:

- DOM manipulation  
- ES6+ features  
- Async JavaScript (Promises, async/await)  
- Data structures & algorithms  
- OOP and functional programming  
- TypeScript fundamentals and advanced types  
- Webpack and build tooling  

Each project targets specific learning goals aligned with industry best practices.

---

## 📁 Directory Structure

```bash
0x04-TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
├── task_5/
└── README.md

```
## 🧠 Tasks Overview

---

### ✅ Task 0: Creating an Interface for a Student  
📁 `task_0/js/main.ts`

**Description:**  
- Define `Student` interface  
- Create array of students  
- Render table showing students’ first names and locations using Vanilla JS  

---

### ✅ Task 1: Let's Build a Teacher Interface  
📁 `task_1/js/main.ts`

**Description:**  
- Define `Teacher` interface with readonly, optional, and dynamic attributes  
- Extend `Teacher` to `Directors` interface  
- Implement `printTeacher(firstName, lastName)` function  
- Define `StudentClass` with constructor and methods described via interfaces  

---

### ✅ Task 2: Advanced Types  
📁 `task_2/js/main.ts`

**Description:**  
- Define `DirectorInterface` and `TeacherInterface` with methods  
- Implement `Director` and `Teacher` classes  
- Function `createEmployee(salary)` returns `Director` or `Teacher` instance  
- Add `isDirector()` type guard and `executeWork()` function  
- Define literal type `Subjects = "Math" | "History"`  

---

### ✅ Task 3: Ambient Namespaces  
📁 `task_3/js/interface.ts`, `crud.d.ts`, `main.ts`

**Description:**  
- Define `RowID` and `RowElement` types  
- Declare ambient types for `insertRow`, `updateRow`, `deleteRow` from `crud.js`  
- Use these functions with proper type declarations  

---

### ✅ Task 4: Namespace & Declaration Merging  
📁 `task_4/js/subjects/*.ts`

**Description:**  
Define `Subjects` namespace with:  
- `Teacher` interface  
- `Subject` base class  
- `Cpp`, `React`, `Java` classes extending `Subject`  
- Add experience properties via declaration merging  
- Implement methods `getRequirements()` and `getAvailableTeacher()`  

---

### ✅ Task 10: Update main.ts in Task 4  
📁 `task_4/js/main.ts`

**Description:**  
- Instantiate subjects (`Cpp`, `Java`, `React`) and a teacher  
- Call `getRequirements()` and `getAvailableTeacher()` and log results  

---

### ✅ Task 11: Brand Convention & Nominal Typing  
📁 `task_5/js/main.ts`

**Description:**  
- Define branded interfaces `MajorCredits` and `MinorCredits`  
- Implement summing functions `sumMajorCredits()` and `sumMinorCredits()`  

## 🛠 Project Setup

Each `task_*` folder has its own configuration files. To build and run a task, use the following commands:

```bash
cd task_X
npm install
npm run build
```

Make sure each task folder includes the following files:

- `package.json`
- `webpack.config.js`
- `tsconfig.json`
- `.eslintrc.js` (if applicable)

---

## 🔧 Technologies Used

| Technology | Purpose                          |
|------------|---------------------------------|
| TypeScript | Static typing and advanced features |
| Webpack    | Bundling and build tooling       |
| ESLint     | Code linting and quality         |
