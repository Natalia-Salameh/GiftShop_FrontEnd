import React, { useState } from 'react';
import './orderstyle.css';

const CheckoutPage = () => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let customerId = parseInt(localStorage.getItem('customerId'), 10);
    console.log(customerId);

    const order = {
      customer: {
        id: customerId,
        email: localStorage.getItem('customerEmail'),
        password: localStorage.getItem('password'), // Include the password if needed
        username: localStorage.getItem('customerUsername')
      },
      buyerName: buyerName,
      buyerPhone: buyerPhone,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode
    };

    fetch(`http://localhost:8080/Orders?customerId=${customerId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error creating order');
        }
      })
      .then(data => {
        console.log('Order created successfully:', data);
        // Handle the successful response
      })
      .catch(error => {
        console.error('Error creating order:', error);
        // Handle the error
      });
  };

  return (
    <div id="form-wrapper">
      <form onSubmit={handleSubmit}>
        {/* Buyer Info */}
        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="buyerName">
            Full Name
          </label>
          <input
            className="form-control mb-1"
            id="buyerName"
            type="text"
            placeholder="John Doe"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="buyerPhone">
            Phone Number
          </label>
          <input
            className="form-control"
            id="buyerPhone"
            type="text"
            placeholder="1234567890"
            value={buyerPhone}
            onChange={(e) => setBuyerPhone(e.target.value)}
            required
          />
        </div>

        {/* Shipping Info */}
        <div className="form-group mb-1">
          <label className="mb-1">Street</label>
          <input
            className="form-control"
            type="text"
            id="street"
            placeholder="A1A Beach Front Ave"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="Miami"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="state">
            State
          </label>
          <input
            id="state"
            className="form-control"
            placeholder="Florida"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="zipCode">
            Zip
          </label>
          <input
            type="text"
            id="zipCode"
            className="form-control"
            placeholder="00666"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>

        <h5 className="card-info-heading">Card Info</h5>
        <hr className="mb-1" />

        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="nameOnCard">
            Name on card
          </label>
          <input
            className="form-control"
            id="nameOnCard"
            placeholder="Johnny Big Dough"
          />
        </div>

        <div className="form-group mb-1">
          <label className="mb-1" htmlFor="cardNum">
            Card number
          </label>
          <input className="form-control" id="cardNum" placeholder="" />
        </div>

        <div className="form-row mb-1">
          <div className="col">
            <label className="mb-0" htmlFor="expMonth">
              Expiration Month
            </label>
            <select className="form-control" id="expMonth">
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sept</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          <div className="col">
            <label className="mb-0" htmlFor="expYear">
              Exp Year
            </label>
            <select className="form-control" id="expYear">
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <div className="col">
            <label className="mb-0" htmlFor="ccv">
              CCV
            </label>
            <input
              placeholder="* * * *"
              className="form-control"
              id="ccv"
            />
            <button className="submit-payment-button" type="submit">
              <i className="fas fa-lock mr-2"></i>Submit Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
