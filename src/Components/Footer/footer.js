import './footer.scss'
import {AiFillFacebook, AiFillYoutube, AiFillInstagram} from'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
return (
    <section className='footer'>
        <div className='contact-div'>
            <div className='footer-links grid'>
                {/* Group one*/}
                <div className='link-group'>
                    <span className='groupTitle'>Navigation</span>
                    <li className='footerList flex'>
                        <span className='list'>Browse Popular</span>
                    </li>

                    <li className='footerList flex'>
                        <span className='list'>Browse Simulcasts</span>
                    </li>

                    <li className='footerList flex'>
                        <span className='list'>Browse Manga</span>
                    </li>

                    <li className='footerList flex'>
                        <span className='list'>Release Calendar</span>
                    </li>

                    <li className='footerList flex'>
                        <span className='list'>News</span>
                    </li>
                    
                    <li className='footerList flex'>
                        <span className='list'>Store</span>
                    </li>

                    <li className='footerList flex'>
                        <span className='list'>Games</span>
                    </li>
                </div>

                    {/*Group 2 */}
                <div className='link-group'>
                    <span className='groupTitle'>Connect With Us</span>

                    <li className='footerList flex'> <span className='list'><AiFillYoutube className='icon'/>Youtube</span></li>
                    <li className='footerList flex'> <span className='list'><AiFillFacebook className='icon'/>Facebook</span></li>
                    <li className='footerList flex'> <span className='list'><BsTwitter className='icon'/>Twitter</span></li>
                    <li className='footerList flex'> <span className='list'><AiFillInstagram className='icon'/>Instagram</span></li>
                    <li className='footerList flex'> <span className='list'><FaTiktok className='icon'/>Tiktok</span></li>
                </div>


                {/*Group 3 */}
                <div className='link-group'>
                    <span className='groupTitle'>Crunchyroll</span>
                        <li className='footerList flex'> <span className='list'>About</span> </li>
                        <li className='footerList flex'> <span className='list'>Help/FAQ</span></li>
                        <li className='footerList flex'> <span className='list'>Terms of Use</span></li>
                        <li className='footerList flex'> <span className='list'>Privacy Policy</span></li>
                        <li className='footerList flex'> <span className='list'>Get the Apps</span></li>
                        <li className='footerList flex'> <span className='list'>Redeem Gift Cards</span></li>
                        <li className='footerList flex'> <span className='list'>Jobs</span></li>
                </div>

                {/*Group 4 */}
                <div className='link-group'>
                    <span className='groupTitle'>Account</span>
                        <li className='footerList flex'> <span className='list'>Watchlist</span></li>
                        <li className='footerList flex'> <span className='list'>Crunchylists</span></li>
                        <li className='footerList flex'> <span className='list'>History</span></li>
                        <li className='footerList flex'> <span className='list'>My Account</span></li>
                        <li className='footerList flex'> <span className='list'>Log Out</span></li>
                        
                </div>

            </div>
            
           
        </div>
    </section>
)


}









export default Footer;