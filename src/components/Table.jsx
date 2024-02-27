import React from "react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { display } from "@mui/system";
const Table = () => {
  const images = [
    "https://bahriatown.com/wp-content/uploads/2020/06/LifeStyle-Image-02-1024x682.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/LifeStyle-Image-01-1024x682.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/LifeStyle-Image-03-1024x682.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/LifeStyle-Image-04-1024x682.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/LifeStyle-Image-05-1-1024x682.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/VirtualTourBG-1024x576.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/Screenshot-2022-03-07-at-10.48.52-AM.png",
    "https://bahriatown.com/wp-content/uploads/2021/11/1-15-1024x576.jpg",
    "https://bahriatown.com/wp-content/uploads/2021/11/IMG-20211111-WA0006-1024x435.jpg",
  ];
  const text=["Hospitality"];
  const image2 = [
    "https://bahriatown.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-19-at-2.26.20-PM-1-300x200.jpeg",
    "https://bahriatown.com/wp-content/uploads/2022/07/DJI_0964-1-300x200.jpg",
    "https://bahriatown.com/wp-content/uploads/2022/07/9120ad22-4ef8-4eeb-9451-17cf882df4c1-300x169.jpg",
    "https://bahriatown.com/wp-content/uploads/2022/06/E7A1149-300x200.jpg",
  ];
  return (
    <>
      <div className="project" style={{ paddingLeft: "4%" }}>
        <div style={{position: "relative"}} className="projectStyle12">
          <img className="projectImg" src={images[0]}></img>
          <div  style={{color:"white",marginLeft:"2%",marginTop:"-15%",position: "absolute"}}>{text[0]}</div>
        </div>

        <div className="projectStyle12">
          <img className="projectImg" src={images[1]}></img>
        </div>

        <div className="projectStyle12">
          <img className="projectImg" src={images[2]}></img>
        </div>
      </div>
      <div className="project" style={{ paddingLeft: "4%" }}>
        <div className="projectStyle12">
          <img className="projectImg" src={images[3]}></img>
        </div>

        <div className="projectStyle12">
          <img className="projectImg" src={images[4]}></img>
        </div>

        <div className="projectStyle12">
          <img className="projectImg" src={images[5]}></img>
        </div>
      </div>
      <div className="project" style={{ paddingLeft: "4%" }}>
        <div className="projectStyle12">
          <img className="projectImg" src={images[6]}></img>
        </div>

        <div className="projectStyle12">
          <img className="projectImg" src={images[7]}></img>
        </div>

        <div className="projectStyle12">
          <img className="projectImg" src={images[8]}></img>
        </div>
      </div>
      <br></br>
      <div className="imgBackground">
        <div style={{ paddingTop:"8%" }}>
        <h1 style={{ textAlign: "center",color:"White" }}>
          Lets Visit Bahria town
        </h1>
        <button style={{ fontSize: "250%" ,color:" #555"}}>
          Virtual Tour!
        </button>
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "8%" }}>
          Sayings of Our Customers!
        </h1>
        <div style={{ display: "flex", paddingLeft: "10%" }}>
          <div style={{ width: "40%", paddingInlineEnd: " 15%" }}>
            <p>
              Brilliant Work! It’s such a wonderful place to live. Can’t believe
              that something this great could be build in Karachi, it’s a new
              Karachi. No not Karachi but New Pakistan! Security is exceptional.
            </p>
            <div style={{ display: "flex", gap: "2%" }}>
              <img
                style={{ borderRadius: "400%", width: "15%" }}
                src="https://bahriatown.com/wp-content/uploads/2020/06/WhatsApp-Image-2022-04-28-at-2.14.21-PM-1-150x150.jpeg"
              ></img>
              <p>Ahmed Nawaz (Karachi)</p>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <p>
              Brilliant Work! It’s such a wonderful place to live. Can’t believe
              that something this great could be build in Karachi, it’s a new
              Karachi. No not Karachi but New Pakistan! Security is exceptional.
            </p>
            <div style={{ display: "flex", gap: "2%" }}>
              <img
                style={{ borderRadius: "400%", width: "15%" }}
                src="https://bahriatown.com/wp-content/uploads/2020/06/mohsin-abbas-150x150.jpg"
              ></img>
              <p>Mohsin Abbas (Islamabad)</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "4%", textAlign: "center" }}>
        <h1> Latest Press Releases</h1>
        <div className="project" style={{ paddingLeft: "4%" }}>
          <div className="projectStyle12">
            <img className="projectImg" src={image2[0]}></img>
          </div>

          <div className="projectStyle12">
            <img className="projectImg" src={image2[1]}></img>
          </div>

          <div className="projectStyle12">
            <img className="projectImg" src={image2[2]}></img>
          </div>
          <div className="projectStyle12">
            <img className="projectImg" src={image2[3]}></img>
          </div>
        </div>
      </div>
      <br></br>
      {/* ___________________________________end___________________________________________ */}
      <div style={{ marginTop: "5%", backgroundColor: "lightBlue" }}>
        <h1 style={{ paddingLeft: "4%", paddingTop: "5%" }}>
          Corporate Offices
        </h1>
        <div style={{ paddingLeft: "3%", display: "flex" }}>
          <LocationOnSharpIcon style={{ marginTop: "1%" }} />
          <p>
            Karachi – Super Highway, Bahria Town <br></br> Karachi
          </p>
          <LocationOnSharpIcon
            style={{ paddingInlineStart: "6%", marginTop: "1%" }}
          />
          <p>
            Lahore – Bahria Orchard,  Main Raiwind <br></br> Road
          </p>
        </div>
        <div style={{ paddingLeft: "3%", display: "flex" }}>
          <LocationOnSharpIcon style={{ marginTop: "1%" }} />
          <p >
            Islamabad – Sector J, Phase-2 Bahria <br></br> Enclave
          </p>
          <LocationOnSharpIcon
            style={{ paddingInlineStart: "7%", marginTop: "1%" }}
          />
          <p>
            Nawabshah – Qazi Ahmed Road,  <br></br>Bahria road
          </p>
        </div>
        <div style={{ paddingLeft: "3%", display: "flex" }}>
          <LocationOnSharpIcon style={{ marginTop: "1%" }} />
          <p style={{ paddingInlineEnd: "8%"}}>
            Rawalpindi – Phase 8, Bahria Town <br></br> Rawalpindi
          </p>
          <LocationOnSharpIcon
            style={{ marginTop: "1%" }}
          />
          <p>
            Peshawar – Tarnab Farms, GT Road <br></br> Peshawar
          </p>
        </div>
      </div>
   
    </>
  );
};

export default Table;
