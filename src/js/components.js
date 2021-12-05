import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const prueba = (texto) =>{
    console.log('Creando elemento H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Texto de prueba: ${texto}.`;

    document.body.append(h1);

    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;

    document.body.append(img);
}