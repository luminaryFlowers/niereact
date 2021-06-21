import React, { useState } from 'react';
import ThirdsBlock from "./ThirdsBlock";
import BlocksArea from "./BlocksArea";

import '../../css/page-contents.css';
import ContentBlock from "./ContentBlock";
import Clearfix from "../Clearfix";
import MobileBlockDivider from "./MobileBlockDivider";
import ListBlock from "./listBlock/ListBlock";

function PageArea(props) {
    const [contentOpacity, setContentOpacity] = useState(1);

    function updateCurrentTab(tab) {
        setContentOpacity(0);
        props.updateOffsetTab(tab);

        let setNewTab = () => {
            props.updateCurrentTab(tab);
            setContentOpacity(1);
        }

        setTimeout(setNewTab, 150);
    }

    function getLeftBlock() {
        if(props.pageContent[props.currentTab]) {
            return <ContentBlock data={props.pageContent[props.currentTab].left}
                                 contentOpacity={contentOpacity}/>;
        }
        return null;
    }

    function getRightBlock() {
        if(props.pageContent[props.currentTab]) {
            return <ContentBlock data={props.pageContent[props.currentTab].right}
                                 contentOpacity={contentOpacity} />;
        }
        return null;
    }

    return (
        <React.Fragment>
            <div id="page-area" style={{opacity: props.pageOpacity}}>
                <h1 id="page-header">{props.currentPage.toUpperCase()}</h1>

                <BlocksArea>
                    <ThirdsBlock shadow={true}>
                        <ListBlock pageContent={props.pageContent}
                                   currentTab={props.offsetTab}
                                   updateCurrentTab={updateCurrentTab}/>
                    </ThirdsBlock>

                    <MobileBlockDivider />

                    <ThirdsBlock>
                        {getLeftBlock()}
                    </ThirdsBlock>

                    <MobileBlockDivider />

                    <ThirdsBlock>
                        {getRightBlock()}
                    </ThirdsBlock>
                </BlocksArea>

                <Clearfix />

                <hr style={{height: 40, visibility: "hidden"}} />
            </div>
        </React.Fragment>
    );
}

export default PageArea;