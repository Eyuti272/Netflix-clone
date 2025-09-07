import React from 'react'
import style from '../../components/Footer/Footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
       <div className={style['footer_outer_container']}>
        <div className={style['footer_inner_container']}>
          <div className={style['footer_icons']}>
            <FacebookOutlinedIcon />
            <InstagramIcon  />
            <YouTubeIcon />


          </div>
          <div className={style['footer_data']}>
             <div>
               <ul>
                <li>Audio Discription</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
              </ul>
             </div>
             <div>
               <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Prefrence</li>
              </ul>
             </div>
             <div>
               <ul>
                <li>Gift Cards</li>
                <li>Terms of  Use</li>
                <li>Corporate Information</li>
              </ul>
             </div>
              <div>
               <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
             </div>
             

           </div>
           <div className={style['service_code']}>
               <p>
                Service Code
               </p>
            
           </div>
           <div className={style['copy-write']}>
             &copy; 1997-2025 Netflix,Inc
           </div>
           


        </div>

       </div>
      
      
    </>
  )
}

export default Footer