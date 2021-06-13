import React from 'react';

import '../../css/navbar.css';
import NavbarOption from "./NavbarOption";

function Navbar(props) {
    function isSelected(title) {
        return title === props.currentPage ? "active-button" : "";
    }

    let pageTitles = Object.keys(props.userData.pageData);

    return (
        <React.Fragment>
            <div id="navbar">
                <div id="navbar-side-flourish1"/>
                <div id="navbar-side-flourish2"/>

                {pageTitles.map(title => (
                    <NavbarOption icon={props.userData.pageData[title].icon}
                                  page={title}
                                  active={isSelected(title)}
                                  updateCurrentPage={props.updateCurrentPage}/>
                ))}
            </div>

            <div className="navbar-below-line"/>
            <div className="navbar-below-line-decoration"/>
        </React.Fragment>
    );
}

export default Navbar;