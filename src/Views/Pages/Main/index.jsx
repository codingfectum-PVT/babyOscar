import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Sections/S1_Header'
import About from '../../Sections/S2_About'
import Tokenomics from '../../Sections/S3_Tokenomics'
import HowToBuy from '../../Sections/S4_howToBuy'
import Footer from '../../Sections/S6_Footer'

const MainPage = (props) => {
  
  return (
    <PageWrapper>
        <Header />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage