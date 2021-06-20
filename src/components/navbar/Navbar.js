import React, { useState } from 'react';

import '../../css/navbar.css';
import NavbarOption from "./NavbarOption";
import NavbarBelowLine from "./NavbarBelowLine";

function Navbar(props) {
    const [visibility, setVisibility] = useState(false);

    function mobileVisibility() {
        return visibility ? "navbar" : "mobile-hidden-navbar";
    }

    function isSelected(title) {
        return title === props.currentPage ? "active-button" : "";
    }

    let pageTitles = Object.keys(props.userData.pageData);

    return (
        <React.Fragment>
            <div id="mobile-navbar-button">
                <i className="bi-chevron-expand"
                   onClick={() => { setVisibility(!visibility); }}/>
            </div>


            <div id={mobileVisibility()}>
                <div id="navbar-side-flourish1"/>
                <div id="navbar-side-flourish2"/>

                {pageTitles.map(title => (
                    <NavbarOption icon={props.userData.pageData[title].icon}
                                  key={title}
                                  page={title}
                                  active={isSelected(title)}
                                  updateCurrentPage={props.updateCurrentPage}/>
                ))}
            </div>

            <NavbarBelowLine />
        </React.Fragment>
    );
}

export default Navbar;