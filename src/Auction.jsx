import React from "react";
import Aurora from "./components/aurora";
import Particles from "./components/particles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect,useState } from "react";
const Auction = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/auctions');
                const data = await res.json();
                setAuctions(data);
            }catch(err){
                console.error("Error fetching auctions:", err);
                setAuctions([]);
            }finally{
                setLoading(false);
            }
        };
        fetchAuctions();
    }, []);
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
    
        <div
            style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            paddingTop: "200px",
            paddingBottom: "100px",
            color: "white",
            }}
        >
            {loading?(<h1>Loading Auctions...</h1>):(auctions.length===0?(<h1>No auctions available</h1>):(
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px",width:"90%"}}>
                    {auctions.map((auction)=>(
                        <div key={auction.id} style={{backgroundColor:"rgba(255,255,255,0.1)",padding:"20px",borderRadius:"15px",boxShadow:"0 0 20px rgba(255,0,150,0.5)"}}>
                            <h2>{auction.title}</h2>
                            <p>{auction.description}</p>
                            <p>Starting Bid: ${auction.startingBid}</p>
                            <p>Auction Ends: {new Date(auction.endTime).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    
        <Footer />
        </div>
    );
}

export default Auction;