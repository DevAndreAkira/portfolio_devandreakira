import React from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { GiSkills, GiMusicalNotes } from "react-icons/gi";
import { BiHistory, BiBookHeart } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import i18n from '../translate/i18n';

import logo from '../../assets/img/mee.webp'
import './style.scss';

const Header = () => {

    function trocandoLogo() {
        let tela = document.querySelector("#root").offsetWidth;
        if (tela > 991) {
            document.querySelector("#navbarSupportedContent > ul > li:nth-child(1) > a").classList.remove("nav-link")
        }
        else {
            document.querySelector("#navbarSupportedContent > ul > li:nth-child(1) > a").classList.add("nav-link")
        }
    }

    function ativandoMenu() {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(6) > a").classList.add("active");
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


    return (
        <>
            <header className="col-md-2 header" >
                <nav className="navbar navbar-expand-lg navbar-light flex-column slide">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand " href="/">
                            <img src={logo} alt="Dev André Akira" width="120"
                                className="logo-mob" /></a>

                        <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                                <li className="nav-item">
                                    <a className="navbar-brand nav-link" href="/"><img src={logo} alt="Dev André Akira"
                                        width="120" className="logo" />
                                        <p className='mb-4'>{i18n.t('ola.ola')}<br />André Akira</p>
                                    </a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" aria-current="page" href="/sobre"><FaInfoCircle className='icons' />{i18n.t('nav.sobre')}</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/historico"><BiHistory className='icons' />{i18n.t('nav.historico')}</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/habilidades"><GiSkills className='icons' />{i18n.t('nav.habilidades')}</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/portfolio"><BiBookHeart className='icons' />{i18n.t('nav.portfolio')}</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/hobbies"><GiMusicalNotes className='icons' />{i18n.t('nav.hobbies')}</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/contato"><SiMinutemailer className='icons' />{i18n.t('nav.contato')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="upgrade text-center mt-3">
                        <p className="text-center upgrade-text">Acessar novos recursos e disponibilize mais espaço de armazenamento!
                        </p>
                        <button className="btn-upgrade mt-3">Upgrade de plano</button>
                    </div> */}
                </nav>
            </header>
        </>
    )
}

export default Header;