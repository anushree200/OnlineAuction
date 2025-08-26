import React,{ useState} from "react";
import Aurora from "./components/aurora";
import Particles from "./components/particles"; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const User = () => {
    const [image,setImage]=useState(null);

    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }
    }

    const handleRemove=()=>{
        setImage(null);
    }
    return (
        <div
        style={{
            backgroundColor: "black",
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            overflow: "hidden",
        }}
        >
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "300vh",
            zIndex: 0,
            }}
        >
            <Aurora />
            <Particles />
        </div>
    
        <NavBar />
        <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        paddingBottom: '150px',
        paddingTop: '210px'
      }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          padding: "50px",
          borderRadius: "20px",
          width: "700px",
          backdropFilter: "blur(15px)",
          boxShadow: "0 0 50px rgba(255,0,153,0.5)",
          textAlign: "center"
        }}>
          <h1 style={{
            color: "white",
            marginBottom: "30px",
            fontSize: "35px"
          }}>
            Create Auction
          </h1>

        <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <label style={{ color: "white", display: "block", marginBottom: "8px" }}>
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #555",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "white",
              }}
            />
        </div>

        <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <label style={{ color: "white", display: "block", marginBottom: "8px" }}>
              Description
            </label>
            <textarea
              placeholder="Enter description..."
              rows="7"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #555",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "white",
              }}
            ></textarea>
        </div>


        <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <label style={{ color: "white", display: "block", marginBottom: "8px" }}>
                Item Image
            </label>

            <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
            />

            {!image && (
                <label htmlFor="fileInput" style={buttonStyle1}>
                Browse…
                </label>
            )}

            {image && (
                <div
                style={{
                    position: "relative",
                    display: "inline-block",
                    marginTop: "10px",
                }}
                >
                <img
                    src={image}
                    alt="Preview"
                    style={{
                    borderRadius: "10px",
                    maxHeight: "180px",
                    display: "block",
                    }}
                />
                <button
                    onClick={handleRemove}
                    style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                    lineHeight: "22px",
                    textAlign: "center",
                    }}
                >
                    ×
                </button>
                </div>
            )}
        
        </div>


        <div style={{ marginBottom: "25px" , textAlign: "left"}}>
            <label style={{color: "white", display: "block", marginBottom: "8px" }}>
              Starting Bid (in Rupees)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #555",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "white",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <label style={{ color: "white", display: "block", marginBottom: "8px" }}>
              Auction Start Time
            </label>
            <input
              type="datetime-local"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <label style={{ color: "white", display: "block", marginBottom: "8px" }}>
              Auction End Time
            </label>
            <input
              type="datetime-local"
              style={inputStyle}
            />
          </div>

          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.opacity = "0.75")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Create Auction
          </button>
        </div>

        </div>
        <Footer />
    </div>
    );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #555",
  backgroundColor: "rgba(0,0,0,0.4)",
  color: "white",
};

const buttonStyle = {
  background: "linear-gradient(90deg, #ff0099, #8000ff)",
  borderRadius: "50px",
  color: "white",
  padding: "12px 32px",
  fontSize: "20px",
  border: "none",
  cursor: "pointer",
  transition: "background-position 0.4s",
  width: "100%",
  fontWeight: "bold",
};

const buttonStyle1 = {
  background: "linear-gradient(90deg, #ff0099, #8000ff)",
  borderRadius: "25px",
  color: "white",
  padding: "8px 16px",
  fontSize: "15px",
  border: "none",
  cursor: "pointer",
  display: "inline-block",
};

export default User;