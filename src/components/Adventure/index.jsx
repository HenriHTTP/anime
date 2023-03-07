import React, { useEffect ,useState} from 'react';
import APi from '../../APi/APi'
import { Results } from '../results';
import {
    ContainerResults,
} from '../global'
 
export const Adventure = () => {
    const [Categories,SetCategories] = useState([])
   
    useEffect( () => { 
        HandleResulstHome()
    },[])

    const HandleResulstHome =  async () => { 
        
        const ResultsHome = 'adventure'
        
        try{
            const response =  await APi.get(`/anime?filter[categories]=${ResultsHome}`)
            console.log(response.data.data)
            SetCategories(response.data.data)     
         
        }catch(error){ 
            
            console.log(error)
           
        }
      
    }
    return( 


        <> 
        <ContainerResults>
           {Object.keys(Categories).length > 2 &&  Categories.map( args => (
            <>
            <Results key={args.id} id={args.id} title={args.attributes.canonicalTitle} img={args.attributes.posterImage.small} stars={args.attributes.averageRating} years={args.attributes.startDate} complet={args.attributes.status} type={args.attributes.showType}/>
            
            </>
            

            ) )        
            
            }
        </ContainerResults>
        </>
    )
}