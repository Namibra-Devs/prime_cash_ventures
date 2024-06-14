
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Banner />
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
       </Routes>
      

     </BrowserRouter>
      

   
    </div>
  );
}

export default App;
