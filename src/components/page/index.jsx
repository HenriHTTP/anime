import React, { useState} from 'react'

import { Results } from '../results'
import { Seach } from '../seach'
import { Load } from '../loadding'
import { NotSeach } from '../NotSeach'
import { Adventure } from '../Adventure'


import APi from '../../APi/APi'

import { 
    ContainerResults,
    NavBar,
    LogoDiv,
    SeachP,
    CategoriesDiv,
    CategoriesButton
} from '../global'
import { Logos } from '../logo'
import { Categories } from '../Categories'

export default function Home (){ 
    
    const [Request,setRequest]= useState([]) 
    const [anime,setanime] =useState()
    const [ResultsSeach , SetResultsSeach] = useState()
    const [Categories, SetCategories] = useState()
   
    const HandleChangeValue = (e) => {  
         setanime(e.target.value.toLowerCase())
    }
   
    const HandleInputValue = async ()=> {
        console.log(anime)
        SetResultsSeach(anime)
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

    const HandleCategoriesHome =  async (args) => { 
        
        SetCategories(args.target.value)  
        
        const categories = args.target.value
         
        try{
            console.log(args)
            const response =  await APi.get(`/anime?filter[categories]=${categories}`)

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
            
            
            {Object.keys(Request).length > 2 &&(
                <>
                    <SeachP> Showing results for { ResultsSeach || Categories}</SeachP>
                </>
            )}
            
        
          {anime !== '' && !Request &&(
                <>
                  <Load/>
                </>
           )}



        <CategoriesDiv> 
            <CategoriesButton value={'action'} onClick={HandleCategoriesHome}>action</CategoriesButton>
            <CategoriesButton value={'adventure'} onClick={HandleCategoriesHome}>adventure</CategoriesButton>
            <CategoriesButton value={'angst'} onClick={HandleCategoriesHome}>angst</CategoriesButton>
            <CategoriesButton value={'anthropomorphism'} onClick={HandleCategoriesHome} >anthropomorphism</CategoriesButton>
            <CategoriesButton value={'blackmail'} onClick={HandleCategoriesHome} > blackmail</CategoriesButton>
            <CategoriesButton value={'comedy'} onClick={HandleCategoriesHome} >comedy</CategoriesButton>
            <CategoriesButton value={'drama'} onClick={HandleCategoriesHome} >drama</CategoriesButton>
            <CategoriesButton value={'detective'} onClick={HandleCategoriesHome}>detective</CategoriesButton>
            <CategoriesButton value={'fantasy'} onClick={HandleCategoriesHome}>fantasy</CategoriesButton>
            <CategoriesButton value={'ghost'} onClick={HandleCategoriesHome}>ghost</CategoriesButton>
            <CategoriesButton value={'harem'} onClick={HandleCategoriesHome}>harem</CategoriesButton>
            <CategoriesButton value={'horror'} onClick={HandleCategoriesHome}>horror</CategoriesButton>
            <CategoriesButton value={'ecchi'} onClick={HandleCategoriesHome}>ecchi</CategoriesButton>
            <CategoriesButton value={'mystery'} onClick={HandleCategoriesHome}>mystery</CategoriesButton>
            <CategoriesButton value={'parasite'} onClick={HandleCategoriesHome}>parasite</CategoriesButton>
            <CategoriesButton value={'romance'} onClick={HandleCategoriesHome}>romance</CategoriesButton>
            <CategoriesButton value={'thriller'} onClick={HandleCategoriesHome}>thriller</CategoriesButton>
            <CategoriesButton value={'vampire'} onClick={HandleCategoriesHome}>vampire</CategoriesButton>
            <CategoriesButton  value={'zombie'} onClick={HandleCategoriesHome}>zombie</CategoriesButton>
            <CategoriesButton value={'shoujo'} onClick={HandleCategoriesHome}>shoujo</CategoriesButton>
            <CategoriesButton value={'shounen'} onClick={HandleCategoriesHome}>shounen</CategoriesButton>
        </CategoriesDiv>
            
            {Object.keys(Request).length < 2 &&(
                <>
                <Adventure/>
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