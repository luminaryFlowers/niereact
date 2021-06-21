import ButtonCursor from "../../images/button-cursor.png";
import React from "react";

function NavbarOption(props) {
    return (
        <span className="navbar-option-extension" onClick={() => props.updateCurrentPage(props.page)}>
            <div className={"navbar-option " + props.active}>
                <img className="button-cursor" src={ButtonCursor} alt="Cursor" />
                <button className="navbar-button">
                    <i className={"bi-" + props.icon + " button-icon"} />
                    <span className="button-text">{props.page.toUpperCase()}</span>
                </button>
            </div>
        </span>
    );
}

export default NavbarOption;