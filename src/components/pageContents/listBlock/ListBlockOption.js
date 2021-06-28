function ListBlockOption(props) {
    return (
        <div className={"list-block-option" + props.selected}
             onClick={props.updateCurrentTab}>
            <hr className="list-selection-top"/>
            <p className="list-block-text">
                <i className={"bi-" + props.icon + " list-block-option-icon"} />
                {props.tab}
            </p>
            <hr className="list-selection-bottom"/>
        </div>
    );
}

export default ListBlockOption;