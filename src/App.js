import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import * as redux from 'redux';
import { Provider } from 'react-redux';

import { Header } from './shared/Header';
import RentalList from './components/rental/RentalList';
import {RentalDetails} from './components/rental/RentalDetails';

import './App.css';
import {rentalReducer} from "./reducers/rental-reducer";

class App extends Component {

    render() {

        const store = redux.createStore(() => {
            return {
                rentals: []
            }
        })
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className='App'>
                      <Header/>

                      <div className='container'>
                          <Route exact path='/' render={() => <Redirect to='/rentals' />} />
                          <Route exact path='/rentals' component={RentalList}/>
                          <Route exact path={'/rental/:id'} component={RentalDetails}/>
                      </div>

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
