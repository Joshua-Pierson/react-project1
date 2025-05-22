import logo from './logo.svg';
import './App.css';
import PropsWithoutDes from './component/PropsWithoutDes';
import Header from './component/Header';
import Footer from './component/Footer';
import PropsWithDes from './component/PropsWithDes';
import FormWithState from './component/FormWithState';

function App() {
  return (
    <>
      {/* <Header/> */}
      <FormWithState />
      {/* <PropsWithoutDes studentName="Josh" studentlastName="Doe"/>
      <PropsWithoutDes studentName="Jane" studentlastName="Smith"/>
      <PropsWithDes studentName="Alice" studentlastName="Johnson"/>
      <Footer years={2025} /> */}

    </>
  );
}

export default App;
