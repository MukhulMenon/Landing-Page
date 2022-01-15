import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import { ButtonL } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg ,HeroContent ,HeroH1 ,HeroP ,HeroBtnWrapper ,ArrowForward ,ArrowRight} from './HeroElements'


const HeroSection = () => {
    const[hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> This is a Demo for a Landing Page</HeroH1>
                <HeroP>This wesite is made for demo purposes only and the content is open to grounds of copyrights</HeroP> 
            <HeroBtnWrapper>
                <ButtonL to ='signup' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                >
                    Move to Signup area {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonL>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
