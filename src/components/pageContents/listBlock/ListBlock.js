import React from 'react';
import '../../../css/page-contents-list-block.css';
import ListFlourish from "./ListFlourish";
import ListBlockOption from "./ListBlockOption";

function ListBlock(props) {
    function isSelected(tab) {
        return tab === props.currentTab ? " list-block-option-selected" : "";
    }

    return (
        <React.Fragment>
            <ListFlourish />

            <div id="content-block-list-contents">
                {Object.keys(props.pageContent).map(tab =>
                    <ListBlockOption key={tab}
                                     tab={tab}
                                     icon={props.pageContent[tab].icon}
                                     updateCurrentTab={() => props.updateCurrentTab(tab)}
                                     selected={isSelected(tab)} />
                )}
            </div>

            <ListFlourish />
        </React.Fragment>
    );
}

export default ListBlock;