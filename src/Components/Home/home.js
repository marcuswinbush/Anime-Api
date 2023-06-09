import React from 'react'
import { useState, useEffect } from 'react'
import './home.scss'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import { slides, backgrounds } from '../../Carousel/CarouselData.js'



const Home = () => {

    const [currImg, setcurrImg] = useState(0);
    const [currBackground, setcurrBackground] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setcurrImg((currImg + 1) % slides.length);
            setcurrBackground((currBackground + 1) % backgrounds.length)
        }, 6000);
        
        return () => clearTimeout(timer);
    }, [currImg, slides.length], [currBackground, backgrounds.length]);
    







    return (
    
        <section className='home-container'>
            <div className='anime-carousel-wrapper'>
            <div className='hero-wrapper'> 
            <div className='hero-carousel-box'>
            <div className='hero-image-card'>  
                    <img className="hero-carousel-image" src={slides[currImg].img}/>
                    <div className='carousel-button-right'>
                <button className='carousel-right' onClick={() => {
                    currImg < slides.length - 1 && setcurrImg(currImg + 1)
                     currBackground < backgrounds.length -1 && setcurrBackground(currBackground + 1)
                }}>
                    <AiFillCaretRight className='icon'/> 
                 </button>
                </div>

                <div className='carousel-button-left'> 
                <button className='carousel-left' onClick={() => {
                    currImg > 0 && setcurrImg(currImg - 1)
                    currBackground > 0 && setcurrBackground(currBackground - 1)
                }}>
                    <AiFillCaretLeft className='icon'/> </button>
                </div> 

               
            </div>
            
            <div className='hero-wrapper-background' style=
                {{backgroundImage: `url(${backgrounds[currBackground].img})`,
                
                }}>
                  
                </div>


            </div>

           
                
        </div>
            
            
        <div className='content-wrapper-carousel'>
                <div className='card-div'>
                    <button className="card-div-tab" href = '/suzume'>
                        <span>Suzume now 
                            in theaters</span>
                    </button>
                    
                    <button className="card-div-tab">
                        <span>
                            Watch Spy Family
                             Episodes!
                        </span> 
                        </button>
                   
                    <button className="card-div-tab">
                        <span>
                            New Dr. Stone Episodes!
                        </span>
                    </button>
                    
                    <button className="card-div-tab">
                        <span>
                           Final Episodes of Attack on Titan
                        </span>
                    </button>

                    <button className="card-div-tab">
                        <span>
                            Naruto 20th Anniversary!
                        </span>
                    </button>

                </div>
            </div>
            
            
        </div>
           
            
            


            

        </section>

    
    )


}













export default Home;