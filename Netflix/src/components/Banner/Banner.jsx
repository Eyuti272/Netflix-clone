import React, { useEffect,useState } from 'react'

import style from '../Banner/Banner.module.css'
import axios from '../../utils/axios'

import request from '../../utils/request'

const Banner = () => {
    const [movie, setMovies] = useState({});
    useEffect(()=>{  
         const fetchData= async () => {
      try {
       
        const response= await axios.get(request. fetchNetflixOriginals)
        
        console.log(response);
       const index= Math.floor(Math.random() * response.data.results.length)
        setMovies(response.data.results[index])
      }  
        
       catch (error) {
        console.log("error",error);
        
      } 
     
      
    }
     
 fetchData()
    },[])

    function turncate(str,n){
      return str && str.length > n ? str.substr(0, n-1)+'...':str;
    }
  
  return (
    <>
      <div className={style['Banner']} style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
      }}>
       <div className={style["banner_contents"]}>
        <h1 className={style['banner_title']}>{movie?.title || movie?.name || movie?.original_name}</h1>
         <div className={style['banner_description']}>
             <p>{turncate(movie?.overview,150)}</p>
          </div>
        <div className={style['banner_review']}>
          <p><a href="#">{movie?.vote_average} User reviews</a></p>
          </div>
         
        <div className={style['banner_buttons']}>
          <button className={`${style.banner_buttons } ${style.play}`}>Play</button>

         <button className={`${style.banner_buttons } ${style.list}`}> My List</button>

        </div>
      


       </div>
          
      </div>
      <div className={style['banner_fadeBottom']} />
    
    </>
      
  )
}

export default Banner

