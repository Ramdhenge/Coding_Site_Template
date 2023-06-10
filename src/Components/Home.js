import { NavLink } from 'react-router-dom';
import img from '../Img/HomeImg.png'
import Footer from "../Components/Footer";

const Home = () => {

    const text = "Develop Websites"
    return (
        <>
            <div className="body">

                <div className="main-body">
                    <div className="right">
                        <div className="heading-text">
                            <h1>Code With Us to <span>{text}</span> using React Js</h1>
                            <p>Coding like poetry should be short and concise.</p>
                          <NavLink to={'./Services'}><button className='btn'>Learn more</button></NavLink>
                        </div>
                    </div>
                    <div className="right">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
                <Footer />
        </>
    )
}

export default Home