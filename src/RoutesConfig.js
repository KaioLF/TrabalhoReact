import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detalhes from './pages/Detalhes';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detalhes/:id' element={<Detalhes />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    );
  }