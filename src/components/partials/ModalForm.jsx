import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ModalForm extends Component {

    state = {
        page : this.props.page
    }

  render() {
    return (
      <div className="popup modal-home">
        <h1>Book unique places to stay and things to do.</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1" className="small" style={{"text-transform":"uppercase"}}>Where</label>
            <input type="text" placeholder="Anywhere" />
          </div>
          <div className="flex">
          <div className="form-group">
            <label for="checkin" className="small" style={{"text-transform":"uppercase"}}>Check-in</label>
            <input className="checkin" name="checkin" />
          </div>
          <div className="form-group">
          <label for="checkin" className="small" style={{"text-transform":"uppercase"}}>Check-Out</label>
            <input className="checkout" name="checkout" />
          </div>
          </div>
          <div className="form-group form-check">
            <label for="guests" className="small" style={{"text-transform":"uppercase"}}>Guests</label>
            <select class="guests" name="guests">
              <option>We don't do this</option>
            </select>
          </div>
        </form>

        <Link to="/listings" className="btn btn-primary">Submit</Link>
      </div>
    );
  }
}
