import React from 'react';
import {RentalCard} from "./RentalCard";

export class RentalList extends React.Component {

    constructor() {
        super();

        this.state = {
            rentals: [1,2,3]
        }

        // this.addRentals = this.addRentals.bind(this);

    }

    renderRentals() {
        return this.state.rentals.map((rental) => {
            return (
                <RentalCard key={rental.toString()}/>
            )
        })
    }

    // addRentals() {
    //
    //     const rentals = this.state.rentals;
    //
    //     rentals.push(1);
    //
    //     this.setState({
    //         rentals
    //     });
    //
    // }

    render() {
        return (
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>

                    {this.renderRentals()}

                </div>
                {/*<button onClick={this.addRentals}>Add Rental</button>*/}
                {
                    /* @TODO USING ARROW FUNC, without constructor binding
                    <button onClick={() => {this.addRentals()}}>Add Rental</button>
                    */
                }
            </section>
        )
    }
}
