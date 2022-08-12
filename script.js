const spiderMan = document.getElementById("spiderman");
    const circulo = document.querySelector('.circulo');
    const circulo2 = document.querySelector('.circulo2');
    const section = document.querySelector('.section');

    spiderMan.onclick = function clickspiderman() {
        circulo.style.background = ' url(./img/homem-aranha-imagem-animada-0016.gif) ';
       

        circulo2.style.background = ' url(https://c.tenor.com/4rhV7Qsk3AkAAAAj/we-are-venom-venom.gif) ';
        circulo2.style.backgroundColor = 'white';
    }

    circulo.onclick = function clickcirculo() {
        circulo.style.background = ' url(https://media3.giphy.com/media/vIZFeP5NF6jpBR1pTO/200.webp?cid=ecf05e47tm6scyw9ga0dkqqp5ry8g2n7vt2ry7op48ie9zto&rid=200.webp&ct=g)';
        circulo.style.borderRadius = '100px';

        circulo2.style.background = ' url(https://c.tenor.com/mQfFftmI_ssAAAAM/venom-movie-venom.gif)';
        circulo2.style.borderRadius = '100px';
    }

    circulo2.onclick = function clickcirculo() {
        circulo.style.background = ' url(https://media3.giphy.com/media/vIZFeP5NF6jpBR1pTO/200.webp?cid=ecf05e47tm6scyw9ga0dkqqp5ry8g2n7vt2ry7op48ie9zto&rid=200.webp&ct=g)';
        circulo.style.borderRadius = '100px';

        circulo2.style.background = ' url(https://c.tenor.com/mQfFftmI_ssAAAAM/venom-movie-venom.gif)';
        circulo2.style.borderRadius = '100px';
    }

    section.onmouseenter = function clicksection() {
        section.style.background = 'linear-gradient(to right, rgb(241, 6, 6), rgba(3, 42, 169, 0))';

    }

    section.onmouseleave = function clicksection() {
        section.style.background = 'linear-gradient(to left, rgb(241, 6, 6), rgba(3, 42, 169, 0))';
    }