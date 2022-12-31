const btncierra = document.querySelector('.btn-cierra'); 
const btnadelanta = document.querySelector('.btn-adelanta'); 
const btnretrocede = document.querySelector('.btn-retrocede');
const imagenes = document.querySelectorAll('.galeria img'); 
const lightbox = document.querySelector('.contenedor-principal'); 
const imagenactiva = document.querySelector('.imagen-activa'); 
let indiceimagen = 0; 

const abrelihgtbox = (event) =>{
    imagenactiva.src = event.target.src; 
    lightbox.style.display = 'flex'; 
    indiceimagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) =>{
    imagen.addEventListener('click', abrelihgtbox); 
}); 

btncierra.addEventListener('click', ()=>{
    lightbox.style.display = 'none'; 
});

const adelantaimagenes = () =>{
    if(indiceimagen === imagenes.length -1){
        indiceimagen = -1;  
    }
    imagenactiva.src = imagenes[indiceimagen + 1].src;
    indiceimagen++ 
}
btnadelanta.addEventListener('click', adelantaimagenes); 

const retrocederimagen = () => {
    if(indiceimagen === 0){
        indiceimagen = imagenes.length; 
    }
    imagenactiva.src = imagenes[indiceimagen -1].src
    indiceimagen--; 
}
btnretrocede.addEventListener('click', retrocederimagen); 