import React, { Component } from 'react'
import ModalForm from './partials/ModalForm';

export default class Home extends Component {

    componentDidMount() {
        // Default Home page title is "Vacation Rentals, Homes, Experiences & Places - Airbnb"
        document.title = "New Mexico, Mexico - Airbnb";
      }

    render() {
        return (
            <React.Fragment>
                <ModalForm />
            </React.Fragment>
        )
    }
}
