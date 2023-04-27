import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import RoutesConfig from './RoutesConfig';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

        <BrowserRouter>
          <Header />
          <RoutesConfig />
          <Footer />
        </BrowserRouter>


  );
}

export default App;
