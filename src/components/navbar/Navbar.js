import React from 'react';

import '../../css/navbar.css';
import ButtonCursor from '../../images/button-cursor.png';

function Navbar(props) {
    return (
        <React.Fragment>
            <div id="navbar">
                <div id="navbar-side-flourish1"/>
                <div id="navbar-side-flourish2"/>

                <span className="navbar-option-extension">
                    <button className="navbar-option active-button">
                        <img className="button-cursor" src={ButtonCursor} alt="Cursor" />
                        <button className="navbar-button">
                            <i className="bi-house-fill button-icon" />
                            <span className="button-text">HOME</span>
                        </button>
                    </button>
                </span>

                <span className="navbar-option-extension">
                    <button className="navbar-option">
                        <img className="button-cursor" src={ButtonCursor} alt="Cursor" />
                        <button className="navbar-button">
                            <i className="bi-house-fill button-icon" />
                            <span className="button-text">INTERESTS</span>
                        </button>
                    </button>
                </span>
            </div>

            <div className="navbar-below-line"/>
            <div className="navbar-below-line-decoration"/>
        </React.Fragment>
    );
}

export default Navbar;