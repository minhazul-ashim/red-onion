import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from '../Header/Banner/Banner';
import Breakfast from '../MenuNav/Breakfast/Breakfast';
import Dinner from '../MenuNav/Dinner/Dinner';
import DishDetail from '../MenuNav/DishDetail/DishDetail';
import Lunch from '../MenuNav/Lunch/Lunch';
import MenuNav from '../MenuNav/MenuNav';
import Motivation from '../Motivation/Motivation';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Banner></Banner>
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
            </BrowserRouter>
        </div >
    );
};

export default Home;