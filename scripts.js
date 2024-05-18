//DOM Viajes

//let fragment = document.createDocumentFragment();

//Bienvenidos
const insertBienvenidos = () => {

    const arrBienvenidos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
    let randomBienvenidos = Math.floor(Math.random()*arrBienvenidos.length);

    const arrTextBienvenidos = [];
    for (let i=0; i<arrBienvenidos.length; i++) {
        arrTextBienvenidos.push(`Image ${i+1}`);
    }

    const divBienvenidos = document.getElementById('bienvenidos');
    const imgBienvenidos = document.createElement('img');
    divBienvenidos.appendChild(imgBienvenidos);

    imgBienvenidos.src = `./banner/${arrBienvenidos[randomBienvenidos]}`;
    imgBienvenidos.title = arrTextBienvenidos[randomBienvenidos];
    imgBienvenidos.alt = arrTextBienvenidos[randomBienvenidos];

}
insertBienvenidos();


//Recomendados
const insertRecomendados = () => {



}
insertRecomendados();


//Destinos
const insertDestinos = () => {

    const arrDestinos = ['Australia', 'Suiza', 'País Vasco', 'Paises Bajos', 'Dinamarca'];

    const divDestinos = document.getElementById('destinos');
    const selectDestinos = document.createElement('select');
    divDestinos.appendChild(selectDestinos);

    arrDestinos.forEach((destino) => {
        const optionDestinos = document.createElement('option');
        //fragment.appendChild(optionDestinos);
        selectDestinos.appendChild(optionDestinos);
        optionDestinos.value = destino;
        optionDestinos.text = destino;
    });

}
insertDestinos();