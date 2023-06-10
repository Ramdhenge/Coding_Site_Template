import Footer from './Footer'
import cntimg from '../Img/contact.png'

const Contact = () => {
    return (
        <>
            <div className="cnt-container">
                <div className="cnt-left">
                    <img src={cntimg} alt="" />
                </div>
                <div className="cnt-right">
                    <h2>Contact Us</h2>
                    <form action="" className='form'>
                        <input type="text" className='fname' placeholder='First Name' />
                        <input type="text" className='lname' placeholder='Last Name' /><br />
                        <input type="email" className='email' placeholder='Email' /><br />
                        <textarea className='comment' placeholder='Comment' /><br />
                        <input type="submit" className='btn' value='Submit' />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact