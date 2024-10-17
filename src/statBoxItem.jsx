export default function StatBoxItem({item, i}) {
    return (
        <li className={`stat-box-item stat-box-item-${i} flex-item`}>
            <div
                className={`stat-box-title stat-box-title-${i} fw-500`}
                style={{'--icon-url':`url(${item.icon})`}} 
                >{item.category}
                
            </div>
            <div className="stat-box-perc"><span className="fw-700">{item.score}</span> / 100</div>
        </li>
    )
}