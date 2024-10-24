import emotionStyled from '@emotion/styled'
import React, { useEffect } from 'react'
import bg from '../../../assets/footer-bg.png'
import logo from '../../../assets/logo.png'
import { Typography } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const Wrapper = emotionStyled.div`
        padding: 50px 0;
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        text-align: center;
    `
  return (
    <Wrapper>
        
        <img src={logo} style={{widht: 150, height:'auto', margin: 'auto'}} data-aos="fade-up"/>
        <Typography variant='h2' textAlign={'center'} data-aos="fade-up">baby oscar</Typography>

    </Wrapper>
  )
}

export default Footer