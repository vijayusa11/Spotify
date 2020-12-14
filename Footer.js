import React from 'react'
import './Footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo' src='https://scontent.fjai5-1.fna.fbcdn.net/v/t1.0-9/14915700_1174704959288146_3100876844402615614_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=On1tkPn7TpkAX9WEqSe&_nc_ht=scontent.fjai5-1.fna&oh=d87ee609b16e1d0e5da9397bcca2e2e9&oe=5FFBA0DC' alt='song details' />
                <div className='footer__songInfo'>
                    <h4>Choices</h4>
                    <p>E-40</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Footer
