import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Solution from './components/pages/Solution';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/solution' element={<Solution/>}/>  
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
