import { React, useState } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Row, Col, Card, Modal, Button, Tooltip, OverlayTrigger, Tab, Tabs } from 'react-bootstrap';
import { CgBrowser, CgWindows } from "react-icons/cg";


import brasil from '../../assets/img/brasil.png';
import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";

import lixo from '../../assets/img/lixo.png';
import divinity from '../../assets/img/divinity.png';

// import divTrans from '../../assets/downloads/Divinity_Fatum_-_PT_BR.zip'

import './style.scss'

const Hobbies = () => {

    // function responsiveW() {
    //     let imgs = document.querySelectorAll(".hobbies img");
    //     imgs.forEach((e, index) => {
    //         // WIDTH
    //         // console.log(document.querySelectorAll(".card")[index].offsetWidth);
    //         imgs[index].style.width = `${(document.querySelectorAll(".card")[index].offsetWidth - 20)}px`;
    //     })
    // }

    // window.onresize = function () {
    //     responsiveW();
    // }


    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.className
        )
        window.location = window.location
    }

    // window.onload = () => {
    //     document.querySelector("#navbarSupportedContent > ul > li:nth-child(6) > a").classList.add("active");

    //     let array = document.querySelectorAll("div > div:nth-child(n) > div > a > img");
    //     array.forEach((e, index) => {
    //         const heightOutput = document.querySelector("#uncontrolled-tab-example-tabpane-home > div > div:nth-child(1) > div > a > img").offsetHeight;
    //         const widthOutput = document.querySelector("#uncontrolled-tab-example-tabpane-home > div > div:nth-child(1) > div > a > img").offsetWidth;
    //         array[index].style.minHeight = `${heightOutput}px`;
    //         array[index].style.width = `${widthOutput}px`;
    //     })

    //     // TENTANDO ARRUMAR A LARGURA
    //     let arrayBtn = document.querySelectorAll("main .hobbies button");
    //     arrayBtn.forEach((e, index) => {
    //         arrayBtn[index].onclick = function () {
    //             responsiveW();
    //         }
    //     })

    // }

    var hobbies = {
        games: [
            `${i18n.t('hobbies.game1')}`
        ],
        imgGames: [
            lixo
        ],
        urlGames: [
            "https://devandreakira.github.io/O-Homem-Lixo/"
        ],
        gameTrans: [
            "Divinity Fatum PT-BR"
        ],
        imgTrans: [
            divinity
        ],
        urlTrans: [
            ""
        ]
    }

    let totalGames = hobbies.games.length;
    let totalTraducoes = hobbies.gameTrans.length;
    return (
        <>
            <Header />
            <main className="col-md-10 p-4 col-sm-12 slide2">
                <Redes />
                <section>
                    <div className="titulo">
                        <h2 className='titles'>{i18n.t('hobbies.titulo')}</h2>
                        <div className='idiomas'>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={eua} alt="Idioma - Inglês" className="en-US" width="45" /></button>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={brasil} alt="Idioma - Português" className="pt-BR" width="45" /></button>
                        </div>
                    </div>
                </section>

                <div className="row-cols-xl-12 mt-2 gx-2 hobbies">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Games" className=''>
                            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                                {Array.from({ length: totalGames }).map((_, idx) => (
                                    <Col>
                                        <Card>
                                            <a href={hobbies.urlGames[idx]} target="blank" className=''>
                                                <Card.Img variant="bottom" src={hobbies.imgGames[idx]} />
                                                <Card.Body>
                                                    <Card.Title>{hobbies.games[idx]} <CgBrowser /></Card.Title>
                                                    <Card.Title className='subTitle-card'>2021</Card.Title>
                                                    {/* <Card.Text>
                                        {i18n.t('hobbies.descGame1')}
                                        </Card.Text> */}
                                                    {/* <Button className='--ciano-bg mt-5' href={hobbies.urlGames[idx]} target="_blank">{i18n.t('projetos.botao')}</Button> */}
                                                </Card.Body>
                                            </a>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title={`${i18n.t('hobbies.traducao')}`}>
                            <Row xs={1} sm={2} md={3} lg={3} className="g-4">

                                {Array.from({ length: totalTraducoes }).map((_, idx) => (
                                    <Col>
                                        <Card className="">
                                            <a href="#">
                                                <Card.Img variant="bottom" src={hobbies.imgTrans[idx]} />
                                                <Card.Body>
                                                    <Card.Title>{hobbies.gameTrans[idx]} <CgWindows /></Card.Title>
                                                    <Card.Title className='subTitle-card'>2022</Card.Title>
                                                    {/* <Card.Text>
                                            {i18n.t('hobbies.descTrans1')}
                                        </Card.Text>
                                        <a href="../../assets/downloads/Divinity_Fatum_-_PT_BR.zip" download>
                                            <Button className='--ciano-bg mt-5'>Download</Button>
                                        </a> */}
                                                </Card.Body>
                                            </a>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                        {/* <Tab eventKey="contact" title="Contact">
                            <h1>3</h1>
                        </Tab> */}
                    </Tabs>


                </div>
            </main>
        </>
    );
}

export default Hobbies;