const backgrounds = [
    'img/prueba.jpg',
    'img/Fotografia-Original-Novios-enamorados-bajo-un-velo.jpg',
    'img/Novia-camina-en-la-orilla-del-mar-vestida-con-traje-de-boda.jpg',
    'img/istockphoto-1190043570-612x612.jpg'
];


function cambiarFondo() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];
    document.body.style.backgroundImage = `url(${randomBackground})`;
}
cambiarFondo();
setInterval(cambiarFondo, 5000); 
