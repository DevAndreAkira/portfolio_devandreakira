import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Histórico from './Pages/Histórico';
import Habilidades from './Pages/Habilidades';
import Portfolio from './Pages/Portfolio';
import Hobbies from './Pages/Hobbies';
import Contato from './Pages/Contato';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio_devandreakira/" exact element={<Home />} />
                <Route path="/portfolio_devandreakira/sobre" element={<Sobre />} />
                <Route path="/portfolio_devandreakira/historico" element={<Histórico />} />
                <Route path="/portfolio_devandreakira/habilidades" element={<Habilidades />} />
                <Route path="/portfolio_devandreakira/portfolio" element={<Portfolio />} />
                <Route path="/portfolio_devandreakira/hobbies" element={<Hobbies />} />
                <Route path="/portfolio_devandreakira/contato" element={<Contato />} />
                <Route path='*' element={<h1 style={{color:"#05c3c3"}}>Not Found 404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;