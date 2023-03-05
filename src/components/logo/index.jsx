import React from 'react';

import {
    Logo
} from '../global'

import {SiMyanimelist} from 'react-icons/si'

export const Logos = ({func}) => { 
    return( 
        <> 
         <Logo onClick={func}> <SiMyanimelist/> </Logo>
        </>
    )
}