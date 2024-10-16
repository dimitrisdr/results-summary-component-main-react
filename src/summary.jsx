export default function Summary () {
    return (
        <section className="summary-container grid-item" >
            <h2 className="title summary-title txt-light-lavender">Your Result</h2> 
            <div className="stats-container grid-item">
                <span className="main-perc fw-700 txt-white">76</span>
                <span className="secondary-perc txt-light-lavender">of 100</span>
            </div>
            <div className="summary__info-container grid-item">
                <h2 className="title secondary-title fw-500 txt-white">Great</h2>
                <p className="info-text txt-light-lavender">
                    You scored higher than 65% of the people who
                    have taken these tests
                </p>
            </div>  
        </section>
    )
}