import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuNav from './MenuNav/MenuNav';
import Breakfast from '../src/MenuNav/Breakfast/Breakfast'
import Lunch from '../src/MenuNav/Lunch/Lunch'
import Dinner from '../src/MenuNav/Dinner/Dinner'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <MenuNav></MenuNav>
        <Switch>
          <Route path='/breakfast'>
            <Breakfast></Breakfast>
          </Route>
          <Route path='/lunch'>
            <Lunch></Lunch>
          </Route>
          <Route path='/dinner'>
            <Dinner></Dinner>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


