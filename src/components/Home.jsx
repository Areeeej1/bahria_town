import React from "react";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
const Home = () => {
  return (
    <div className="home">
      <div className="homeStyle">
          <h1>Revolutionising Energy Production</h1>
          <p>
            Bahria Town becomes the market-leader in revolutionising energy
            production in Pakistan, and laying the foundation of creating a
            cleaner and greener nation.
          </p>
        <button style={{color:"#333333", marginTop: "5%", fontSize: "115%", paddingTop: "-1" 
}}>
          View More <ArrowCircleRightRoundedIcon />
        </button>
      </div>
      <div className="homeStyle2">
      <iframe
       
        width="94%"
        height="450"
        src="https://www.youtube.com/embed/pcLsGKrEiWo?feature=oembed"
      ></iframe>
      </div>
    </div>

  );
};

export default Home;
