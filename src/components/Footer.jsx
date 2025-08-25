import React from "react";

const Footer = () => {
  const marqueeText = "Made with ❤️ by Lambda";
  const gap = "\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <footer style={{ backgroundColor: "#222", color: "#fff", padding: "40px 20px" }}>
      {/* Address Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ marginBottom: "10px" }}>Contact Us</h3>
        <p>IIT Hyderabad</p>
        <p>Email: lambda@iith.ac.in | Phone: 1234567890</p>
      </div>

      {/* Marquee Section */}
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "#000",
          padding: "10px 0",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          marginTop: "30px",
        }}
      >
        <style>
          {`
            .marquee-content {
              display: inline-block;
              white-space: nowrap;
              animation: marquee 12s linear infinite; /* faster scroll */
              font-weight: bold;
              color: #ff69b4;
            }

            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
        <div className="marquee-content">
          {Array(20).fill(null).map((_, idx) => (
            <span key={idx}>{marqueeText + gap}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
