import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import Index from './Pages/Index/Index'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <Header/>
     <Index/>
     <Footer/>
    </div>
  );
}

export default App;
