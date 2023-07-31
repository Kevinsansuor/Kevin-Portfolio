const form = document.querySelector('#form');

form.addEventListener('submit', ManejadorSubmit)

function ManejadorSubmit(event) {
    event.preventDefault()


    const formn = new FormData(this);
    console.log(formn.get('Nombre'));

    var datos = {
        nombre: formn.get('Nombre'),
        telefono: formn.get('Telefono'),
        email: formn.get('.Email'),
        ciudad: formn.get('.Ciudad'),
        mensaje: formn.get('.Mensaje')
      };

      var xhr = new XMLHttpRequest();
  xhr.open("POST", "mailto:kevinsansuor@gmail.com");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(datos));

  // Si el envío se realizó correctamente, mostrar un mensaje de éxito
  if (xhr.status === 200) {
    alert("El mensaje se envió correctamente.");
  } else {
    alert("Hubo un error al enviar el mensaje.");
  }

}