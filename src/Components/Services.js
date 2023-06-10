import APIdata from './APIdata'
import Card from './Card'
import Footer from './Footer'

const Services = () => {
    return (
        <>
            <div className="body-service">
                <div className="head">
                    <h1>Our Services</h1>
                </div>
                <div className="card-box">
                <div className="provide-text">Here what we provide</div>
                    <div className="cards-container">
                        {APIdata.map((value, index)=>{
                            return <Card imgsrc = {value.imgsrc} title = {value.title} desc = {value.desc} />
                        })}
                    </div>
                </div>
            <Footer/>
            </div>
        </>
    )
}

export default Services