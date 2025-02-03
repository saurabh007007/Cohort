type Employee = {
  name: string;
  startDate: Date;
};
type Managerr = {
  name: string;
  department: string;
};

type TeamLead = Employee & Managerr;

let e: Employee = { name: "John", startDate: new Date() };
let m: Managerr = { name: "Jane", department: "Engineering" };
let tl: TeamLead = {
  name: "Jack",
  startDate: new Date(),
  department: "Engineering",
};
