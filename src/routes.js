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
                <Route path="/portfolio_devandreakira/sobre" exact element={<Sobre />} />
                <Route path="/portfolio_devandreakira/historico" exact element={<Histórico />} />
                <Route path="/portfolio_devandreakira/habilidades" exact element={<Habilidades />} />
                <Route path="/portfolio_devandreakira/portfolio" exact element={<Portfolio />} />
                <Route path="/portfolio_devandreakira/hobbies" exact element={<Hobbies />} />
                <Route path="/portfolio_devandreakira/contato" exact element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;