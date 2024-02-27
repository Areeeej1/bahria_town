import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Slide } from "react-slideshow-image";
import "../Style/NavBar.css"
import "react-slideshow-image/dist/styles.css";
import NavBarMenu from "./NavBarMenu";
function NavBar() {
  const [scroll, setScroll] = useState(true);
  const [menu, setmenu] = useState(window.innerWidth < 1200);
  const actions = [
    { label: "Projects", value: 0 },
    { label: "Karachi", value: 1 },
    { label: "Lahore", value: 2 },
  ];
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
   
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("hello");
      const scrollCheck = window.innerWidth < 1200;
   
      if (scrollCheck !== scroll) {
        setmenu(scrollCheck);
      }
    });
  });
  
  // console.log(scroll);
  // console.log(window.minWidth);
  // console.log(window.width);
  console.log(window.innerWidth<1200);
  // console.log(window.outerWidth);
  
  const images = [
    "https://bahriatown.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-11-at-3.43.37-PM.jpeg",
    "https://bahriatown.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-11-at-3.43.44-PM.jpeg",
    "https://bahriatown.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-11-at-3.43.53-PM.jpeg",
  ];
  return (
    <div className="navBar">
      <div className="navBar2">
        <p>Feedback</p>
        <p>Careers</p>
        <p>Record Updation Form</p>
        <YouTubeIcon></YouTubeIcon>
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <InstagramIcon></InstagramIcon>
        <LinkedInIcon></LinkedInIcon>
      </div>
<div className={scroll ? "navBar3" : "navBarscroll"}>
<img style={{paddingRight:"23%" ,width:"40%"}}src="https://bahriatown.com/wp-content/uploads/2020/06/bt-logo-white-H-Logo.png"></img>
       
{menu?<NavBarMenu/>:<>
        
        <p>About</p>
        <p>Lifestyle</p>
        {/* <p>Projects</p> */}
        <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel style={{ color: "bisque" }}>Projects</InputLabel>
          <Select defaultValue="" label="Projects">
            <MenuItem value={10}>Lahore</MenuItem>
            <MenuItem value={20}>Karachi</MenuItem>
          </Select>
        </FormControl>
        <p>MediaCenter</p>
        <p>Contacts</p>
        </>
          }
      </div>
           
      {/* ________________________________________________ */}
     
      <Slide>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Slide>
    </div>
  );
}

export default NavBar;
