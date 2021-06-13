import React from 'react';

import '../css/background-circles.css';
import '../css/background-lines.css';

function BackgroundShapes() {
    return (
        <div id="background-shapes">
            <div className="bottom-right-circle" id="circle1" />
            <div className="bottom-right-circle" id="circle2" />

            <div className="top-left-circle" id="circle3" />
            <div className="top-left-circle" id="circle4" />

            <div id="line1" />
            <div id="line2" />
            <div id="line3" />

            <div id="line4" />
            <div id="line5" />
            <div id="line6" />
        </div>
    );
}

export default BackgroundShapes;