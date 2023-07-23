const form = document.querySelector('#form');

form.addEventListener('submit', ManejadorSubmit)

function ManejadorSubmit(event) {
    event.preventDefault()


    const formn = new FormData(this);
    console.log(formn.get('Nombre'));


}