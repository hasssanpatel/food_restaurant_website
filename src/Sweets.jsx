import React from 'react';

const Sweets = () => {
  const URL = "https://www.justdial.com/Aurangabad-Maharashtra/Singhavis-A-Sweet-And-Salty-Treat-Near-House-Of-Jhonson-Cidco-Colony/9999PX240-X240-100921142548-V6I8_BZDET";

  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/15/1d/20/151d205b62b97f29ac1c94b86df184ff.jpg" alt="Peda" />
          <div className="card-body">
            <h5 className="card-title">Peda</h5>
            <p className="card-text">If you want to eat Peda, click on the button for the shop near you.</p>
            <p className="card-price">Price: $3.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/b0/36/92/b036928e4e328d95e05382a658b139a3.jpg" alt="Mali Doodh" />
          <div className="card-body">
            <h5 className="card-title">Mali Doodh</h5>
            <p className="card-text">If you want to eat Mali Doodh, click on the button for the shop near you.</p>
            <p className="card-price">Price: $4.50</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/58/21/1d/58211dc5abb6d09411b42685a5137b41.jpg" alt="Rasgulla" />
          <div className="card-body">
            <h5 className="card-title">Rasgulla</h5>
            <p className="card-text">If you want to eat Rasgulla, click on the button for the shop near you.</p>
            <p className="card-price">Price: $2.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/d1/98/85/d198855ac9c9f759fb0d75055a87fa2a.jpg" alt="Chocolate Brownie" />
          <div className="card-body">
            <h5 className="card-title">Chocolate Brownie</h5>
            <p className="card-text">If you want to eat Chocolate Brownie, click on the button for the shop near you.</p>
            <p className="card-price">Price: $5.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sweets;