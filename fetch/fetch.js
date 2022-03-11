const url = "https://jsonplaceholder.typicode.com/users";

//Obtener datos de una API
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//Envio de datos mediante el metodo post

// fetch(url, {
//   method: "POST", //get, post, put, put, patch, delete
//   header: {
//     //Indicamos que el tipo de informacion es json
//     "Content-Type": "application/json",
//     //Indigamos quien esta ulitzando la aplicacion
//     Authorization: "Bearer acabediseexistiruntokemdeautorizacion",
//   },
//   //Para enviar datos dentro del body, es obligatorio enviar la informacion como un string
//   body: JSON.stringify({
//     name: "Chanchito Feliz",
//     website: "google.com",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const fn = async () => {
  const response = await fetch(url, {
    method: "POST", //get, post, put, put, patch, delete
    header: {
      //Indicamos que el tipo de informacion es json
      "Content-Type": "application/json",
      //Indigamos quien esta ulitzando la aplicacion
      Authorization: "Bearer acabediseexistiruntokemdeautorizacion",
    },
    //Para enviar datos dentro del body, es obligatorio enviar la informacion como un string
    body: JSON.stringify({
      name: "Chanchito Feliz",
      website: "google.com",
    }),
  });

  const data = await response.json();
  console.log(data);
};

fn();
