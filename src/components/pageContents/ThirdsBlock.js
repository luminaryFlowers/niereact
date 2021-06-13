import '../../css/page-contents.css';

function ThirdsBlock(props) {
    return (
        <div className="thirds-block">
            {props.children}
        </div>
    );
}

export default ThirdsBlock;