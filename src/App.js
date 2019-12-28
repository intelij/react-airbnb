import React, { Component } from 'react';

import { Header } from './shared/Header';
import { RentalList} from "./components/rental/RentalList";
import {RentalDetails} from "./components/rental/RentalDetails";

import './App.css';

class App extends Component {

    constructor() {

        super();

        this.state = {
            isRentalList: true
        }
    }

    navigate() {
        this.setState({
            isRentalList: !this.state.isRentalList
        })
    }

    render() {
        return (
            <div className="App">
              <Header/>

                <button onClick={() => {this.navigate()}}> View Details </button>
              <div className='container'>
                  {this.state.isRentalList ? <RentalList/> : <RentalDetails/> }
              </div>

            </div>
        );
    }
}

export default App;
