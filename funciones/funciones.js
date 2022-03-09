function fn() {
  this.prop = "propiedad";
  return "Chanchito Feliz";
}

const r = new fn();

console.log(r);
