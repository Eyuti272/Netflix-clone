import React, { useEffect, useState } from 'react'
import style from '../Rows/Row.module.css'

import axios from '../../utils/axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
import { Movie, Padding } from '@mui/icons-material'
import { height, width } from '@mui/system'




const Rows = ({title, fetchUrl,isLargerRow}) => {
    let[Movies, setMovies]=useState([])
    let[trailerUrl,setTrailerUrl]=useState("")
    const baseUrl="https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        const rowFetch=async ()=>{
            try {
                const response=await axios.get(fetchUrl)
                console.log(response);
                setMovies(response.data.results)
              } catch (error) {
             console.log("error",error);
                
            }

        }
        rowFetch()
    },[fetchUrl])
    // console.log(Movies);
    const clickHundler=(Movies)=>{
      if(trailerUrl){
        setTrailerUrl('')
      }else{
        movieTrailer(Movies?.title || Movies?.namae ||Movies?.original_name ).then((url)=>{
          // console.log(url);
          const urlParams=new URLSearchParams(new URL(url).search)
          // console.log(urlParams);
          // console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'))
        })
      }
    }
    const opts={
      height:'390',
      width:'100%',
      playerVars:{
        autoplay:1
      }

    }
  return (
    <>
   
      <div className={style['row']}>
        <h1>{title}</h1>
           <div className={style['row_posters']}>
           
          {Movies.map((movie,index)=>(
               
              <img  onClick={()=>clickHundler(movie)} key={index} src={`${baseUrl}${isLargerRow ? movie.poster_path: movie.backdrop_path }`} alt={movie.name}   className={`${style.row_poster} ${isLargerRow && style.row_posterLarge}`}  />
            ))}
           </div>
           
           <div style={{padding:'40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl}opts={opts} />}
            
           </div>
      </div>
    
    </>
  )
}

export default Rows