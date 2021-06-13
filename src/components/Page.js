import React, { useState } from 'react';
import StyleOverlay from "./aesthetics/StyleOverlay";
import BackgroundShapes from "./aesthetics/BackgroundShapes";
import Navbar from "./navbar/Navbar";

import UserData from "../userFiles/UserData";

function getFirstTab(page) {
    let pageTabs = Object.keys(UserData.pageData[page].tabs);

    return pageTabs[0];
}

function Page() {
    document.title = UserData.title;

    let pageTitles = Object.keys(UserData.pageData);

    const [currentPage, setCurrentPage] = useState(pageTitles[0])
    const [currentTab, setCurrentTab] = useState(getFirstTab(currentPage));

    function updateCurrentPage(newPage) {
        setCurrentPage(newPage);
        setCurrentTab(getFirstTab(newPage));
    }

    function updateCurrentTab(newTab) {
        setCurrentTab(newTab);
    }

    return (
        <div>
            <BackgroundShapes />

            <Navbar userData={UserData}
                    currentPage={currentPage}
                    updateCurrentPage={updateCurrentPage}/>

            <StyleOverlay />
        </div>
    );
}

export default Page;
