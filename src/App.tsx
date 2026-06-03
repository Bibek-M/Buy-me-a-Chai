import Footer from './components/Footer';
import HallOfFame from './components/HallOfFame';
import Home from './components/Home'
import More from './components/More';
import Navbar from "./components/Navbar";
import Copyright from './components/Copyright';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="py-3 ">
      <Navbar/>
      <Home/>
      <HallOfFame/>
      <More/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App