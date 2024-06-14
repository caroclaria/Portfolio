document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    scrollNav();
    mobileMenu();
    copiarContenido();
}

function scrollNav(){
    const navlinks = document.querySelectorAll('.header__navegacion-p a');
    navlinks.forEach(link =>{
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionscroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionscroll);
            section.scrollIntoView({behavior:'smooth'});
            
        })
    });
    
}

function mobileMenu(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', function(){
        const navegacion = document.querySelector('.header__navegacion');
        navegacion.classList.toggle('mostrar');

    });
}
async function copiarContenido(){
    const texto = document.getElementById('email').value;
    try {
        await navigator.clipboard.writeText(texto);  
         
    } catch(err){ 
        
    }
}