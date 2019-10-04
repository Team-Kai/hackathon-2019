import React, { Component } from "react";

export default class ModalForm extends Component {
  render() {
    return (
      <div className="popup">
        <h1>Book unique places to stay and things to do.</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Where</label>
            <input type="text" placeholder="Anywhere" />
          </div>
          <div className="form-group">
            <label for="checkin">Check-in</label>
            <input className="checkin" name="checkin" />
            <label for="checkin">Check-Out</label>
            <input className="checkout" name="checkout" />
          </div>
          <div className="form-group form-check">
            <label for="guests">Guests</label>
            <select class="guests" name="guests">
              <option>We don't do this</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
