const arr = [5, 1, 2, 3, 4];

//Filter toma los valores de un arreglo y devuelve los que son true
const r = arr.filter((el, i) => {
  console.log(i);
  return el > 2;
});

console.log(r);

//Toma todos los elementos que hay dentro de un arreglo, les aplica una funcion y retorna un arreglo de la misma longitud
const mapped = arr.map((el) => `<h1>${el}</h1>`);
console.log(mapped);

const users = [
  { id: 1, name: "Chanchito feliz" },
  { id: 2, name: "Chanchito triste" },
  { id: 3, name: "Chanchito emocionado" },
  { id: 4, name: "Felipe" },
];

const mappedUser = users.map((user) => `<h1>${user.name}</h1>`);
console.log(mappedUser);

//Rudece toma todos los elementos de un arreglo y devuelve todo los elementos que nosotros queramos

// const r1 = arr.reduce((acc, el) => acc + el, 0);
// const getMax = (a, b) => Math.max(a, b);
// const r1 = arr.reduce(getMax, 0);

// console.log(r1);

// const r1 = users.reduce((acc, el) => `${acc === "" ? "" : `${acc}, `}${el.name}`, "");

const r1 = users.reduce((acc, el) => {
  if (el.id < 3) {
    return acc;
  }
  return acc.concat(el);
}, []);

console.log(r1);
