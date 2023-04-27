import './App.css';
import Header from './components/Header/index';
import Card from './components/Card/index'
import Footer from './components/Footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

        <BrowserRouter>
          <Header />
          <Card />
          <Footer />
        </BrowserRouter>


  );
}

export default App;
