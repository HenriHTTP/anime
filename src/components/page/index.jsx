import React, { useState} from 'react'

import { Results } from '../results'
import { Seach } from '../seach'
import { Load } from '../loadding'
import { NotSeach } from '../NotSeach'

import APi from '../../APi/APi'

import { 
    ContainerResults,
    NavBar,
    LogoDiv,
} from '../global'
import { Logos } from '../logo'

export default function Home (){ 
    
    const [Request,setRequest]= useState([]) 
    const [anime,setanime] =useState()
   
    const HandleChangeValue = (e) => {  
         setanime(e.target.value.toLowerCase())
    }
   
    const HandleInputValue = async ()=> {
        console.log(anime)
        HandleSeach()
    }
   
    const  HandleSeach =  async () => { 
        if (anime === ''){ 
            
            alert('vazion')
            return
        }
        if (anime === undefined){ 
            alert('vazion')
            return
        }
        if (anime === ' '){ 
            alert('vazion')
            return
        }
        try{
            const response =  await APi.get(`/anime?filter[text]=${anime}`)
            console.log(response.data.data)
            setRequest(response.data.data)
        
            
         
        }catch(error){ 
            
            console.log(error)
           
        }
      
    }
    return( 
        <>
         
        <NavBar>
            <LogoDiv>
            <Logos func={() => window.location.reload(true)}/>
            <Seach  change={HandleChangeValue}  func={HandleInputValue}/>
            </LogoDiv>
        
        </NavBar>
           
         
        <ContainerResults>
         
            

            {anime !== '' && !Request &&(
                <>
                  <Load/>
                </>
            )}
            {Object.keys(Request).length < 2 &&(
                <>
                <NotSeach/>
                </>
            )}

            {Object.keys(Request).length > 2 &&  Request.map( args => (
            <>
            <Results key={args.id} id={args.id} title={args.attributes.canonicalTitle} img={args.attributes.posterImage.small} stars={args.attributes.averageRating} years={args.attributes.startDate} complet={args.attributes.status} type={args.attributes.showType}/>
            
            </>
            

            ) )        
            
            }
            
        </ContainerResults>
        
            
      
    
        </>
    )
}