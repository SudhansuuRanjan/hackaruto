import './Main.css'
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../resources/finclip-logo.png'

const NavBarItem = ({ title , classProps}) =>{
    return (
       <li className={`mx-4 cursor-pointer ${classProps}`} > 
          {title}
       </li>
    )
}


const Navbar = () => {
   const [toggleMenu , setToggleMenu ] = useState(false);
   const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 50){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav className={colorChange?"w-full flex md:justify-center justify-between items-center p-4 fixed top-0 z-999 bg-white drop-shadow":"w-full flex md:justify-center justify-between items-center p-4 fixed top-0 z-999 bg-white"}>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "About", "Features","Services", "Contact"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="border-2 border-green-500 py-1.5 px-7 mx-4 rounded-xl cursor-pointer text-green-500 hover:bg-green-500 hover:text-white hover:border-white">
          Register
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-black animate-slide-in text-2xl font-semibold"
          >
            <li className="text-2xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "About", "Features","Services", "Contact"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
    )
}

export default Navbar;
