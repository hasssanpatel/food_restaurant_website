import React from 'react';

const Lunch = () => {
  const URL = "https://www.tripadvisor.in/Restaurant_Review-g1968325-d11909397-Reviews-Mughal_Mahal-Pimpri_Chinchwad_Pune_District_Maharashtra.html";

  const handleClick = () => {
    window.location.href = URL;
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/38/28/51/382851226a1c8320815aa9bd3f4e0c45.jpg" alt="Veg Biryani" />
          <div className="card-body">
            <h5 className="card-title">Veg Biryani</h5>
            <p className="card-text">If you want to eat Veg Biryani, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $9.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/9d/9c/15/9d9c15d49cf1a9ee0eaef3beb28133bc.jpg" alt="Anda Biryani" />
          <div className="card-body">
            <h5 className="card-title">Anda Biryani</h5>
            <p className="card-text">If you want to eat Anda Biryani, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $11.50</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <img src="https://i.pinimg.com/564x/a2/e8/0c/a2e80ca430aaba3a881eb9d2fe4033d4.jpg" alt="Chicken Biryani" />
          <div className="card-body">
            <h5 className="card-title">Chicken Biryani</h5>
            <p className="card-text">If you want to eat Chicken Biryani, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $12.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>

        <div className="card">
          <img src="https://i.pinimg.com/564x/71/ac/bc/71acbc1b1192f7aec3a670c7234e4b9a.jpg" alt="Beef Biryani" />
          <div className="card-body">
            <h5 className="card-title">Beef Biryani</h5>
            <p className="card-text">If you want to eat Beef Biryani, click on the button for the restaurants near you.</p>
            <p className="card-price">Price: $13.99</p>
            <button className="btn btn-primary" onClick={handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lunch;
