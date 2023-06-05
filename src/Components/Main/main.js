import './main.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';



const Main = () => {

    const [data, setData] = useState([]);
    const [animeData, setAnimeData] = useState([]);
    
  
/*{Originally, axios.get could call the Api. 
But while maintaining multiple API endpoints, 
it's best to utilize async function }*/
    

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataResponse = await axios.get(`https://kitsu.io/api/edge/trending/anime`);
                setData(dataResponse.data.data);

                const animeResponse = await axios.get(`https://kitsu.io/api/edge/anime`);
                setAnimeData(animeResponse.data.data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    
    /*{ {
        axios.get(`https://kitsu.io/api/edge/trending/anime`)
        .then(response => setData(response.data.data))
        .catch(error => console.log(error));

    }, []);}*/



    return (
    <section className='main-container'>
        <div className='feed-wrapper'>
        <div className='content-wrapper'>
            <h2 className='content-wrapper-header'>Most Popular</h2>
            <div className='content-wrapper-divider'></div>
        </div>
        
        <div className='card-carousel'>
            <div className='card-div'>
                <div className='card-div-scroller'>
                    {data.map(item => ( 
                            <div className='card-wrapper' key={item.id}> 
                                <img className="card-image"src={item.attributes.posterImage.small} alt={item.attributes.titles.en}/>
                                <div className="card-text">
                                    <h4>{item.attributes.canonicalTitle}</h4>
                                    <div className="series-info">
                                        <h2>Series</h2> 
                                    </div>
                                </div>
                            </div>
                    ))}


                </div>
                
                
            </div>
        </div>
        <div className='content-wrapper'>
            <h2 className='content-wrapper-header'>Titles You May Be Interested In..</h2>
            <div className='content-wrapper-divider'></div>
        </div>
        
        <div className='card-carousel'>
            <div className='card-div'>
                <div className='card-div-scroller'>
                    {animeData.map(anime => (
                        <div className='card-wrapper' key={anime.id}>
                        <img className='card-image' src={anime.attributes.posterImage.small}/>
                        <div className='card-text'>
                            <h4>{anime.attributes.canonicalTitle}</h4>
                            <div className='series-info'>
                                <h2>Series</h2>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>

        </div>
            
      
        </div>


    </section>
    
    )


    

}













export default Main;