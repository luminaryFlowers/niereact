import React from 'react';
import '../../../css/page-contents-list-block.css';
import ListFlourish from "./ListFlourish";
import ListBlockOption from "./ListBlockOption";

function ListBlock() {
    return (
        <React.Fragment>
            <ListFlourish />

            <div id="content-block-list-contents">
                <ListBlockOption />
            </div>

            <ListFlourish />
        </React.Fragment>
    );
}

export default ListBlock;