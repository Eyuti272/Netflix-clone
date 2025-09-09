import React from 'react'
import Rows from '../Rows/Row'
import requests from '../../utils/request'

const RowLists = () => {
  return (
    <>
       <Rows title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargerRow={true} />
        <Rows title="Trending Now" fetchUrl={requests.fetchTrending}  />
         <Rows title="TopRated Movies" fetchUrl={requests.fetchTopRatedMovies}  />
         <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
         <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
         <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />
        <Rows title="Tv Show" fetchUrl={requests.fetchTvShow}  />
            





 

    </>
  )
}

export default RowLists