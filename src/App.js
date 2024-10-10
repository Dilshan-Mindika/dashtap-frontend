import './App.css';
import DriverReg from './DriverReg';
import FooterTag from './FooterTag';
import HeaderTag from './HeaderTag';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderTag/>
      </div>
      <div>
        <DriverReg/>
      </div>
      <div>
        <FooterTag/>
      </div>
      
    </div>
  );
}

export default App;
