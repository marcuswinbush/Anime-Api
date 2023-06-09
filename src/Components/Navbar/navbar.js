import React from "react"
import './navbar.scss'
import { useState } from "react"
import {AiFillCaretDown, AiOutlineUnorderedList, AiOutlineHistory} from 'react-icons/ai'
import {BiSearchAlt, BiBookmarks} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLogout} from 'react-icons/md'
import {GiLaurelCrown} from 'react-icons/gi'
import {GoThreeBars} from 'react-icons/go'
import {RxCaretDown} from 'react-icons/rx'
import img from '../../Assets/spy-family.png'
import img2 from '../../Assets/logo.png'

const Navbar = () => {

        {/*Creates a dropdown from avatar button, false indicates that the dropdown menu will be hidden*/}
    const [navbarisOpen, setNavbarIsOpen] = useState(false);
    const [dropdownisOpen, setDropdownIsOpen] = useState(false);
    
    const toggleNavbar = () => {
        setNavbarIsOpen(!navbarisOpen);
    }

    
    const toggleDropdown = () => {
        setDropdownIsOpen(!dropdownisOpen);
    };

    



    
    return (
     
        <section className="navbar">
            <header className="header flex">
                <div className="header-logo">
                   <a className='header-icon' href="/"> <img src={img2} alt="logo"/> Crunchyroll </a>
                </div>

                
                
                <div className={`nav-link ${navbarisOpen ? 'open' : ''}`}>
                <div className="toggle-navbar" onClick={toggleNavbar}>
                    <GoThreeBars className='nav-icon'/>
                </div>  
                {navbarisOpen && (
                    <div className="dropdown">
                    <nav>
                    <div className="menu-section">
                        <small className="menu-text">Browse</small>
                    <ul className="nav-menu">
                        <li className="nav-menu-item"><a> Popular</a></li>
                        <li className="nav-menu-item">New</li>
                        <li className="nav-menu-item">Release Calendar</li>
                        <li className="nav-menu-item">Alphabetical</li>
                        <li className="nav-menu-item">Genres <RxCaretDown className='icon'/></li>
                    </ul>

                    <ul>
                        <li className="nav-menu-item">Manga</li>
                        <li className="nav-menu-item">Store</li>
                        <li className="nav-menu-item">Games</li>
                        <li className="nav-menu-item">News <RxCaretDown className='icon'/></li>

                    </ul>
                    </div>
                    
                    </nav>
                </div>
                )
                }
                    

                
                </div>
                
                      
                    <div className="header-containers">
                   
                   <div className="header-item">
                           <button type='button' className="dropdown-header" 
                           data-toggle='dropdown'><span>Browse <AiFillCaretDown className='icon'/></span></button>
                           
                       </div>
   
                       <div className="header-left">
                       <div className="header-item">
                          <a tabIndex="0" className="header-link" href="https://www.crunchyroll.com/comics/manga">
                           <span className="text">Manga</span></a>
                       </div>
   
                       <div className="header-item">
                           <a tabIndex="0" className="header-link" href="https://www.crunchyroll.com/comics/manga">
                               <span className="text">Games</span>
                           </a>
                               
                       </div>
                       
                       <div className="header-item">
                       <a tabIndex="0" className="header-link" href="https://www.crunchyroll.com/comics/manga">
                           <span className="header-link">Store</span>
                       </a>
                       </div>
   
   
                       <div className="header-item">
                           <button type='button' className="dropdown-header" 
                           data-toggle='dropdown'><span>News <AiFillCaretDown className='icon'/></span></button>
                           
                       </div>
                    
   
                   </div>
                       
                      
                   </div>                
                
                

                <div className="header-right-items flex">
                    <ul className="header-icons">
                        
                        <li className="header-options">
                         <BiSearchAlt className="icon" />
                        </li>
                        
                        <li className="header-options">
                        <BiBookmarks className='icon'/>
                        </li>
                       
                        <li className="header-options">
                           
                            <button onClick={toggleDropdown} type='button' className="avatar-wrap">
                            <img src={img} className="login-image" alt="login"/>
                             <AiFillCaretDown className='icon'/>
                            </button>
                            {dropdownisOpen && (
                                <div className="avatar-dropdown">
                                <div className="dropdown-scroll">
                                    <div className="dropdown-menu">
                                        <div className="user-menu">
                                            <div className="user-menu-account">
                                            <div className="user-avatar">
                                                    <div className="image-div">
                                                    <img src={img} className="user-avatar-image" alt="login"/>
                                                    </div>
                                                </div>
                                                <div className="user-item">
                                                    <h4>MarcusWin</h4>
                                                    <h2><GiLaurelCrown className='icon'/>Premium Member</h2>
                                                </div>
                                            
                                            </div>
                                               
                                        </div>
                                       
                                        <div className="user-menu-section">
                                            <a className="user-nav-item" href='/watchlist'> <BiBookmarks className='icon'/> Watchlist</a>
                                            <a className="user-nav-item" href="/mylist"><AiOutlineUnorderedList className='icon'/> My List</a>
                                            <a className="user-nav-item" href="/history"><AiOutlineHistory className='icon'/>History</a>
                                        </div>

                                        <div className="user-menu-section">
                                            <a className="user-nav-item"> <CgProfile className='icon'/>My Account</a>
                                        </div>

                                        <div className="user-menu-section">
                                            <a className="user-nav-item"> <MdOutlineLogout className='icon'/> Log Out</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            )}
                            
                        </li>
                        

                    </ul>  
                </div>

                
            </header>
        </section>

    )
}






export default Navbar;