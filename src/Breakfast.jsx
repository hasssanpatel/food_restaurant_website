import React from 'react';

const Breakfast = () => {
  const URL = "https://www.example.com/breakfast";

  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/ce/12/3d/ce123df4c1f01505ecee6cab101dbc46.jpg" alt="Pancakes" />
          <div className="card-body">
            <h5 className="card-title">Pancakes</h5>
            <p className="card-text">If you want to eat Pancakes, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $5.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/e6/57/8c/e6578c7a98da7d0b47209924f7c28dd0.jpg" alt="Omelette" />
          <div className="card-body">
            <h5 className="card-title">Omelette</h5>
            <p className="card-text">If you want to eat Omelette, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $7.50</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/53/ad/2b/53ad2bb2104f06a5843f06c89c870013.jpg" alt="French Toast" />
          <div className="card-body">
            <h5 className="card-title">Masala French Toast</h5>
            <p className="card-text">If you want to eat French Toast, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $6.25</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/b1/07/83/b107831c7cfd8e0becf8b5b7b187135d.jpg" alt="Itali Sambhar" />
          <div className="card-body">
            <h5 className="card-title">Itali Sambhar</h5>
            <p className="card-text">If you want to eat Itali Sambhar, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $8.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breakfast;