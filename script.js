
let App = () => {
    let header = {
        margin : "0 0 2rem"
    }

    let h1 = {
        fontSize : "4rem",
        marginBottom : "1rem"
    }

    let p = {
        fontSize : "2rem"
    }

    let common = {
        marginBottom : "2rem"
    }

    let dt = {
        fontSize : "1.8rem",
        marginBottom : "1rem"
    }

    let dd = {
        fontSize : "1.8rem"
    }
    return (
        <>
            <header >
                <h1 style = {h1}>Topics covered</h1>
                <p style = {p}>The following is a list of all the topics we cover in the MDN learning area.</p>
            </header>

            <main>
                <section className="getting-Started" style = {common}>
                    <dl>
                        <dt style = {dt}><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">Getting started with the web</a></dt>
                        <dd style = {dd}>Provides a practical introduction to web development for complete beginners.</dd>
                    </dl>
                </section>
                    
                <section className="HTML — Structuring" style ={common}>
                    <dl>
                        <dt style = {dt}><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML — Structuring the web</a></dt>
                        <dd style = {dd}>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</dd>
                    </dl>
                </section>

                <section className="CSS — Styling" style ={common}>
                    <dl>
                        <dt style = {dt}><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS — Styling the web</a></dt>
                        <dd style = {dd}>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</dd>
                    </dl>
                </section>
            </main>
        </>
    )
}

ReactDOM.render(<App /> , document.querySelector("#root"))