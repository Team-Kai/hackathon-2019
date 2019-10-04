import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar2 extends Component {
    render() {
        return (
             <React.Fragment>
                <nav class="navbar navbar-transparent navbar-expand-lg">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="ml-auto navbar-toggler" data-toggle="collapse" data-target="#example-navbar-transparent">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
         
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-transparent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-success">Work Trip</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-success">Type of Place</button>
                    </li>
                    <li class="nav-item">
                     <button type="button" class="btn btn-outline-success">Price</button>
                    </li>
                    <li class="nav-item">
                  <button type="button" class="btn btn-outline-success">Instant Book</button>
                    </li>
                    <li class="nav-item">
                  <button type="button" class="btn btn-outline-success">Safety</button>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
            </React.Fragment>
        )
    }
}
