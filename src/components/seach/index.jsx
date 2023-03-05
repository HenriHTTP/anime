import React from 'react'
import { 
    SeachInput,
    SeachDiv,
    SeachButton
} from '../global'
import { AiOutlineSearch} from 'react-icons/ai'

export const Seach = ({func,change}) => {
    return(
        <>
        <SeachDiv>
        <SeachInput onChange={change}/>
        <SeachButton onClick={func}>
        <AiOutlineSearch/>
        </SeachButton>
        </SeachDiv>
        </>
    )}