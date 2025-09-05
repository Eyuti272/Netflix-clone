import React from 'react'
import style from '../../components/Header/Header.module.css'
import  NetflixLogo from '../../assets/images/NetflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



 
 const Header = () => {
   return (
    <>
    <div className={style['header-outer-container']}>
      <div className={style['header-container']}>
        <div className={style['header-left']}>
          <ul>
             <li><img src={NetflixLogo} alt="NetflixLogo" width="100" /></li>
             <li>Home</li>
             <li>TvShows</li>
             <li>Movies</li>
             <li>Latest</li>
             <li>MyList</li>
             <li>Browse By Language</li>
          </ul>
        </div>
        <div className={style['header-right']}>
          <ul>
            <li><SearchIcon /></li>
           <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
           

          </ul>
        </div>
      </div>
    </div>
     
    </>
   )
 }
 
 export default Header