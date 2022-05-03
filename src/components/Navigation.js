import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ScoreContext } from '../context/ScoreContext';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { FiHome, FiLogOut, FiUser, FiMenu } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";

const Header = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const { user, setUser } = useContext(UserContext);
    const { array, setArray } = useContext(ScoreContext);

    return (
        <>
            <div className="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiMenu />
                            ) : (
                                <FiMenu />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                <NavLink to="/" className="nav-text">
                                    Accueil
                                </NavLink>
                            </MenuItem>
                            <MenuItem icon={<FiUser />}>
                                <NavLink to="/profile" className="nav-text">
                                    Compte
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>
                                <NavLink to="/login" className="nav-text" onClick={() => {
                                    setUser(null);
                                    setArray([]);
                                }}>
                                    Déconnexion
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;