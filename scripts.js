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
    imgBienvenidos.alt =`Descripción de ${arrTextBienvenidos[randomBienvenidos]}`;

}
insertBienvenidos();


//Recomendados
const insertRecomendados = () => {

    const arrRecomendados = [
        ['viajes-1.jpg', 'Viaje 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.'],
        ['viajes-2.jpg', 'Viaje 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.'],
        ['viajes-3.jpg', 'Viaje 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.'],
        ['viajes-4.jpg', 'Viaje 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.'],
        ['viajes-5.jpg', 'Viaje 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.'],
        ['viajes-6.jpg', 'Viaje 6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.'],
        ['viajes-7.jpg', 'Viaje 7', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea.']
    ];

    const divRecomendados = document.getElementById('recomendados');

    arrRecomendados.forEach((recomendado) => {
        const articleRecomendados = document.createElement('article');
        divRecomendados.appendChild(articleRecomendados);
        articleRecomendados.classList.add('card');

        const imgRecomendados = document.createElement('img');
        articleRecomendados.appendChild(imgRecomendados);
        imgRecomendados.src=`./viajes/${recomendado[0]}`;
        imgRecomendados.title=recomendado[1];
        imgRecomendados.alt=`Descripción de ${recomendado[1]}`;

        // const h3Recomendados = document.createElement('h3');
        // articleRecomendados.appendChild(h3Recomendados);
        // h3Recomendados.innerText = recomendado[1];

        // const pRecomendados = document.createElement('p');
        // articleRecomendados.appendChild(pRecomendados);
        // pRecomendados.innerText = recomendado[2];

        articleRecomendados.innerHTML = articleRecomendados.innerHTML + `<h3>${recomendado[1]}</h3>`;

        articleRecomendados.innerHTML = articleRecomendados.innerHTML + `<p>${recomendado[2]}</p>`;
    });

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