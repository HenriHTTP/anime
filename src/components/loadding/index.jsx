import React from 'react';
import Gif from '../img/loading.gif'
import {
     Loadding,
     LoadGif
} from '../global';

export const Load = () => { 
    return ( 
        <> 
        <Loadding> 
            <LoadGif src={Gif}  alt='carregando'/>
        </Loadding>
        </>
    )
}