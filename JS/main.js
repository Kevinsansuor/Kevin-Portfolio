let menu = document.querySelector('.nav-mob');
let nav_mob = document.querySelector('.links');
let recargar = document.querySelector('.logo');
let ajustador = document.querySelector('.solapador');
let link_autor = document.querySelector('.autor')


let link_sobre_mi = document.querySelector('.link.sobre-mi');
let link_educacion = document.querySelector('.link.educacion');
let link_proyectos = document.querySelector('.link.proyectos');
let link_blog = document.querySelector('.link.blog');
let contacto = document.querySelector('.cta');

let btn_contacto = document.querySelectorAll('.btn-contacto');
let btn_hdv = document.querySelectorAll('.btn-hdv')


link_sobre_mi.onclick =()=>{
    window.location.href = '#sobre-mi'
}

link_educacion.onclick =()=>{
    window.location.href = '#educacion'
}

link_proyectos.onclick =()=>{
    window.location.href = '#proyectos'
}

link_blog.onclick =()=>{
    window.location.href = '#blog'
}

contacto.onclick =()=>{
    window.location.href = '#contacto'
}

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



link_autor.onclick = () =>{
    window.open('https://github.com/Kevinsansuor', '_blank');
    window.scrollTo(0, 0); 
}

btn_contacto.forEach(item => item.onclick =()=>{
    window.location.href= '#contacto'
    //https://jsremote.jobs/tutorials/query-selector/
});

// btn_hdv.forEach(item => item.onclick= () =>{ //Dinosaurio
//     console.log('Descargando hoja de vida');
//         const downloadInstance = document.createElement('a');
//         downloadInstance.href = '../ASSETS/hoja-de-vida.pdf';
//         downloadInstance.target = '_blank';
//         downloadInstance.download = 'Hoja de vida online de Kevin Santiago Suarez Ortega';

//         document.body.appendChild(downloadInstance);
//         downloadInstance.click();
//         document.body.removeChild(downloadInstance);

//         //https://www.youtube.com/watch?v=2gvvrYEHS5g
//         //https://jsremote.jobs/tutorials/query-selector/
// });


btn_hdv.forEach(item => item.onclick= () =>{ 
console.log('Descargando hoja de vida');
    window.open('ASSETS/hoja-de-vida.pdf');

//https://www.youtube.com/watch?v=2gvvrYEHS5g
//https://jsremote.jobs/tutorials/query-selector/ --> Hay un problema, que al descargarla desde un servidor genera un archivo .html :7
 });

let link_instagram = document.querySelectorAll('#link-instagram');

link_instagram.forEach(e => e.onclick=()=>{
    window.open('https://www.instagram.com/ing_kevinsan/', 'nuevaVentana');
})

let link_linkedin = document.querySelectorAll('#link-linkedin');

link_linkedin.forEach(e => e.onclick=()=>{
    window.open('https://www.linkedin.com/in/kevin-suarez-o/');
});

let link_github = document.querySelectorAll('#link-github');

link_github.forEach(e => e.onclick=()=>{
    window.open('https://github.com/Kevinsansuor');
})

let link_twitter = document.querySelectorAll('#link-twitter');

link_twitter.forEach(e => e.onclick=()=>{
    window.open('https://twitter.com/KevinSanSuOr');
})

let link_behance = document.querySelectorAll('#link-behance');

link_behance.forEach(e => e.onclick=()=>{
    window.open('https://www.behance.net/ingkevsan');
})

let vista_proyectos_orslo = document.querySelector('.proyecto-orslo');

vista_proyectos_orslo.onclick =()=>{
    window.open('https://kevinsansuor.github.io/ORSLO-CAFE/');
}

let vista_proyectos_alura = document.querySelector('.proyecto-alura');

vista_proyectos_alura.onclick =()=>{
    window.open('https://kevinsansuor.github.io/alurageek/');
}

let vista_proyectos_listatareas = document.querySelector('.proyecto-listatareas');

vista_proyectos_listatareas.onclick =()=>{
    window.open('https://kevinsansuor.github.io/lista-tareas/');
}