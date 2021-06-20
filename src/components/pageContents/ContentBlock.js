import React from 'react';

import '../../css/page-contents-blocks.css';

function ContentBlock(props) {
    function getOpacity() {
        return {opacity: props.contentOpacity};
    }

    function getImage() {
        if(props.data.image) {
            let image = require(`../../userFiles/images/${props.data.image}`);

            return (
                <div className="content-block-image-block" style={getOpacity()}>
                    <img className="content-block-image"
                         src={image.default}
                         alt="Pic from user data" />
                    <hr className="content-block-image-divider" />
                </div>
            );
        }

        return null;
    }

    return (
        <React.Fragment>
            <div className="content-block-header">
                <p className="content-block-text" style={getOpacity()}>
                    {props.data.header}
                </p>
            </div>
            {getImage()}
            <p className="content-block-text" style={getOpacity()}>
                {props.data.text}
            </p>
        </React.Fragment>
    );
}

export default ContentBlock;