import React from "react";
import Aurora from "./components/aurora";
import Particles from "./components/particles";
import NavBar from "./components/NavBar";
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

      <NavBar />

      {/* Login Form */}
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        paddingBottom: '100px',
        paddingTop: '150px'
      }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          padding: "50px",
          borderRadius: "20px",
          width: "400px",
          backdropFilter: "blur(15px)",
          boxShadow: "0 0 50px rgba(255,0,153,0.5)",
          textAlign: "center"
        }}>
          <h1 style={{
            color: "white",
            marginBottom: "30px",
            fontSize: "35px"
          }}>
            Login
          </h1>

          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            style={inputStyle}
          />

          <button style={buttonStyle}>
            Sign In
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  margin: "12px 0",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  fontSize: "16px",
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "white",
};

const buttonStyle = {
  background: "linear-gradient(90deg, #ff0099, #8000ff)",
  borderRadius: "50px",
  color: "white",
  padding: "12px 32px",
  fontSize: "18px",
  border: "none",
  cursor: "pointer",
  marginTop: "25px",
  width: "100%",
  transition: "transform 0.2s",
};

export default LoginPage;
