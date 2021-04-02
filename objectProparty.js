const students = [
    {id: 21, name: "Pranto"},
    {id: 31, name: "Shanto"},
    {id: 41, name: "Simu"},
    {id: 71, name: "Eliash kanchon"}
];


const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>30)
const biggerOne = students.find(s=> s.id>30)
console.log(biggerOne);