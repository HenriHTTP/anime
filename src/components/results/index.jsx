import React from 'react'
import {
    Card,
    ImgCard,
    Title,
    TitleDiv,
    Stars,
    Atributes,
    AtributesButton
} from '../global/'

import {AiOutlineStar} from 'react-icons/ai'

export const Results = ({id,title,img,stars,years,complet,type}) => {
    return(
        <>
            <Card key={id}> 
            <TitleDiv> 
                <Title>{title}</Title>
            </TitleDiv>
                <Atributes>
                <AtributesButton>{years}</AtributesButton>
                <AtributesButton>{type}</AtributesButton>
                <AtributesButton>{complet}</AtributesButton>
                
                    
                
                </Atributes>
                
                <ImgCard src={img} alt={id} />

                <Stars> 
                <AiOutlineStar/> { parseFloat(stars * 10 ** -1).toFixed(1)}
                </Stars>

            </Card>
        </>
    )
}