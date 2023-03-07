import React from 'react';
import {
    CategoriesDiv,
    CategoriesButton
} from '../global'

export const CategoriesHome =({func})=> { 
    return(
        <> 
   
   <CategoriesDiv> 
            <CategoriesButton value={'action'} onClick={func}>action</CategoriesButton>
            <CategoriesButton value={'adventure'} onClick={func}>adventure</CategoriesButton>
            <CategoriesButton value={'angst'} onClick={func}>angst</CategoriesButton>
            <CategoriesButton value={'anthropomorphism'} onClick={func} >anthropomorphism</CategoriesButton>
            <CategoriesButton value={'blackmail'} onClick={func} > blackmail</CategoriesButton>
            <CategoriesButton value={'comedy'} onClick={func} >comedy</CategoriesButton>
            <CategoriesButton value={'drama'} onClick={func} >drama</CategoriesButton>
            <CategoriesButton value={'detective'} onClick={func}>detective</CategoriesButton>
            <CategoriesButton value={'fantasy'} onClick={func}>fantasy</CategoriesButton>
            <CategoriesButton value={'ghost'} onClick={func}>ghost</CategoriesButton>
            <CategoriesButton value={'harem'} onClick={func}>harem</CategoriesButton>
            <CategoriesButton value={'horror'} onClick={func}>horror</CategoriesButton>
            <CategoriesButton value={'ecchi'} onClick={func}>ecchi</CategoriesButton>
            <CategoriesButton value={'mystery'} onClick={func}>mystery</CategoriesButton>
            <CategoriesButton value={'parasite'} onClick={func}>parasite</CategoriesButton>
            <CategoriesButton value={'romance'} onClick={func}>romance</CategoriesButton>
            <CategoriesButton value={'thriller'} onClick={func}>thriller</CategoriesButton>
            <CategoriesButton value={'vampire'} onClick={func}>vampire</CategoriesButton>
            <CategoriesButton  value={'zombie'} onClick={func}>zombie</CategoriesButton>
            <CategoriesButton value={'shoujo'} onClick={func}>shoujo</CategoriesButton>
            <CategoriesButton value={'shounen'} onClick={func}>shounen</CategoriesButton>
        </CategoriesDiv>
        </>
    )
}
