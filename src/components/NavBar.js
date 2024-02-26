  import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/cities" activeStyle>
                        Explore cities
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
}

export default Navbar;