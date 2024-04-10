import { useState } from 'react';
import './header.css'
import { CiMenuFries } from "react-icons/ci";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='header'>
        <a href="#">Abel Sadia</a>
        <div className={showMenu ? "navbar showmenu" : "navmenu"}>
            <a href="#skills" className='navbar__links'>Skills</a>
            <a href="#projects" className='navbar__links'>Projects</a>
            <a href="#contacts" className='navbar__links'>Contacts</a>
        </div>
        <button onClick={() => setShowMenu(!showMenu)} className='btn__toggle'><CiMenuFries /></button>
    </div>
  )
}

export default Header