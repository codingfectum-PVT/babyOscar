
import emotionStyled from '@emotion/styled'
import { Button } from '@mui/material'

const PageWrapper = emotionStyled.div`
    background-color: #40B149;
    min-height: 100vh;
`
const ButtonLink = emotionStyled(Button)`
    background: #40B149;
    width: 100%;
    color: #ffffff;
    max-width: 140px;
    margin-top: 25px;
    border-radius: 8px;
    border: 3px solid #FFDA0B;
    padding: 5px 5px;
    box-shadow: 0 8px 0 #FFDA0B;
    font-size: 20px;
    
    &.marginRight{
        margin-right: 20px;
        
        @media(max-width: 600px){
            margin-right: 0px;
        }
    }

    &:hover{
        background: #ffda0b;
        box-shadow: 0 8px 0 #40B149;
        border: 3px solid #40B149;
    }
    
    
    &.white{
        background: #FFF7EF;
        box-shadow: 0 8px 0 #252211;
        border: 3px solid #252211;
        -webkit-text-stroke: 2px #252211;
        color: #FFF7EF;
        
        &:hover{
            background: #EBAD36;
        }
    }
       
    &.socialButton{
        max-width: unset;
        width: unset;
        padding: 0px 15px;
        margin-right: 10px;
        margin-top: -9px;
        text-align: center;

        img{ margin: auto; }
        &:last-child{
            margin-right: 0px;
        }
        
        @media(max-width: 660px){
            margin-top: 20px !important;
        }
    }

    img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    @media(max-width: 600px){
        font-size: 20px;
    }
`
export { PageWrapper, ButtonLink }
