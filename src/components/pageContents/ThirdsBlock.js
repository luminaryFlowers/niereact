import '../../css/page-contents.css';

function ThirdsBlock(props) {
    return (
        <div className="thirds-block">
            <div className="thirds-block-content">
                {props.children}
            </div>
        </div>
    );
}

export default ThirdsBlock;