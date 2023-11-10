const URL = 'https://jsonplaceholder.typicode.com/users'; //Variable URL donde hacemos referencia al origen de los datos.
fetch(URL) //Función fetch que nos permite hacer una petición a un servidor.
    .then(response => response.json()) //Función then que nos permite obtener la respuesta del servidor en formato JSON.
    .then(data => mostrarData(data)) //Función then que nos permite obtener los datos del servidor.
    .catch(error => console.log(error)); //Función catch que nos permite obtener el error del servidor.   

    const mostrarData = (data) => { //Función mostrarData que nos permite mostrar los datos del servidor.
        console.log(data); //Imprimimos los datos del servidor en la consola.
        let body = "" //Variable body que nos permite almacenar los datos del servidor.
        for (let i = 0; i < data.length; i++) { //Ciclo for que nos permite recorrer los datos del servidor.
            body += "<tr>"; //Variable body que nos permite almacenar los datos del servidor.
            body += "<td>" + data[i].id + "</td>";
            body += "<td>" + data[i].name + "</td>";
            body += "<td>" + data[i].username + "</td>";
            body += "<td>" + data[i].email + "</td>";
            body += "</tr>"; 
        }
        document.getElementById("data").innerHTML = body; //Imprimimos los datos del servidor en el HTML.
    }