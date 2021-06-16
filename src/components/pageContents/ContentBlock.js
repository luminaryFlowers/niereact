import React from 'react';

import '../../css/page-contents-blocks.css';

function ContentBlock(props) {


    return (
        <React.Fragment>
            {props.text}
        </React.Fragment>
    );
}

export default ContentBlock;