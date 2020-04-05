const students = [
  {id: 21, name: 'Omor Sunny'},
  {id: 22, name: 'Rubel'},
  {id: 23, name: 'pakhi'},
  {id: 24, name: 'rasel'},
  {id: 25, name: 'Tahmid'}
];

const names = students.map(s => s.name);
const IDs = students.map(s => s.id);
// console.log(names);
// console.log(IDs);
const single = students.find(s => s.id==23);
console.log(single);