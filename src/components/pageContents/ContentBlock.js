import React from 'react';

import '../../css/page-contents-blocks.css';

function ContentBlock(props) {
    let getImage = () => {
        if(props.data.image) {
            let image = require(`../../userFiles/images/${props.data.image}`);
            {console.log(props.data)}

            return (
                <div className="content-block-image-block">
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
                <p className="content-block-text">{props.data.header}</p>
            </div>
            {getImage()}
            <p className="content-block-text">
                {props.data.text}
            </p>
        </React.Fragment>
    );
}

export default ContentBlock;