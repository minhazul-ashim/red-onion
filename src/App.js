import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Header/Navigation/Navigation';
import Home from './Home/Home';
import Footer from '../src/Footer/Footer'
import DishDetail from './MenuNav/DishDetail/DishDetail';
import Breakfast from './MenuNav/Breakfast/Breakfast';
import Lunch from './MenuNav/Lunch/Lunch';
import Dinner from './MenuNav/Dinner/Dinner';
import Login from './Login/Login';
import AuthProvider from './contexts/AuthProvider';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/dish/:dishId'>
              <DishDetail></DishDetail>
            </Route>
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
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


