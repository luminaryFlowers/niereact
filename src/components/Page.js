import StyleOverlay from "./aesthetics/StyleOverlay";
import BackgroundShapes from "./aesthetics/BackgroundShapes";
import Navbar from "./navbar/Navbar";

import UserData from "../userFiles/UserData";

function initializeState(pageTitles) {
    let currentPage = pageTitles[0];

    let currentPageTabs = Object.keys(UserData.pageData[currentPage].tabs);
    let currentTab = currentPageTabs[0];

    return {
        currentPage: currentPage,
        currentTab: currentTab
    };
}

function Page() {
    document.title = UserData.title;

    let pageTitles = Object.keys(UserData.pageData);

    let state = initializeState(pageTitles);

    return (
        <div>
            <BackgroundShapes />

            <Navbar />

            <StyleOverlay />
        </div>
    );
}

export default Page;
