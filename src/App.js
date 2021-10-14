import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

      </BrowserRouter>

    </div>
  );
}

export default App;


