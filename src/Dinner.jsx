import React from 'react';

const Dinner = () => {
  const URL = "https://www.justdial.com/Aurangabad-Maharashtra/Hot-Spot-Restaurant-Near-Moon-Light-Restaurant-Aurangabad-Ho/9999PX240-X240-140130223412-S2X1_BZDET";

  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/66/c3/a7/66c3a7f4868de773dca1030686d0ad34.jpg" alt="Vegetable Jalfrezi" />
          <div className="card-body">
            <h5 className="card-title">Vegetable Jalfrezi</h5>
            <p className="card-text">If you want to eat Vegetable Jalfrezi, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $14.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/97/fd/3e/97fd3e729031013515d331199a4d86e6.jpg" alt="Egg Curry" />
          <div className="card-body">
            <h5 className="card-title">Egg Curry</h5>
            <p className="card-text">If you want to eat Egg Curry, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $15.50</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/74/75/6a/74756a2cccbba250785c8a78f0d11fad.jpg" alt="Chicken Tikka Masala" />
          <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala</h5>
            <p className="card-text">If you want to eat Chicken Tikka Masala, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $17.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/af/a2/ac/afa2acf23de1e7190971929ef9905e67.jpg" alt="Beef Korma" />
          <div className="card-body">
            <h5 className="card-title">Beef Korma</h5>
            <p className="card-text">If you want to eat Beef Korma, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $19.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dinner;