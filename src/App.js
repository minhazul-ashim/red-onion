import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuNav from './MenuNav/MenuNav';
import Breakfast from '../src/MenuNav/Breakfast/Breakfast'
import Lunch from '../src/MenuNav/Lunch/Lunch'
import Dinner from '../src/MenuNav/Dinner/Dinner'
import DishDetail from './MenuNav/DishDetail/DishDetail';
import Motivation from './Motivation/Motivation';
import Footer from './Footer/Footer';

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
          <Route path='/dish/:dishId'>
            <DishDetail></DishDetail>
          </Route>
        </Switch>
        <Motivation></Motivation>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;


