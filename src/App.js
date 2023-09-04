import logo from './logo.svg';
import './App.css';
import NavBar from './Comp/NavBar';
import GstAuth from './Comp/GstAuth';
import Footer from './Comp/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <GstAuth/>
     <Footer/>
    </div>
  );
}

export default App;
