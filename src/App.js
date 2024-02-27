
import './App.css';
import NavBar from "./components/NavBar"
import Home from './components/Home';
import Project from './components/Project';
import Table from './components/Table';
import Footer from './components/Footer';
import NavBarMenu from './components/NavBarMenu';
function App() {
  return (
    <div>
      {/* <NavBarMenu/> */}
       <NavBar/>
       <Home/>
       <Project/>
      <Table/>
      <Footer/>  
    </div>
  );
}

export default App;
