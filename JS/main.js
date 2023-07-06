let menu = document.querySelector('.nav-mob');
let nav_mob = document.querySelector('.links');
let recargar = document.querySelector('.logo');
let contacto = document.querySelector('.cta');
let ajustador = document.querySelector('.solapador');

menu.onclick = () =>{
    setTimeout(function(){
    }, 1000);
    nav_mob.classList.toggle('active');
    ajustador.classList.toggle('active')
};

ajustador.onclick = () =>{
    nav_mob.classList.remove('active');
    ajustador.classList.remove('active');
    console.log("close");
}

nav_mob.onclick = () =>{
    nav_mob.classList.remove('active');
    ajustador.classList.remove('active');
    console.log("close");
}

recargar.onclick = () =>{
    window.scrollTo(0, 0);
    setTimeout(function(){
    }, 1000);
};

contacto.onclick = () =>{
    window.location.href = '#contacto';
};

