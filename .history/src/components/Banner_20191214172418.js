

exports default () => {
    return <Row className="banner mb-5">
        <StyleRoot id="banner-portrait-container">
        <img alt="Portrait" src={Portrait} style={styles.slideInLeft} /> 
        </StyleRoot>
        <div id="banner-text" className="my-auto-lg">
        <div>
            <StyleRoot>
            <h1 style={styles.slideInDown}>Vincent Kelleher</h1>
            </StyleRoot>
            <StyleRoot>
            <h2 style={styles.slideInUp}>Leader Technique Fullstack</h2>
            </StyleRoot>
        </div>
        </div>
    </Row>;
}