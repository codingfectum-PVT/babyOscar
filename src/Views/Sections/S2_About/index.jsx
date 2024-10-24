import emotionStyled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import logo from '../../../assets/logo.png'
import aboutA from '../../../assets/aboutA.jpg'
import aboutB from '../../../assets/aboutB.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    
const Wrapper = emotionStyled.div`
    padding: 50px 0;
`
const AboutImage = emotionStyled.img`
    width: 100%;
    max-width: 800px;
    height: auto;
`
useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Wrapper>
        <Container maxWidth='lg'>
            <Grid container>
                <Grid xs={12} textAlign={'center'}>
                    <img src={logo} style={{widht: 150, height:'auto', margin: 'auto'}} data-aos="fade-up" />
                    <Typography variant='h2' textAlign={'center'} data-aos="fade-up">$Boscar</Typography>
                    <Typography variant='h4' textAlign={'center'} data-aos="fade-up">Introducing Baby Oscar: The Original Shiba Inu Meme Inspiration</Typography>
                    <Typography variant='body2' textAlign={'center'} marginTop={2} marginBottom={8} data-aos="fade-up">With The Legendary Oscar, The OG Shiba Inu, Pumping Massively And Igniting Excitement Across The Crypto Space, A New Narrative Is Emerging. Whispers Are Spreading That Ryoshi, The Mysterious Founder Of Shiba Inu, Is Behind Oscar's Rise. If This Proves True, Baby Oscar Is Set To Follow In The Footsteps Of Its Predecessor, Bringing The Same Shiba Spirit With A Fresh Twist.</Typography>
                    <AboutImage src={aboutA} style={{widht: 150, height:'auto', margin: '30px auto 45px'}} data-aos="fade-up"/>
                    
                    <Typography variant='h4' textAlign={'center'} data-aos="fade-up">Ryoshi Being Behind Oscar</Typography>
                    <Typography variant='body2' textAlign={'center'} marginTop={1} data-aos="fade-up">
                        Ryoshi is the creator of Shiba Inu (SHIB), a meme-based cryptocurrency that gained significant popularity in the crypto space. 
                    </Typography>
                    <Typography variant='body2' textAlign={'center'} marginTop={1} data-aos="fade-up">
                        Inspired by the success of Dogecoin, Ryoshi aimed to create a community driven project that would be more than just a joke. 
                    </Typography>
                    <Typography variant='body2' textAlign={'center'} marginX={'auto'} maxWidth={800} marginTop={1} marginBottom={8} data-aos="fade-up">
                        Ryoshi emphasizes the importance of community involvement and decentralized governance, positioning Shiba Inu as a playful yet serious contender in the broader crypto market.
                    </Typography>
                    <AboutImage src={aboutB} style={{widht: 150, height:'auto', margin: '30px auto 45px'}} data-aos="fade-up"/>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default About