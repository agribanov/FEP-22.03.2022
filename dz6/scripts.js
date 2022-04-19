const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

const person = {
  id: 13,
  name: "Jean-Baptiste Emanuel Zorg",
  marks: [10, 9, 8, 9],
  address: {
    city: "Dnipro",
    country: "UA",
  },
};

const a = 3;
const str = "Hello world!";
const n = null;

const b = copy(a);

function copy(val) {
  if (typeof val !== "object" || val === null) return val;

  if (Array.isArray(val)) return val.map((el) => copy(el));

  const objCopy = {};
  for (let key in val) {
    objCopy[key] = copy(val[key]);
  }

  return objCopy;
}
