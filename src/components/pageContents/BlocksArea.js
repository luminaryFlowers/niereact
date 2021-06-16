import '../../css/page-contents.css';

function BlocksArea(props) {
    return (
        <div>
            <div id="content-flourish-area">
                <div id="content-side-flourish1" />
                <div id="content-side-flourish2" />
            </div>

            <div id="blocks-area">
                {props.children}
            </div>
        </div>
    );
}

export default BlocksArea;