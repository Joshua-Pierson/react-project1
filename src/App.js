import logo from './logo.svg';
import './App.css';
import Greeting from './component/Greeting';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header/>
      <Greeting/>
      <Greeting/>
      <Footer/>
    </>
  );
}

export default App;
