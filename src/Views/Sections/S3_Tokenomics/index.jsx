import emotionStyled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { buySellTax, CA, supply } from '../../../links'
import burn from '../../../assets/burn.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardStyle = emotionStyled(Grid)`
    padding: 25px 20px 25px;
    margin-top: 20px;
    border-radius: 3px;
    position: relative;
    border: 3px solid #252211;
    box-shadow: 0 8px 0 #252211;
`
const TokenomicsCard = ({title, discription, imgSrc}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <Grid items xs={12} sm={6} lg={3} padding={2} data-aos="fade-up">
            <CardStyle textAlign={'center'}>
                <Grid container>
                    <Grid xs={12}>
                        <Typography variant='body2' color="#000" textTransform={'uppercase'} paddingLeft={0} textAlign={'left'}>{title}</Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant='h3' className="cardsText" textAlign={'left'} display={'flex'} alignItems={'center'} 
                            style={{color: imgSrc === true ? "#CE2121" : "#000" }} >
                            {imgSrc == true && <img src={burn} width="40px" height={'auto'}/> }
                            {discription}
                        </Typography>
                    </Grid>
                </Grid>
            </CardStyle>
        </Grid>
    )
}

const Tokenomics = () => {
const Wrapper = emotionStyled.div`
    padding: 50px 0;
`

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

useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Wrapper id='tokenomics'>
        <Container maxWidth='lg'>
            <Grid container>
                <Grid xs={12} textAlign={'center'}>
                    {/* <img src={logo} style={{widht: 150, height:'auto', margin: 'auto'}} /> */}
                    <Typography variant='h2' textAlign={'center'} data-aos="fade-up">tokenomics</Typography>
                    <Typography variant='body2' textAlign={'center'} onClick={copyText} style={{cursor: 'pointer'}} marginTop={1} data-aos="fade-up" id='textToCopy'>{CA}</Typography>
                </Grid>
                <TokenomicsCard 
                    title="Total Supply"
                    discription={supply}
                />
                <TokenomicsCard 
                    title="Burnt Supply"
                    discription='Tba(%)'
                    imgSrc={true}
                />
                <TokenomicsCard 
                    title="Liquidity"
                    discription='Burned'
                    imgSrc={true}
                />
                <TokenomicsCard 
                    title="Taxes"
                    discription={buySellTax}
                />
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Tokenomics