import React, { useState } from 'react';
import StyleOverlay from "./aesthetics/StyleOverlay";
import BackgroundShapes from "./aesthetics/BackgroundShapes";
import Navbar from "./navbar/Navbar";

import UserData from "../userFiles/UserData";
import NavbarBelowLine from "./navbar/NavbarBelowLine";
import PageArea from "./pageContents/PageArea";

function getFirstTab(page) {
    let pageTabs = Object.keys(UserData.pageData[page].tabs);

    return pageTabs[0];
}

function Page() {
    document.title = UserData.title;

    let pageTitles = Object.keys(UserData.pageData);

    const [currentPage, setCurrentPage] = useState(pageTitles[0])
    const [currentTab, setCurrentTab] = useState(getFirstTab(currentPage));
    const [pageOpacity, setPageOpacity] = useState(1);

    function updateCurrentPage(newPage) {
        setPageOpacity(0);

        let setNewPage = () => {
            setCurrentPage(newPage);
            setCurrentTab(getFirstTab(newPage));
            setPageOpacity(1);
        }

        setTimeout(setNewPage, 150);
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

            <PageArea currentPage={currentPage}
                      currentTab={currentTab}
                      updateCurrentTab={updateCurrentTab}
                      pageOpacity={pageOpacity} />

            <NavbarBelowLine />

            <StyleOverlay />
        </div>
    );
}

export default Page;
