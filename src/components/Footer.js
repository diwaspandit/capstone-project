
import React from 'react';
import logo from '../images/Logo.svg';

const Footer=()=>{
    return(
        <footer>
            <section>
                <div>
                    <div className='company-info'>
                        <img src={logo} alt=""/>
                        <p>We are a family owned Nepali restraurant, focused on traditional recipes servved with a modern twist.</p>
                    </div>
                </div>
                <div>
                    <h3>Important Link</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact </h3>
                    <ul>
                        <li>Address: <br/> NewRoad, Kathmandu, Nepal</li>
                        <li>Phone: <br/> 9808913969</li>
                        <li>Email: <br/> hello@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Whatsapp</a></li>
                        <li><a href="/">Linkedin</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;