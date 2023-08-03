const observer = new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        console.log(entry);

        if(entry.isIntersecting){
            entry.target.classList.add('show-obs');
        } else{
            entry.classList.remove('show-obs');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden-obs');
hiddenElements.forEach((element)=>{
    observer.observe(element)
})

const observer_cert = new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        console.log(entry);

        if(entry.isIntersecting){
            console.log(e);
            entry.target.classList.add('show-obs-certificados');
        } else{
            entry.classList.remove('show-obs-certificados');
        }
    });
});


const hiddenElements_cert = document.querySelectorAll('.hidden-obs-certificados');
hiddenElements_cert.forEach((element)=>{
    observer_cert.observe(element)
})