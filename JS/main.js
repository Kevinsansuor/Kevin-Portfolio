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

btn_hdv.forEach(item => item.onclick= () =>{ 
    console.log('Descargando hoja de vida');
        const downloadInstance = document.createElement('a');
        downloadInstance.href = '../ASSETS/hoja-de-vida.pdf';
        downloadInstance.target = '_blank';
        downloadInstance.download = 'Hoja de vida online de Kevin Santiago Suarez Ortega';

        document.body.appendChild(downloadInstance);
        downloadInstance.click();
        document.body.removeChild(downloadInstance);

        //https://www.youtube.com/watch?v=2gvvrYEHS5g
        //https://jsremote.jobs/tutorials/query-selector/
});