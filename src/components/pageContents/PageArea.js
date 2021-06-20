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

    return (
        <React.Fragment>
            <div id="page-area" style={{opacity: props.pageOpacity}}>
                <h1 id="page-header">{props.currentPage.toUpperCase()}</h1>

                <BlocksArea>
                    <ThirdsBlock shadow={true}>
                        <ListBlock pageContent={props.pageContent}
                                   currentTab={props.currentTab}
                                   updateCurrentTab={props.updateCurrentTab}/>
                    </ThirdsBlock>

                    <MobileBlockDivider />

                    <ThirdsBlock>
                        <ContentBlock data={props.pageContent[props.currentTab].left} />
                    </ThirdsBlock>

                    <MobileBlockDivider />

                    <ThirdsBlock>
                        <ContentBlock data={props.pageContent[props.currentTab].right} />
                    </ThirdsBlock>
                </BlocksArea>

                <Clearfix />

                <hr style={{height: 40, visibility: "hidden"}} />
            </div>
        </React.Fragment>
    );
}

export default PageArea;