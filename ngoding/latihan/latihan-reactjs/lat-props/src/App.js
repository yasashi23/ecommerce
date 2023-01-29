// import logo from './logo.svg';
import Kotak from './comp/kotak'
import Layar from './comp/layar'
import './css/style.css'


function App() {
  
  return (
    <div className="App">
      <div className='cont-layar'>
        <Layar />
        <Kotak />
      </div>
    </div>
  );
}

export default App;
