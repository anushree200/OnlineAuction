import React from "react";
import Aurora from './components/aurora';
import Particles from './components/particles';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
const LoginPage = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '300vh',
        zIndex: 0
      }}>
        <Aurora />
        <Particles />
      </div>

      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: '150px' }}> 
        <h1 style={{ 
          color: 'white', 
          textAlign: 'center',
          fontSize:'70px', 
          paddingTop: '35vh' 
        }}>
          Discover Incredible Auctions
        </h1>
        <h4 style={{color:'white',textAlign:'center',fontSize:'18px',paddingTop:'15px'}}>
          Join the buzz and explore our vast collection of unique items <br/>
          available for bidding. Get the best deals and start winning journey today
        </h4>

        <div style={{
          paddingTop: '55px',
          display: 'flex',
          justifyContent: 'center',
          gap: '80px',
        }}>
          <button
            className="gradient-btn"
            style={buttonStyle}
          >
              Browse Auctions
          </button>
          <button
            className="shimmer-btn"
            style={buttonStyle}
          >
              Start Selling +
          </button>
        </div>

        {/* Section Heading */}
        <h1 style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '40px',
          marginTop: '280px',
          marginBottom: '50px'
        }}>
          Why Choose Our Platform?
        </h1>

        {/* Cards Section */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          padding: "0 60px",
          flexWrap: "wrap",
        }}>
          <Card 
            title="Exclusive Deals"
            text="Get access to unique items you won’t find anywhere else. Explore hidden gems and rare collectibles."
          />
          <Card 
            title="Trusted Sellers"
            text="Our platform hosts verified sellers ensuring secure and transparent transactions for every buyer."
          />
          <Card 
            title="Fast Bidding"
            text="Experience smooth, real-time bidding with our optimized system. Never miss out on your dream item."
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

const buttonStyle = {
  background: "linear-gradient(90deg, #ff0099, #8000ff)",
  borderRadius: "50px",
  color: "white",
  padding: "12px 32px",
  fontSize: "20px",
  border: "none",
  cursor: "pointer",
  transition: "background-position 0.4s"
};

const Card = ({ title, text }) => (
  <div style={{
    flex: "1 1 250px",
    backgroundColor: "rgba(128,128,128,0.2)",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 25px rgba(0,0,0,0.6)",
  }}>
    <h2 style={{
      color: "white",
      fontWeight: "bold",
      fontSize: "22px",
      marginBottom: "15px",
    }}>{title}</h2>
    <p style={{
      color: "rgba(255,255,255,0.8)",
      fontSize: "16px",
      lineHeight: "1.6",
    }}>{text}</p>
  </div>
);

export default LoginPage;
