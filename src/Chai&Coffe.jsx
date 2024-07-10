import React from 'react';

const Chai = () => {
  const URL = "https://www.justdial.com/Aurangabad-Maharashtra/Singhavis-A-Sweet-And-Salty-Treat-Near-House-Of-Jhonson-Cidco-Colony/9999PX240-X240-100921142548-V6I8_BZDET";

  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/43/6d/a4/436da44985d61c713fbc4e2676e18a68.jpg" alt="Masala Chai" />
          <div className="card-body">
            <h5 className="card-title">Masala Chai</h5>
            <p className="card-text">If you want to eat Masala Chai, click on the button for the shop near you.</p>
            <p className="card-price">Price: $3.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/dc/e2/f2/dce2f26fbff2221a89354c60ad92f160.jpg" alt="Vanilla Chai Hot Chocolate." />
          <div className="card-body">
            <h5 className="card-title">Vanilla Chai Hot Chocolate.</h5>
            <p className="card-text">If you want to eat Vanilla Chai Hot Chocolate., click on the button for the shop near you.</p>
            <p className="card-price">Price: $4.50</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/3c/9c/27/3c9c278c5b0a3bfb8ae7c2c5634b90fa.jpg" alt="Capichino Coffee  " />
          <div className="card-body">
            <h5 className="card-title">Capichino Coffee </h5>
            <p className="card-text">If you want to eat Capichino Coffee  , click on the button for the shop near you.</p>
            <p className="card-price">Price: $2.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg" alt="Mocha Coffee" />
          <div className="card-body">
            <h5 className="card-title">Mocha Coffee</h5>
            <p className="card-text">If you want to eat Mocha Coffee, click on the button for the shop near you.</p>
            <p className="card-price">Price: $5.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chai;  