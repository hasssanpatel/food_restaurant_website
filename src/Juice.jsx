import React from 'react';

const Juice = () => {
  const URL = "https://www.justdial.com/Aurangabad-Maharashtra/Singhavis-A-Sweet-And-Salty-Treat-Near-House-Of-Jhonson-Cidco-Colony/9999PX240-X240-100921142548-V6I8_BZDET";

  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/fd/fd/28/fdfd2835f43237d3b51b058c36bf5871.jpg" alt="Mango Juice" />
          <div className="card-body">
            <h5 className="card-title">Mango Juice</h5>
            <p className="card-text">If you want to eat Mango Juice, click on the button for the shop near you.</p>
            <p className="card-price">Price: $3.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/95/28/3e/95283e3f0de6e6505373ca97e150aef6.jpg" alt="Chocolate Juice" />
          <div className="card-body">
            <h5 className="card-title">Chocolate Juice</h5>
            <p className="card-text">If you want to eat Chocolate Juice, click on the button for the shop near you.</p>
            <p className="card-price">Price: $4.50</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/736x/cf/8a/0a/cf8a0a53e893fbd62c8855a2f9606c90.jpg" alt="Pineapple Juice" />
          <div className="card-body">
            <h5 className="card-title">Pineapple Juice</h5>
            <p className="card-text">If you want to eat Pineapple Juice, click on the button for the shop near you.</p>
            <p className="card-price">Price: $2.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/736x/7c/dd/da/7cdddacd06b0d40bf86f57b32e9df4f3.jpg" alt="Orange Juice" />
          <div className="card-body">
            <h5 className="card-title">Orange Juice</h5>
            <p className="card-text">If you want to eat Orange Juice, click on the button for the shop near you.</p>
            <p className="card-price">Price: $5.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juice;  