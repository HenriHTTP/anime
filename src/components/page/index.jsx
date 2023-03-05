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
    const [value,setvalue] = useState()
    const [anime,setanime] =useState()
   
    const HandleChangeValue = (e) => {  
         setvalue(e.target.value) 
    }
   
    const HandleInputValue = async ()=> {
        
        let SeachValue = value
        setanime(SeachValue.toLowerCase())

        HandleSeach()
    }
   
    const  HandleSeach =  async () => { 
        if (anime === ''){ 
            return
        }
        if (anime === undefined){ 
            return 
        }
        try{
            const response =  await APi.get(`/anime?filter[text]=${anime}`)
            setRequest(response.data.data)
        
            
         
        }catch(error){ 
        
           
        }
      
    }
    return( 
        <>
         
        <NavBar>
            <LogoDiv>
            <Logos/>
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
            <Results key={args.id} id={args.id} title={args.attributes.canonicalTitle} img={args.attributes.posterImage.small} stars={args.attributes.averageRating}/>
            
            </>
            

            ) )        
            
            }
            
        </ContainerResults>
        
            
      
    
        </>
    )
}