import '../../css/page-contents.css';

function ThirdsBlock(props) {
    let hasShadow = () => props.shadow ? " content-block-shadow" : "";

    return (
        <div className="thirds-block">
            <div className="thirds-block-content">
                <div className={"content-block" + hasShadow()}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ThirdsBlock;