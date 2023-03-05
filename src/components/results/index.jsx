import React from 'react'
import {
    Card,
    ImgCard,
    Title,
    TitleDiv,
    Stars,
} from '../global/'

import {AiOutlineStar} from 'react-icons/ai'

export const Results = ({id,title,img,stars}) => {
    return(
        <>
            <Card key={id}> 
            <TitleDiv> 
                <Title>{title}</Title>
            </TitleDiv>
                
                <ImgCard src={img} alt={id} />

                <Stars> 
                <AiOutlineStar/> { parseFloat(stars * 10 ** -1).toFixed(1)}
                </Stars>

            </Card>
        </>
    )
}