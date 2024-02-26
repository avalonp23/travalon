import {NavLink as Link} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #3D5F74;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    border-bottom: 3px solid;
`;
    
export const NavLink = styled(Link)`
    color: #BACCD7;
    font-size: 20px;
    font-family: Gill Sans, sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #FFFFF;
        fomt-weight: bold;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: -300px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;