import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const NavBarMenu=()=>{
  const[values,setValues]=React.useState(0);
 const [menu,isMenu]=React.useState(false);
 const [detail,setDetailMenu]=React.useState(false);
 const listMenu=["About","Lifestyle","Projects","Media Center","Contacts"];
 const showMenu=()=>{
  console.log("hello");
  isMenu(true);
 }
 const closeMenu=()=>{
  console.log("hello");
  isMenu(false);
 }

return(
 
  <div onMouseEnter={()=>{isMenu(true)}} onMouseLeave={()=>{isMenu(false)}} style={{marginLeft:"30%"}}>
  {/* <button onClick={showMenu}><MenuIcon ></MenuIcon></button> */}
 <MenuIcon></MenuIcon>
   { menu?
   <div style={{marginLeft:"-90%"}}>
{/*   
    {listMenu.map((list)=>{
      return(
      <ul>
        {list}
      </ul>
      )
    })} */}
    <ul>
      <li>About</li>
      <li>Lifestyle</li>
     <li onMouseEnter={()=>{setDetailMenu(true)} } onMouseLeave={()=>{setDetailMenu(false)}}>
     Projects
      {detail?<ul>
        <li>
        Lahore
        </li>
        <li>
        Karachi
          </li>
          </ul>:null}</li>
          <li>MediaCenter</li>
          <li>Contacts</li>
    

    </ul>
      {/* <button style={{marginLeft:"40%"} }onClick={closeMenu}><CloseIcon/></button> */}
   </div>:null}
   </div>
  

)
}
export default NavBarMenu;
