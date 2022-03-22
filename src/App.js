
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manubar from './Components/Manubar/Manubar';
import AllProduct from './Components/AllProduct/AllProduct';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count,setCount] = useState(0);
 const setCartCount = () => {
   setCount(count + 1);

 }
 useEffect(() => {
  AOS.init();
}, []);

  return (
    <div className="App">
    
    <Manubar count={count}> </Manubar>
    <AllProduct setCartCount={setCartCount}> </AllProduct>
    </div>
  );
}

export default App;
