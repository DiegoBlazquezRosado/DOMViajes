//DOM Viajes

const divBienvenidos = document.getElementById('bienvenidos');

const insertBanner = () => {

    const arrBanner = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
    let randomBanner = Math.floor(Math.random()*arrBanner.length);

    const arrTextBanner = [];
    for (let i=0; i<arrBanner.length; i++) {
        arrTextBanner.push(`Image ${i+1}`);
    }

    const imgBanner = document.createElement('img');
    divBienvenidos.appendChild(imgBanner);

    imgBanner.src = `./banner/${arrBanner[randomBanner]}`;
    imgBanner.title = arrTextBanner[randomBanner];
    imgBanner.alt = arrTextBanner[randomBanner];

}

insertBanner();