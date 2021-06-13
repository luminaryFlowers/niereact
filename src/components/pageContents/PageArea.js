import React from 'react';
import ThirdsBlock from "./ThirdsBlock";
import BlocksArea from "./BlocksArea";

import '../../css/page-contents.css';

function PageArea(props) {
    return (
        <React.Fragment>
            <div id="page-area">
                <h1 id="page-header">PAGE</h1>

                <BlocksArea>
                    <ThirdsBlock>hello</ThirdsBlock>
                    <ThirdsBlock>hello</ThirdsBlock>
                    <ThirdsBlock>hello</ThirdsBlock>
                </BlocksArea>

                <div className="clearfix"/>
            </div>
        </React.Fragment>
    );
}

export default PageArea;