import React from 'react';
import './orderstyle.css'
const CheckoutPage = () => {
  return (
    <div id='form-wrapper'>
      <form>
        {/* <div className='text-center'>
          <i className="fab fa-cc-visa fa-3x mr-3"></i>
          <i className="fab fa-cc-mastercard fa-3x mr-3"></i>
          <i className="fab fa-cc-amex fa-3x mr-3"></i>
          <i className="fab fa-cc-discover fa-3x mr-3"></i>
        </div> */}

        <h5>Billing Info</h5>
        <hr />

        <div className='form-group mb-1'>
          <label className='mb-1' htmlFor='firstName'>Full Name</label>
          <input className='form-control mb-1' id='firstName' type='text' placeholder='John' />
        </div>

        <div className='form-group mb-1'>
          <label className='mb-1' htmlFor='lastName'>Phone Number</label>
          <input id='lastName' type='text' className='form-control' placeholder='Dough' />
        </div>

        <div className='form-group mb-1'>
          <label className='mb-1'>Street</label>
          <input className='form-control' type='text' id='street1' placeholder='A1A Beach Front Ave' />
        </div>

        <div className='form-group mb-1'>
          <label className='mb-1' htmlFor='city'>City</label>
          <input type='text' id='city' className='form-control' placeholder='Miami' />
        </div>

        <div className='form-row mb-2'>
          <div className='col-md-8'>
            <label className='mb-1' htmlFor='state'>State</label>
            <input id='state' className='form-control' placeholder='Florida' />
          </div>
          <div className='col-md-4'>
            <label className='mb-1' htmlFor='zip'>Zip</label>
            <input type='text' id='zip' className='form-control' placeholder='00666' />
          </div>
        </div>

        <h5>Card Info</h5>
        <hr className='mb-1' />

        <div className='form-group mb-1'>
          <label className='mb-1' htmlFor='nameOnCard'>Name on card</label>
          <input className='form-control' id='nameOnCard' placeholder='Johnny Big Dough' />
        </div>

        <div className='form-group mb-1'>
          <label className='mb-1' htmlFor='cardNum'>Card number</label>
          <input className='form-control' id='cardNum' placeholder='' />
        </div>

        <div className='form-row mb-1'>
          <div className='col'>
            <label className='mb-0' htmlFor='expMonth'>Expiration Month</label>
            <select className='form-control' id='expMonth'>
              <option value='01'>Jan</option>
              <option value='02'>Feb</option>
              <option value='03'>March</option>
              <option value='04'>April</option>
              <option value='05'>May</option>
              <option value='06'>June</option>
              <option value='07'>July</option>
              <option value='08'>Aug</option>
              <option value='09'>Sept</option>
              <option value='10'>Oct</option>
              <option value='11'>Nov</option>
              <option value='12'>Dec</option>
            </select>
          </div>
          <div className='col'>
            <label className='mb-0' htmlFor='expYear'>Exp Year</label>
            <select className='form-control' id='expYear'>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
          <div className='col'>
            <label className='mb-0' htmlFor='ccv'>CCV</label>
            <input placeholder='* * * *' className='form-control' id='ccv' />
            <button className='' type='submit'><i className="fas fa-lock mr-2"></i>Submit Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
