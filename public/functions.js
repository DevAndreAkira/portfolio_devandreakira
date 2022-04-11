function trocandoLogo() {
    let tela = document.querySelector("#root").offsetWidth;
    if (tela > 991) {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(1) > a").classList.remove("nav-link")
    }
    else {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(1) > a").classList.add("nav-link")
    }
}

function ativandoMenu(numero) {
    let endereco = window.location.href;

    endereco = endereco.split("/");
    console.log(endereco);
    endereco.forEach((e, index) => {
        if (endereco[index] === "sobre") {
            numero = 2;
        }
        else if (endereco[index] === "historico") {
            numero = 2;
        }
        else if (endereco[index] === "habilidades") {
            numero = 3;
        }
        else if (endereco[index] === "portfolio") {
            numero = 4;
        }
        else if (endereco[index] === "hobbies") {
            numero = 5;
        }
        else if (endereco[index] === "contato") {
            numero = 6;
        }
    })
    document.querySelector(`#navbarSupportedContent > ul > li:nth-child(${numero}) > a`).classList.add("active");
}

window.onload = function () {
    trocandoLogo();
    ativandoMenu();

    let array = document.querySelectorAll(".hobbies div > div:nth-child(n) > div > a > img");
    array.forEach((e, index) => {
        const heightOutput = document.querySelector(".hobbies #uncontrolled-tab-example-tabpane-home > div > div:nth-child(1) > div > a > img").offsetHeight;
        const widthOutput = document.querySelector(".hobbies #uncontrolled-tab-example-tabpane-home > div > div:nth-child(1) > div > a > img").offsetWidth;
        array[index].style.minHeight = `${heightOutput}px`;
        array[index].style.width = `${widthOutput}px`;
    })

    // TENTANDO ARRUMAR A LARGURA
    let arrayBtn = document.querySelectorAll("main .nav-item button");
    arrayBtn.forEach((e, index) => {
        arrayBtn[index].onclick = function () {
            responsiveW();
        }
    })
}

function responsiveW() {
    let imgs = document.querySelectorAll(".hobbies img");
    imgs.forEach((e, index) => {
        // WIDTH
        // console.log(document.querySelectorAll(".card")[index].offsetWidth);
        imgs[index].style.width = `${(document.querySelectorAll(".card")[index].offsetWidth - 20)}px`;

        // ARRUMANDO A ALTURA - DEPOIS
        // let altura = document.querySelector("#uncontrolled-tab-example-tabpane-home > div > div > div > a > img").offsetHeight;
        // imgs[index].style.height = altura;
    })
}

window.onresize = function () {
    responsiveW();
}


window.onresize = function () {
    trocandoLogo();
    responsiveW();
}