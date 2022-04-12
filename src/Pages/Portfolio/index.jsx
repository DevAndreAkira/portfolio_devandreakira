import { React } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Carousel } from 'react-bootstrap';


import brasil from '../../assets/img/brasil.png';
import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";

import roma from '../../assets/img/roma.webp';
import a3 from '../../assets/img/a3tech.webp';
import cf from '../../assets/img/cf.webp';
import vex from '../../assets/img/vex.png';
import labu from '../../assets/img/labufalina.webp';
import taboao from '../../assets/img/taboao.png';
import we from '../../assets/img/wefood.webp';
import remove from '../../assets/img/remove-dotspace-min.webp';
import cloudy from '../../assets/img/cloudy.webp';
import anfarmag from '../../assets/img/anfarmag.png';
import eisenbahn from '../../assets/img/eisenbahn.png';

import roma2 from '../../assets/img/roma2.jpg';
import a32 from '../../assets/img/a3tech2.jpg';
import cf2 from '../../assets/img/cf2.jpg';
import vex2 from '../../assets/img/vex2.jpg';
import labu2 from '../../assets/img/la2.jpg';
import taboao2 from '../../assets/img/aquinotaboao2.jpg';
import we2 from '../../assets/img/we2.jpg';
import remove2 from '../../assets/img/dot2.jpg';
import cloudy2 from '../../assets/img/clo2.jpg';
import anfarmag2 from '../../assets/img/anfarmag2.jpg';
import eisenbahn2 from '../../assets/img/eisenbahn2.jpg';


import roma3 from '../../assets/img/roma3.jpg';
import a33 from '../../assets/img/a3tech3.jpg';
import cf3 from '../../assets/img/cf3.jpg';
import vex3 from '../../assets/img/vex3.jpg';
import labu3 from '../../assets/img/la3.jpg';
import taboao3 from '../../assets/img/aquinotaboao3.jpg';
import we3 from '../../assets/img/we3.jpg';
import remove3 from '../../assets/img/dot3.jpg';
import cloudy3 from '../../assets/img/clo3.jpg';
import anfarmag3 from '../../assets/img/anfarmag3.jpg';
import eisenbahn3 from '../../assets/img/eisenbahn3.jpg';

import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import js from '../../assets/img/js.png';
import jquery from '../../assets/img/jquery.png';
import bootstrap from '../../assets/img/bootstrap.png';
import php from '../../assets/img/php.png';
import wordpress from '../../assets/img/wordpress.png';
import react from '../../assets/img/react.png';
import ai from '../../assets/img/ai.png';
import canva from '../../assets/img/canva.png';
import ps from '../../assets/img/ps.png';
import cordova from '../../assets/img/cordova.png';
import electron from '../../assets/img/electron.png';
import figma from '../../assets/img/figma.png';
import file from '../../assets/img/file.png';
import git from '../../assets/img/git.png';
import github from '../../assets/img/github.png';
import gradle from '../../assets/img/gradle.png';
import sqlServer from '../../assets/img/sqlServer.png';
import mySql from '../../assets/img/mySql.png';
import xd from '../../assets/img/xd.png';
import sass from '../../assets/img/sass.png';
import seleniumIde from '../../assets/img/seleniumIde.png';


import './style.scss'

