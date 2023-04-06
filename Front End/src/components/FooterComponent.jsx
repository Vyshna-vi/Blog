import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function FooterComponent() {
    return (
        <div className='footer' id='footer'>
            <div className='about'>
                <h1 className='ahead'>About</h1>
                <p className='namea'>Vyshnavi Santhosh</p>
                <p className='emaila'>vyshnaviponnuzz0001@gmail.com</p>
                <p className='con'>9656220367</p>
                <div className='instaicons'>
                    <InstagramIcon className='instaicon1'/>
                    <TwitterIcon className='instaicon1'/>
                    <FacebookIcon className='instaicon1'/>
                </div>
            </div>
            <div className='contact'>
                <h1 className='chead'>Contact Us</h1>
                <input type="text" placeholder='Email' className='inptemail' />
                <input type="text" placeholder='Message' className='inptqus' />
                <button class="footerbtn">SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default FooterComponent