import React from 'react';
import Link from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";
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
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Dev André Akira" width="120"
                                className="logo-mob" /></Link>

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
                                    <Link className="nav-link" aria-current="page" to="/portfolio_devandreakira/sobre"><FaInfoCircle className='icons' />{i18n.t('nav.sobre')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to="/portfolio_devandreakira/historico"><BiHistory className='icons' />{i18n.t('nav.historico')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to="/portfolio_devandreakira/habilidades"><GiSkills className='icons' />{i18n.t('nav.habilidades')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to="/portfolio_devandreakira/portfolio"><BiBookHeart className='icons' />{i18n.t('nav.portfolio')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to="/portfolio_devandreakira/hobbies"><GiMusicalNotes className='icons' />{i18n.t('nav.hobbies')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to="/portfolio_devandreakira/contato"><SiMinutemailer className='icons' />{i18n.t('nav.contato')}</Link>
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