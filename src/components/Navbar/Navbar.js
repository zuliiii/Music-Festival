import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';




function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: '#E0E1DD' }}>
        <div className='navbar'>
          <p className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </p>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <p className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </p>
            </li>
            <li className="nav-item-one">
                <Link to="/" className="nav-item"><span><AiIcons.AiFillHome /></span>Home</Link>
            </li>
            <li >
                <div className="nav-item"><span> <IoIcons.IoIosDisc /></span>DJ\'s</div>
            </li>
            <li >
                <div className="nav-item"><span> <FaIcons.FaTable /></span>Schedule</div>
            </li>
            <li >
                <div className="nav-item"><span><FaIcons.FaTicketAlt /></span>Ticket Packages</div>
            </li>
            <li >
                <div className="nav-item"><span> <FaIcons.FaQuestion /></span>What will Happen</div>
            </li>
            <li >
                <div className="nav-item"><span><IoIcons.IoMdList /></span>Sponsores</div>
            </li>
            <li >
                <Link to="/Contact" className="nav-item"><span> <IoIcons.IoMdContact /></span>Contact Us</Link>
            </li>
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <p>
                    {item.icon}
                    <span>{item.title}</span>
                  </p>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;