const Portfolio = () => {

    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.className
        )
        window.location = window.location
    }

    window.onload = () => {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(5) > a").classList.add("active");
    }

    var projetos = {
        titulo: [
            "A3Tech - 2020",
            "CF Gestão Comercial - 2020",
            "La Bufalina - 2020",
            "Vex Revestimentos - 2020",
            "Aqui no Taboão - 2021",
            "We-food - 2021",
            "Remove DotSpace - 2021",
            "Roma - 2021",
            "Cloudy - 2022",
            "Anfarmag - 2022",
            // "Eisenbahn - 2022"
        ],
        img: [a3, cf, labu, vex, taboao, we, remove, roma, cloudy, anfarmag, 
            // eisenbahn
        ],
        img2: [a32, cf2, labu2, vex2, taboao2, we2, remove2, roma2, cloudy2, anfarmag2, 
            // eisenbahn2
        ],
        img3: [a33, cf3, labu3, vex3, taboao3, we3, remove3, roma3, cloudy3, anfarmag3, 
            // eisenbahn3
        ],
        url: [
            "https://www.a3tech.com.br/",
            "https://www.cfgestaocomercial.com.br/",
            "https://www.labufalina.com.br/",
            "https://www.vexrevestimentos.com.br/",
            "https://www.aquinotaboao.com.br/",
            "https://devandreakira.github.io/we-food/",
            "https://devandreakira.github.io/remove_dotspace/",
            "https://roma.ind.br/",
            "https://devandreakira.github.io/Selecao_BusinessIntegrator/",
            "https://areadoassociado.anfarmag.org.br/login",
            // "https://promogarten-einsenbahn.devandreakira.repl.co/"
        ]
    }

    var icon = {
        linguagens: [
            "HTML5",
            "CSS3",
            "Javascript",
            "Bootstrap",
            "Jquery",
            "Sass (Scss)",
            "React",
            "Wordpress",
            "Php",
            "SQL Server",
            "MySQL",
            "FileZilla",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe Xd",
            "Figma",
            "Canva",
            "Git",
            "Github",
            "Cordova",
            "Gradle",
            "Electron",
            "Selenium IDE"
        ]
    }

    let totalProjetos = projetos.url.length;
    return (
        <>
            <Header />
            <main className="col-md-10 p-4 col-sm-12 slide2">
                <Redes />
                <section>
                    <div className="d-flex justify-content-between align-items-center titulo">
                        <h2 className='titles'>{i18n.t('projetos.titulo')}</h2>
                        <div className='idiomas'>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={eua} alt="Idioma - Inglês" className="en-US" width="45" /></button>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={brasil} alt="Idioma - Português" className="pt-BR" width="45" /></button>
                        </div>
                    </div>
                </section>

                <div className="d-flex justify-content-center flex-wrap flow">
                    <Carousel keyboard fade className="mt-3 col-lg-12 col-12 desk">
                        {Array.from({ length: totalProjetos }).map((_, idx) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projetos.img[idx]}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="teste">
                                    <h3>{projetos.titulo[idx]}</h3>
                                    <div className='mb-5'>
                                        <img width="50" src={html} alt="" />
                                        <img width="50" src={css} alt="" />
                                        <img width="50" src={js} alt="" />
                                        {projetos.titulo[idx] === "A3Tech - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "CF Gestão Comercial - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "La Bufalina - 2020" ? <><img width="50" src={bootstrap} alt="" /><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Vex Revestimentos - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Aqui no Taboão - 2021" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "We-food - 2021" ? <><img width="50" src={bootstrap} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Remove DotSpace - 2021" ? <><img width="50" src={cordova} alt="" /><img width="50" src={gradle} alt="" /><img width="50" src={electron} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Roma - 2021" ? <><img width="50" src={sass} alt="" /><img width="50" src={react} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Cloudy - 2022" ? <><img width="50" src={bootstrap} alt="" /><img width="50" src={sass} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Anfarmag - 2022" ? <><img width="50" src={seleniumIde} alt="" /></> : <></>}
                                        {/* {projetos.titulo[idx] === "Eisenbahn - 2022" ? <><img width="50" src={php} alt="" /><img width="50" src={sass} alt="" /></> : <></>} */}
                                    </div>

                                    <a href={projetos.url[idx]} target="_blank" rel="noreferrer" className="btn_slider">{i18n.t('projetos.botao')}</a>

                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Carousel keyboard fade className="mt-3 col-lg-12 col-12 tablet">
                        {Array.from({ length: totalProjetos }).map((_, idx) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projetos.img2[idx]}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="teste">
                                    <h3>{projetos.titulo[idx]}</h3>
                                    <div>
                                        <img width="50" src={html} alt="" />
                                        <img width="50" src={css} alt="" />
                                        <img width="50" src={js} alt="" />
                                        {projetos.titulo[idx] === "A3Tech - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "CF Gestão Comercial - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "La Bufalina - 2020" ? <><img width="50" src={bootstrap} alt="" /><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Vex Revestimentos - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Aqui no Taboão - 2021" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "We-food - 2021" ? <><img width="50" src={bootstrap} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Remove DotSpace - 2021" ? <><img width="50" src={cordova} alt="" /><img width="50" src={gradle} alt="" /><img width="50" src={electron} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Roma - 2021" ? <><img width="50" src={sass} alt="" /><img width="50" src={react} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Cloudy - 2022" ? <><img width="50" src={bootstrap} alt="" /><img width="50" src={sass} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Anfarmag - 2022" ? <><img width="50" src={seleniumIde} alt="" /></> : <></>}
                                        {/* {projetos.titulo[idx] === "Eisenbahn - 2022" ? <><img width="50" src={php} alt="" /><img width="50" src={sass} alt="" /></> : <></>} */}
                                    </div>
                                    <br /><br />
                                    <a href={projetos.url[idx]} target="_blank" rel="noreferrer" className="btn_slider">{i18n.t('projetos.botao')}</a>
                                    <br /><br />
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Carousel keyboard fade className="mt-3 col-lg-12 col-12 cel">
                        {Array.from({ length: totalProjetos }).map((_, idx) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projetos.img3[idx]}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="teste">
                                    <h3>{projetos.titulo[idx]}</h3>
                                    <div>
                                        <img width="50" src={html} alt="" />
                                        <img width="50" src={css} alt="" />
                                        <img width="50" src={js} alt="" />
                                        {projetos.titulo[idx] === "A3Tech - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "CF Gestão Comercial - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "La Bufalina - 2020" ? <><img width="50" src={bootstrap} alt="" /><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Vex Revestimentos - 2020" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Aqui no Taboão - 2021" ? <><img width="50" src={wordpress} alt="" /><img width="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "We-food - 2021" ? <><img width="50" src={bootstrap} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Remove DotSpace - 2021" ? <><img width="50" src={cordova} alt="" /><img width="50" src={gradle} alt="" /><img width="50" src={electron} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Roma - 2021" ? <><img width="50" src={sass} alt="" /><img width="50" src={react} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Cloudy - 2022" ? <><img width="50" src={bootstrap} alt="" /><img width="50" src={sass} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Anfarmag - 2022" ? <><img width="50" src={seleniumIde} alt="" /></> : <></>}
                                        {/* {projetos.titulo[idx] === "Eisenbahn - 2022" ? <><img width="50" src={php} alt="" /><img width="50" src={sass} alt="" /></> : <></>} */}
                                    </div>
                                    <br /><br />
                                    <a href={projetos.url[idx]} target="_blank" rel="noreferrer" className="btn_slider">{i18n.t('projetos.botao')}</a>
                                    <br /><br />
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </main>
        </>
    );
}

export default Portfolio;