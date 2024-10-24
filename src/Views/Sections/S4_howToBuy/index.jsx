import emotionStyled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ButtonLink } from '../../Styles/style'
import { CA } from '../../../links'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Wrapper = emotionStyled.div`
    padding: 50px 0;
`

const CardStyle = emotionStyled(Grid)`
    padding: 50px 20px 25px;
    margin-top: 20px;
    border-radius: 3px;
    position: relative;
    border: 3px solid #252211;
    box-shadow: 0 8px 0 #252211;

    .header{
        background: #40B149;
        position: absolute;
        top: -20px;
        left: 5px;
        text-align: left;
        border-radius: 3px;
        padding: 0 5px 5px;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #252211;
        box-shadow: 0 8px 0 #252211;

        img{
            height: 20px;
            width: auto;
        }
    }
`

const BuyingCard = ({title, discription, numaric}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <Grid items xs={12} sm={6} lg={5} padding={2} data-aos="fade-up">
            <CardStyle textAlign={'center'}>
                <div className='header'>
                    <Typography variant='h3' color={'#FFDA0B'} paddingLeft={0} textAlign={'left'}>{numaric}</Typography>
                </div>
                <Grid container>
                    <Grid xs={12}>
                        <Typography variant='h4' textTransform={'uppercase'} paddingLeft={0} textAlign={'left'}>{title}</Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant='body2' maxWidth={380} minHeight={150} marginTop={'10px'} className="cardsText" textAlign={'left'} color="#000">{discription}</Typography>
                    </Grid>
                </Grid>
            </CardStyle>
        </Grid>
    )
}
const HowToBuy = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <Wrapper id='how-to-buy'>
        <Container maxWidth='lg'>
            <Grid container justifyContent={'center'} >
                <Grid items xs={12} marginBottom={3}>
                    <Typography variant='h2' textAlign={'center'} margingTop={3} data-aos="fade-up">How to buy</Typography>
                </Grid>
                <BuyingCard 
                    title="cREATE A WALLET"
                    discription='Set up a crypto wallet (e.g., MetaMask) to store your ETH and Baby Oscar tokens securely. Ensure you back up your recovery phrase for future access.'
                    numaric="1"
                />
                <BuyingCard 
                    title="connect to dex"
                    discription='Link your wallet to a decentralized exchange (DEX) like Uniswap or PancakeSwap to interact with the platform for token swaps.'
                    numaric="2"
                />
                <BuyingCard 
                    title="swap eth for $Boscar"
                    discription='Use the DEX to trade your ETH for Baby Oscar tokens. Set slippage tolerance if necessary to ensure a smooth transaction.'
                    numaric="3"
                />
                <BuyingCard 
                    title="verify & manage tokens"
                    discription="Confirm the swap and monitor your wallet to verify receipt of the Baby Oscar tokens. You're now ready to trade or hold for future gains."
                    numaric="4"
                />
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default HowToBuy