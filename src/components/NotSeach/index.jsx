import React from 'react';

import Gif from '../img/default.gif'

import { 
    GifDiv,
    GifImg,
    GifMsg,
    ContainerGif
} 
from '../global'


export const NotSeach = () => { 
    return( 
        <>
        <GifDiv> 
        <ContainerGif>
             <GifImg src={Gif} alt='gif'/>
            <GifMsg> Do your Search ... </GifMsg>
        </ContainerGif>
           
        </GifDiv>
        </>
    )
}