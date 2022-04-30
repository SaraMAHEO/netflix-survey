import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';

const Navigation = () => {
    const { user, setUser } = useContext(UserContext);

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/" className="nav-text">
                                <span>accueil</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/about" className="nav-text">
                                <span>à propos</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/login" className="nav-text" onClick={() => {
                                setUser(null);
                            }}>
                                <IoIcons.IoIosLogOut />
                                <span>déconnexion</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navigation;