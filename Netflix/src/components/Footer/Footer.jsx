import React from 'react'
import style from '../../components/Footer/Footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
       <div className='footer_outer_container'>
        <div className='footer_inner_container'>
          <div className='footer_icons'>
            <FacebookOutlinedIcon />
            <InstagramIcon  />
            <YouTubeIcon />


          </div>
          <div className='footer_data'>
               <ul>
                <li>Audio Discription</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
                
               </ul>

          </div>


        </div>

       </div>
      
      
    </>
  )
}

export default Footer