import emotionStyled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
// import bg from "../../../assets/header-bj.jpg"
// import tg from "../../../assets/tg.png"
// import x from "../../../assets/x.png"
// import uni from "../../../assets/uni.png"
// import dt from "../../../assets/dt.png"
// import ds from "../../../assets/ds.png"
// import es from "../../../assets/es.png"
// import fishTail from "../../../assets/fishTail.png"
// import barchart from "../../../assets/barchart.png"
import SmilingDolphinBuyVideo from "../../../assets/baby-oscar-hero-section-muted.mp4"
// import smilingdolfhine from "../../../assets/smiling-dolfhine.png"
import { Box, Container, Grid, Typography } from '@mui/material'
import { MenuLink } from '../../Components/LockerMenu/styles'
import { ButtonLink } from '../../Styles/style'
import { CA, dexScreenerLink, dexToolsLink, ethScanLink, tgLink, uniSwapLink, xLink } from '../../../links'
import LockerMenu from '../../Components/LockerMenu'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Wrapper = emotionStyled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    z-index: 1;
    padding: 40px 0;
`

const BackGroundVideo = emotionStyled(Box)`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    object-position: center;
`
const Header = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      
    const [copiedText, setCopiedText] = useState('');
    const copyText = () => {
        const textToCopy = document.getElementById('textToCopy').innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedText(textToCopy);
        //   alert('Text copied: ' + textToCopy);
        }).catch((err) => {
        alert('Failed to copy: ' + err);
        });
    };
  return (
    <Wrapper>
        <BackGroundVideo component="video" autoPlay muted loop controls={false}>
            <source src={SmilingDolphinBuyVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </BackGroundVideo>
        <Box position={'absolute'} top={0} left={0} right={0}>
            <LockerMenu />
        </Box>
        
        <Box padding={'45px 0'} />
        <Container maxWidth="xl"  data-aos="zoom-in">
            <Grid container>
                <Grid xs={12}>
                    <Typography variant='h1' textAlign={'center'} >$Boscar</Typography>
                    <Typography variant='h5' textAlign={'center'} >(baby oscar)</Typography>
                    <Typography variant='body2' textAlign={'center'} marginTop={3} >CA:</Typography>
                    <Typography variant='body2' textAlign={'center'} onClick={copyText} style={{cursor: 'pointer'}} marginTop={1} >{CA}</Typography>
                    <Box marginY={4} textAlign='center'>
                        {/* <MenuLink href={uniSwapLink} style={{backgroundColor: '#878C95', marginRight: 20}} target='_blank'><img src={fishTail} style={{marginRight: 10}}/>Buy Now</MenuLink>
                        <MenuLink href={dexToolsLink} target='_blank'><img src={barchart} style={{marginRight: 10}}/>Chart</MenuLink> */}
                    </Box>
                    <Box textAlign='center'>
                        <ButtonLink href={tgLink} className='socialButton' target='_blank' p="0">Telegram</ButtonLink>
                        <ButtonLink href={xLink} className='socialButton' target='_blank' p="0">X</ButtonLink>
                        <ButtonLink href={dexToolsLink} className='socialButton' target='_blank' p="0">Dextools</ButtonLink>
                        <ButtonLink href={dexScreenerLink} className='socialButton' target='_blank' p="0">Dexscreener</ButtonLink>
                        <ButtonLink href={uniSwapLink} className='socialButton' target='_blank' p="0">Uniswap</ButtonLink>
                    </Box>
                </Grid>
            </Grid> 
        </Container>
    </Wrapper>
  )
}

export default Header