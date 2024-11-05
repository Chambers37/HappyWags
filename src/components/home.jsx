import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        {/* Header Section */}
        <header className="home-header">
          <h1>Welcome to HappyWags!</h1>
          <p>Your go-to place for finding adoptable pets in your area.</p>
        </header>

        {/* Search Section */}
        <section className="search-section">
          <h2>Find a Pet Near You</h2>
          <input
            type="text"
            placeholder="Enter your location"
            className="location-input"
          />
          <button className="search-button">Search Pets</button>
        </section>

        {/* Featured Pets Section */}
        <section className="featured-pets">
          <h2>Meet Some of Our Pets!</h2>
          <div className="pets-grid">
            {/* Each pet item could be a card with pet info */}
            <div className="pet-card">
              <img src="/path/to/pet1.jpg" alt="Pet 1" />
              <h3>Pet Name</h3>
              <p>Breed - Age</p>
            </div>
            <div className="pet-card">
              <img src="/path/to/pet2.jpg" alt="Pet 2" />
              <h3>Pet Name</h3>
              <p>Breed - Age</p>
            </div>
            {/* Add more pet cards as needed */}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="cta-section">
          <button className="explore-button">Explore All Pets</button>
          <button className="signup-button" onClick={() => navigate('/auth')}>Sign Up / Log In</button>
        </section>
      </div>
    </>
  );
};

export default Home;
