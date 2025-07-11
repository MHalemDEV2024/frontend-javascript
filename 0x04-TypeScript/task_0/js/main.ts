interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mohamed",
  lastName: "Saeed",
  age: 25,
  location: "Cairo",
};

const student2: Student = {
  firstName: "Sarah",
  lastName: "Ali",
  age: 22,
  location: "Alexandria",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
tableBody.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
