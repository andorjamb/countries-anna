import React from 'react';

const Home = () => {
  return (
    <div>
      <div>
        <p><span>'Countries' </span>is a simple React application made as an end-of-term assignment at
          Business College Helsinki. </p>
        <p> The app makes use of {' '}
          <a href="https://restcountries.com/">https://restcountries.com/ </a> and{' '}
          <a href="https://openweathermap.org/">https://openweathermap.org/</a> APIs.</p>
        <div id="imageCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../assets/norway.jpg" className="d-block w-100" alt="Norwegian mountain" />
            </div>
            <div className="carousel-item">
              {/*         <img src="..." className="d-block w-100" alt="Women in Kyoto"> */}
            </div>
            <div className="carousel-item">
              {/* <img src="..." className="d-block w-100" alt="..."> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
