import React, {Component} from "react"
import { Link } from 'react-router';
import './Avengers.css'
import Image from "../images/avengers.png"
import Logo from "../images/tom.png"

export default class Avengers extends Component {
    render() {
        return(
            <div className='avengers'>
                <h1 className='avengers_title'> Avengers: Infinity War </h1>
                    <div className='percent'>
                             <label className='avengers_subtitle'>85%</label> 
                             <img classname='logo' src={Logo} alt="tomato" /> 
                     </div>
                             <p2 className='avengers_subtitles' > 156 minutes </p2>
                        <img classname='image' src={Image} alt="avg" />
                     <Link classname='link' href="https://www.rottentomatoes.com/m/avengers_infinity_war" target="_blank" > Check review </Link>
             <footer className='text'>An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</footer>
          </div>
        )
    }
}