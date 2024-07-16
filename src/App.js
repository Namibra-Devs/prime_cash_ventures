
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import Mtnbundle from './Pages/Mtn/Mtnbundle';
import Atbundle from './Pages/AT/Atbundle';
import Privacy from './Pages/Privacy/Privacy';
import ReturnPolicy from './Pages/Return-Policy/ReturnPolicy';
import Cart from './Pages/Cart-Page/Cart';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Banner />
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mtn' element={<Mtnbundle />} />
        <Route path='/at' element={<Atbundle />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />
        <Route path='/cart' element={<Cart />} />

        </Routes>
       <Footer />

      

     </BrowserRouter>
      

   
    </div>
  );
}

export default App;
