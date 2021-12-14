import React,{useState} from "react";

import SwipeableDrawer from '@mui/material/SwipeableDrawer';



export default function Navbar() {

    const [drawerOpen, setDawerOpen] = useState(false)

    const handleDrawerToggle = (e)=>{
        setDawerOpen(!drawerOpen)


    }

      const handleScroll = (e)=>{
        
        const a =document.getElementById(e)
        console.log(a)
        a.scrollIntoView({
          
          behavior: 'smooth'
        });

    }

  return (



    
    <div className="w-100  bg-primary flex items-center justify-center h-16 text-secondary text-lg shadow-2xl border-b border-green">
      <div className="w-11/12 flex items-center justify-between">
        <img src="" alt="logo" className="w-16" />

        
          <div className=" hidden md:flex gap-3 items-center font-semibold">
            <p onClick={()=>{handleScroll('about')}}>About</p>
            <p onClick={()=>{handleScroll('skill')}}>Skill</p>
            <p onClick={()=>{handleScroll('getintouch')}}>Contact</p>
            <a href="https://drive.google.com/file/d/1Ab91OwlWCUhmhM3g6oMgb8A0S5GdvCCQ/view?usp=sharing ">
              <button className="border-2 border-green text-sm p-2 font-bold">
                Resume
              </button>
            </a>
          </div>

           {/* sidebar button  */}
          <button onClick={handleDrawerToggle} className=" md:hidden  flex flex-col gap-y-2 items-end" >
                <div className="bg-green w-10 h-0.5" ></div>
                <div className="bg-green w-7 h-0.5" ></div>
                <div className="bg-green w-4 h-0.5" ></div>
          </button>

            <SwipeableDrawer className="drawerClass" anchor='right' open={drawerOpen}>
                <div className="flex flex-col items-center justify-center h-screen w-screen">
                    <p onClick={handleScroll} >About</p>
                    <p>Skill</p>
                    <p>Contact</p>
                    <a href="https://drive.google.com/file/d/1Ab91OwlWCUhmhM3g6oMgb8A0S5GdvCCQ/view?usp=sharing ">
                        <button className="border-2 border-green text-sm p-2 font-bold">
                            Resume
                        </button>
                    </a>
                    <button onClick={handleDrawerToggle}>close</button>
                </div>
            
                

              
            </SwipeableDrawer> 
        
      </div>
    <style>
      {`    
            .drawerClass>div>div{
                width:30vh;
                background:green;
            }
             
            `}
    </style> 
    </div>
  );
}
