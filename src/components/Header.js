import React from 'react';
import {Link} from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header=()=>{
    return(
        <>
        <header className='header'>
            <section>
                {/*banner texts*/}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Kathmandu</h3>
                    <p>We are a family owned Nepali restraurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button aria-label='onClick'>Reserve Table</button></Link>
                </div>
                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='bannerImage'/>
                </div>
            </section>
        </header>
        </>
    );
}

export default Header;