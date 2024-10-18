import StatBoxItem from './statBoxItem';
import data from '../data.json'


export default function Info() {
    return (
        <section className='info-container grid-item'>
            <h2 className="info fw-500">Summary</h2>
            <ul className="stats-box-items grid-item">
                {data.map((item, i) => {
                    return (<StatBoxItem item={item} i={i} key={i}/>) 
                })}
            </ul>
            <button className="btn continue-btn txt-white">Continue</button>
        </section>
    )
}


