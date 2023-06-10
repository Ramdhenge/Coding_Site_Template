import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import aboutimg from '../Img/about.png'

const About = () => {
    return (
        <>
            <div className="abt-container">
                <div className="abt-left">
                    <div className="abt-card">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cupiditate repellat ratione autem aspernatur quasi explicabo exercitationem, accusamus, animi sit sunt voluptates fugiat placeat facilis illum ut fugit optio. Quas praesentium officiis necessitatibus voluptatum eum culpa nihil aut, nobis adipisci accusantium alias saepe deserunt minima harum et fugiat ad repudiandae dolorum neque quidem facilis. Quaerat ullam numquam necessitatibus cum, rem voluptas reiciendis porro modi ut ipsum saepe, sit delectus nihil, repellendus doloribus accusantium est nesciunt quae. Non dolores accusantium ipsam?</p>
                       <NavLink to={'/Contact'}><button className='btn'>Contact Us</button></NavLink> 
                    </div>
                </div>
                <div className="abt-right">
                    <img src={aboutimg} alt="" />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About