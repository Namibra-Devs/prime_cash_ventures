
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import Mtnbundle from './Pages/Mtn/Mtnbundle';
import Atbundle from './Pages/AT/Atbundle';
import Privacy from './Pages/Privacy/Privacy';
import ReturnPolicy from './Pages/Return-Policy/ReturnPolicy';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import SignIn from './Pages/SignIn/SignIn';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mtn' element={<Mtnbundle />} />
        <Route path='/at' element={<Atbundle />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/signin' element={<SignIn />}/>
        </Routes>
       

    
     </BrowserRouter>
  

     
   
    
  
      

   
    </div>
  );
}

export default App;
