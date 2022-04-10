import { React, useState } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Row, Col, Card } from 'react-bootstrap';

import brasil from '../../assets/img/brasil.png';
import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";
import input from '../../assets/img/input.jpg';
import rlti from '../../assets/img/rlti.jpg';
import amz from '../../assets/img/amz.jpg';
import elo from '../../assets/img/elo.png';
import './style.scss'

const Historico = () => {

    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.className
        )
        window.location = window.location
    }

    var cardsInfos = {
        title: [
            "Input Center Informatica",
            "RLTI - Serviços de Tecnologia",
            "Amz|Mp Agência de Comunicação",
            "Elo Editora e Distribuidora"
        ],
        info: [
            `${i18n.t('cargos.cargo1')}`,
            `${i18n.t('cargos.cargo2')}`,
            `${i18n.t('cargos.cargo3')}`,
            `${i18n.t('cargos.cargo4')}`
        ],
        periodo: [
            '02/2020 - 04/2020',
            '06/2020 - 10/2021',
            '06/2021 - 10/2021',
            '09/2021 - 11/2021'
        ],
        quantidade: [
            `${i18n.t('duracao.duracao1')}`,
            `${i18n.t('duracao.duracao2')}`,
            `${i18n.t('duracao.duracao3')}`,
            `${i18n.t('duracao.duracao4')}`
        ],
        imgs: [input, rlti, amz, elo]
    }

    window.onload = () => {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(3) > a").classList.add("active");
    }

    return (
        <>
            <div className="App d-flex">
                <Header />
                <main className="col-md-10 p-4 col-sm-12 slide2">
                    <Redes />
                    <section>
                        <div className="d-flex justify-content-between align-items-center titulo">
                            <h2 className='titles'>{i18n.t('titles.phistorico')}</h2>
                            <div className='idiomas'>
                                <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={eua} alt="Idioma - Inglês" className="en-US" width="45" /></button>
                                <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={brasil} alt="Idioma - Português" className="pt-BR" width="45" /></button>
                            </div>
                        </div>
                    </section>
                    <div className="row row-cols-1 row-cols-md-12">
                        <Row xs={1} md={2} className="g-2">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card className="bg-dark text-white">
                                        <Card.Title>{cardsInfos.title[idx]}</Card.Title>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <Card.Text>
                                                    {cardsInfos.info[idx]}
                                                </Card.Text>
                                                <Card.Text>{cardsInfos.quantidade[idx]}</Card.Text><br />
                                            </div>
                                            <img src={cardsInfos.imgs[idx]} className="logoEmpresas" width='50px' height="50px" />
                                        </div>
                                        <Card.Text>{cardsInfos.periodo[idx]}</Card.Text>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Historico;