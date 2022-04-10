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
                <Route path="/" exact element={<Home />} />
                <Route path="/sobre" exact element={<Sobre />} />
                <Route path="/historico" exact element={<Histórico />} />
                <Route path="/habilidades" exact element={<Habilidades />} />
                <Route path="/portfolio" exact element={<Portfolio />} />
                <Route path="/hobbies" exact element={<Hobbies />} />
                <Route path="/contato" exact element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;