import React from 'react';
import ThirdsBlock from "./ThirdsBlock";
import BlocksArea from "./BlocksArea";

import '../../css/page-contents.css';
import ContentBlock from "./ContentBlock";

function PageArea(props) {
    return (
        <React.Fragment>
            <div id="page-area" style={{opacity: props.pageOpacity}}>
                <h1 id="page-header">{props.currentPage.toUpperCase()}</h1>

                <BlocksArea>
                    <ThirdsBlock shadow={true}>
                        hello
                    </ThirdsBlock>

                    <ThirdsBlock>
                        <ContentBlock data={props.pageContent.left} />
                    </ThirdsBlock>

                    <ThirdsBlock>
                        <ContentBlock data={props.pageContent.right} />
                    </ThirdsBlock>
                </BlocksArea>

                <div className="clearfix"/>

                <hr style={{height: 40, visibility: "hidden"}} />
            </div>
        </React.Fragment>
    );
}

export default PageArea;