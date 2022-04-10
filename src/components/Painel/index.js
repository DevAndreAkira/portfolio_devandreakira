import React from 'react';
import { FaThLarge, FaStar, FaUserFriends, FaTrash, FaCog, FaInfoCircle } from "react-icons/fa";
import { GiSkills, GiMusicalNotes } from "react-icons/gi";
import { BiHistory, BiBookHeart } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import i18n from '../translate/i18n';

import logo from '../../assets/img/mee.webp'
import brasil from '../../assets/img/brasil.png';
import eua from '../../assets/img/eua.png';

import './style.scss';

const Painel = () => {

    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.className
        )
        window.location = window.location
    }

    return (
        <>
            <header className="col-12 painel slideUp">
                <nav className="navbar navbar-expand-lg navbar-light flex-column">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Dev André Akira" width="120"
                                className="logo-mob" /></a>

                        <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                            <div>
                                <p className='mt-4 azul'>{i18n.t('dev.front')}</p>
                                <img src={logo} alt="Dev André Akira" width="250" className="logo" />
                                <p className='mb-4'>{i18n.t('ola.ola')}<br/>André Akira</p>
                            </div>
                            <div className='mb-4 idiomas'>
                                <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={eua} alt="Idioma - Inglês" className="en-US" width="45" /></button>
                                <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={brasil} alt="Idioma - Português" className="pt-BR" width="45" /></button>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">

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

export default Painel;