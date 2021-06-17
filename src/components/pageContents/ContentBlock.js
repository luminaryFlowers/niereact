import React from 'react';

import '../../css/page-contents-blocks.css';

function ContentBlock(props) {
    let getImage = () => {
        if(props.data.image) {
            let image = require(`../../userFiles/images/${props.data.image}`);

            return (
                <React.Fragment>
                    <img className="content-block-image"
                         src={image.default}
                         alt="Pic from user data" />
                    <hr className="content-block-image-divider" />
                </React.Fragment>
            );
        }

        return null;
    }

    return (
        <React.Fragment>
            <div className="content-block-header">
                <p className="content-block-text">{props.data.header}</p>
            </div>
            <p className="content-block-text">
                {getImage()}
                {props.data.text}
            </p>
        </React.Fragment>
    );
}

export default ContentBlock;