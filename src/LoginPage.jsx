import React from "react";
import Aurora from './components/aurora';
import Particles from './components/particles';
import NavBar from './components/NavBar';

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
        height: '100vh',
        zIndex: 0
      }}>
        <Aurora />
        <Particles />
      </div>

      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ 
          color: 'white', 
          textAlign: 'center',
          fontSize:'70px', 
          paddingTop: '35vh' 
        }}>
          Discover Incredible Auctions
        </h1>
        <h4 style={{color:'white',textAlign:'center',fontSize:'18px',paddingTop:'15px'}}>Join the buzz and explore our vast collection of unique items <br></br>available for bidding. Get the best deals and start winning journey today</h4>
        <div style={{
          paddingTop: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}>
            <button style={{
              paddingTop: '12px',
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              borderRadius: "50px",
              color: "white",
              padding: "12px 32px",
              fontSize: "20px",
              boxShadow: "0 0 30px 10px rgba(255,0,150,0.7), 0 0 80px 20px rgba(128,0,255,0.7)",
              border: "none",
              cursor: "pointer"
            }}>Browse Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
