
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import CategoryNav from './Components/Navbar/CategoruNav';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <>
    <Navbar/>
    <CategoryNav/>
    <AllRoutes/>
    <Footer/>
    </>
  );
}

export default App;
