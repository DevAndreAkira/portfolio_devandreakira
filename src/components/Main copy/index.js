import React from 'react';
import { FaSearch, FaLinkedin, FaGithubAlt, FaBehanceSquare } from "react-icons/fa";


import './style.scss'
import pasta from '../../assets/img/folder.png';

const Main = () => {
    return (
        <main className="col-md-10 p-4 col-sm-12">
            <div className="d-flex align-items-start justify-content-between">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button className="btn position-absolute" type="submit"><FaSearch style={{color: "#A4B6C9"}}/></button>
                </form>
                <ul className="d-flex align-items-center">
                    <li>
                        <a className="nav-link" href="https://www.behance.net/andrakira" target="_blank" rel="noreferrer">
                            <FaBehanceSquare/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/andr%C3%A9-akira-kusaba-257510138/" className="nav-link" target="_blank" rel="noreferrer">
                            <FaLinkedin/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/DevAndreAkira" className="nav-link" target="_blank" rel="noreferrer">
                            <FaGithubAlt/>
                        </a>
                    </li>
                </ul>
            </div>
            <section>
                <div className="d-flex justify-content-between align-items-center titulo">
                    <h2>Minhas Pastas</h2>
                    <button type="button" className="btn btn_small">Detalhes</button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                        <div className="card p-3">
                            <div className="d-flex justify-content-between">
                                <img src={pasta} width="50" alt="Icone de pasta" className="icon-card" />
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Mídia</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-azul-claro" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="card-text espaco">12.6 GB</p>
                                    <p className="card-text espaco">20 GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-3">
                            <div className="d-flex justify-content-between">
                                <img src={pasta} width="50" alt="Icone de pasta" className="icon-card" />
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Audio</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-azul-claro" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="card-text espaco">12.6 GB</p>
                                    <p className="card-text espaco">20 GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-3">
                            <div className="d-flex justify-content-between">
                                <img src={pasta} width="50" alt="Icone de pasta" className="icon-card" />
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Documentos</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-azul-claro" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="card-text espaco">12.6 GB</p>
                                    <p className="card-text espaco">20 GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-3">
                            <div className="d-flex justify-content-between">
                                <img src={pasta} width="50" alt="Icone de pasta" className="icon-card" />
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Vídeo</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-azul-claro" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="card-text espaco">12.6 GB</p>
                                    <p className="card-text espaco">20 GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-3">
                            <div className="d-flex justify-content-between">
                                <img src={pasta} width="50" alt="Icone de pasta" className="icon-card" />
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Imagens</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-azul-claro" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="card-text espaco">12.6 GB</p>
                                    <p className="card-text espaco">20 GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="d-flex justify-content-between align-items-center titulo">
                    <h2>Arquivos Recentes</h2>
                    <button type="button" className="btn btn_small">Detalhes</button>
                </div>
                <div className="d-flex justify-content-between align-items-center item-recente none">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src=" ./assets/img/moldura.png" alt="Icone moldura" />
                        <p>Imagem05.png</p>
                    </div>
                    <p className="grey">10 Jun 2021</p>
                    <p className="grey">1,5 MB</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center item-recente none">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src=" ./assets/img/musica.png" alt="Icone moldura" />
                        <p>Record12.ogg</p>
                    </div>
                    <p className="grey">10 Jun 2021</p>
                    <p className="grey">1,5 MB</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center item-recente none">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src=" ./assets/img/moldura.png" alt="Icone moldura" />
                        <p>Imagem05.png</p>
                    </div>
                    <p className="grey">10 Jun 2021</p>
                    <p className="grey">1,5 MB</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center item-recente none">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src=" ./assets/img/moldura.png" alt="Icone moldura" />
                        <p>Imagem05.png</p>
                    </div>
                    <p className="grey">10 Jun 2021</p>
                    <p className="grey">1,5 MB</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center item-recente none">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src=" ./assets/img/musica.png" alt="Icone moldura" />
                        <p>Record12.ogg</p>
                    </div>
                    <p className="grey">10 Jun 2021</p>
                    <p className="grey">1,5 MB</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center item-recente none">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src=" ./assets/img/moldura.png" alt="Icone moldura" />
                        <p>Imagem05.png</p>
                    </div>
                    <p className="grey">10 Jun 2021</p>
                    <p className="grey">1,5 MB</p>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <button id="veja" className="btn_small btn_vejamais">Mostrar mais <i className="fas fa-sort-down m-1"></i></button>
            </section> */}
        </main >);
}

export default Main;