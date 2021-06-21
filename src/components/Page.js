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

    const [currentPage, setCurrentPage] = useState(pageTitles[0]);
    const [offsetPage, setOffsetPage] = useState(pageTitles[0]);
    const [pageTimeoutID, setPageTimeoutID] = useState(null);

    const [currentTab, setCurrentTab] = useState(getFirstTab(currentPage));
    const [offsetTab, setOffsetTab] = useState(getFirstTab(currentPage));

    const [pageOpacity, setPageOpacity] = useState(1);

    function updateCurrentPage(page) {
        if(pageTimeoutID) {
            clearTimeout(pageTimeoutID);
        }

        setPageOpacity(0);
        setOffsetPage(page);

        let setNewPage = () => {
            setCurrentPage(page);
            setCurrentTab(getFirstTab(page));
            setOffsetTab(getFirstTab(page));
            setPageOpacity(1);

            setPageTimeoutID(null);
        }

        setPageTimeoutID(setTimeout(setNewPage, 230));
    }

    return (
        <div>
            <BackgroundShapes />

            <Navbar userData={UserData}
                    currentPage={offsetPage}
                    updateCurrentPage={updateCurrentPage}/>

            <PageArea currentPage={currentPage}
                      currentTab={currentTab}
                      updateCurrentTab={setCurrentTab}
                      offsetTab={offsetTab}
                      updateOffsetTab={setOffsetTab}
                      pageOpacity={pageOpacity}
                      pageContent={UserData.pageData[currentPage].tabs} />

            <NavbarBelowLine />

            <StyleOverlay />
        </div>
    );
}

export default Page;
