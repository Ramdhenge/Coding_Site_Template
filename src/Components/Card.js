const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="header">
                    <div className="img">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div className="card-title">
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="card-text">
                    <p>{props.desc}</p>
                </div>
                <button className='btn'>Learn more</button>
            </div>
        </>
    )
}

export default Card