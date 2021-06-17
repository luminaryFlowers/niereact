import '../../css/page-contents.css';
import Clearfix from "../Clearfix";

function BlocksArea(props) {
    return (
        <div id="flourish-and-blocks-area">
            <div id="content-flourish-area">
                <div id="content-side-flourish1" />
                <div id="content-side-flourish2" />
            </div>

            <div id="blocks-area">
                {props.children}
            </div>

            <Clearfix />
        </div>
    );
}

export default BlocksArea;