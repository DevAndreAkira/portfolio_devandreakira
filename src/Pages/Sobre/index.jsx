import { React, useState } from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';

import { BsDisc } from "react-icons/bs";
import { GiWolfHowl, GiBrain } from "react-icons/gi";
import { Button, Modal } from 'react-bootstrap';
import i18n from '../../components/translate/i18n';

import brasil from '../../assets/img/brasil.png';
import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais"
import sobre from '../../assets/img/sobre.jpg';
import './style.scss'

const Home = () => {

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.className
        )
        window.location = window.location
    }

    window.onload = () => {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(2) > a").classList.add("active");
    }

    return (
        <>
            <div className="App d-flex sobre">
                <Header />
                <main className="col-md-10 p-4 col-sm-12 slide2">
                    <Redes />
                    <section>
                        <div className="d-flex justify-content-between align-items-center titulo">
                            <h2 className='titles'>{i18n.t('titles.psobre')}</h2>
                            <div className='idiomas'>
                                <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={eua} alt="Idioma - Inglês" className="en-US" width="45" /></button>
                                <button type="button" className="btn btn_small" onClick={handleSelectChange}><img src={brasil} alt="Idioma - Português" className="pt-BR" width="45" /></button>
                            </div>
                        </div>
                    </section>
                    <Main />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                        <div className="col-md-6 col-lg-8">
                            <p>{i18n.t('conteudo.psobre')}</p>
                            <h2 className='mt-5 titles'>{i18n.t('titles.psobre2')}</h2>
                            <button type="button" variant="primary" onClick={handleShow1} class="neoBtn" data-toggle="modal" data-target="#exampleModalLong">
                                <BsDisc />
                            </button>
                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{i18n.t('conteudo.psobreDisc.titles')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{i18n.t('conteudo.psobreDisc.msg')}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" target="_blank" href="https://www.pactorh.com.br/teste-disc/disc/os-quatro-tipos-personalidade/personalidade-disc-c-conformidade/">
                                        {i18n.t('conteudo.psobreDisc.btn1')}
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose1}>
                                        {i18n.t('conteudo.psobreDisc.btn2')}
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <button type="button" variant="primary" onClick={handleShow2} class="neoBtn" data-toggle="modal" data-target="#exampleModalLong"><GiWolfHowl /></button>
                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{i18n.t('conteudo.psobreTeste.titles')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{i18n.t('conteudo.psobreTeste.msg')}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" target="_blank" href="https://www.gazetaonline.com.br/noticias/concursos_e_empregos/2016/12/lobo-tubarao-gato-ou-aguia-qual-o-seu-perfil-profissional-1014004119.html">
                                        {i18n.t('conteudo.psobreTeste.btn1')}
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        {i18n.t('conteudo.psobreTeste.btn2')}
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <button type="button" variant="primary" onClick={handleShow3} class="neoBtn" data-toggle="modal" data-target="#exampleModalLong"><GiBrain /></button>
                            <Modal show={show3} onHide={handleClose3}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{i18n.t('conteudo.psobrePerso.titles')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{i18n.t('conteudo.psobrePerso.msg')}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" target="_blank" href="https://www.16personalities.com/br/personalidade-intj">
                                        {i18n.t('conteudo.psobrePerso.btn1')}
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose3}>
                                        {i18n.t('conteudo.psobrePerso.btn2')}
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <img src={sobre} alt="Foto de André Akira" className='sobre' />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;