const form = document.querySelector('#form');



form.addEventListener('submit', ManejadorSubmit)

async function ManejadorSubmit(event) {
    event.preventDefault()

    const formn = new FormData(this);

    const response = await fetch(this.action,{
        method: this.method, 
        body: formn,
        headers:{
            'Accept': 'application/json'
        }
    })

    if (response.ok){
        this.reset();
        modal.style.display = "block";
    } 

    var datos = {
        nombre: formn.get('Nombre'),
        telefono: formn.get('Telefono'),
        email: formn.get('Email'),
        ciudad: formn.get('Ciudad'),
        mensaje: formn.get('Mensaje')
      };


}


// Get the modal
var modal = document.querySelector(".modal");

var close_modal = document.querySelector('.close-modal');
// Get the button that opens the modal
// When the user clicks on <span> (x), close the modal

close_modal.onclick=()=>{
    modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}

