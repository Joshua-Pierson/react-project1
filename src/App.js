import logo from './logo.svg';
import './App.css';
import PropsWithoutDes from './component/Greeting';
import Header from './component/Header';
import Footer from './component/Footer';
import PropsWithDes from './component/PropsWithDes';

function App() {
  return (
    <>
      <Header/>
      <PropsWithoutDes studentName="Josh" studentlastName="Doe"/>
      <PropsWithoutDes studentName="Jane" studentlastName="Smith"/>
      <PropsWithDes studentName="Alice" studentlastName="Johnson"/>
      <Footer/>

    </>
  );
}

export default App;
