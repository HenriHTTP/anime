import styled from "styled-components"


export const Card =  styled.div`
    width:280px; 
    height:500px; 
    border-radius:10px;
    display:flex; 
    justify-content:space-around;  
    flex-direction:column;
    margin:auto;
    background-color: white;
    margin-top:20px;
    transition-delay:0.1s;
    border:solid 2px whitesmoke;
    :hover { 
        scale: 0.9;
    };

`
export const ImgCard = styled.img `
    width:200px; 
    height: 300px;
    margin:auto;
`
export const Title = styled.h1`
    width:200px; 
    margin:auto;  
    font-size:1.2em;
    text-align: center;
    color:black; 
`
export const SeachInput = styled.input` 
    width:90%; 
    padding:10px;   
    margin:auto;  
    outline : none;
    border:none; 
    background-color:transparent; 
    color:gray;
    text-align:left;
`
export const SeachButton = styled.button`
    width:50px; 
    text-align:center;
    color:gray;  
    margin:auto;
    font-size: 2em;
    padding:0px;
    background:transparent;
    border:none;
    display: flex;
    justify-content:center; 
   
`
export const SeachDiv =  styled.div`
    width:500px;
    display:flex;   
    flex-direction:row; 
    background-color:white;   
    border-radius:10px;
    margin:auto;
`
export const Container =  styled.div`
    width:100vw; 
    height:100%;
    justify-content:center; 
    flex-direction:column;
    background-color:whitesmoke;
    padding:20px;
`
export const ContainerResults = styled.div `
    width:900px;
    margin:auto;
    display:flex;   
    flex-direction:row; 
    flex-wrap:wrap;
    margin-top:20px;
    margin-bottom:40px;
`
export const NavBar = styled.div`
    width:100vw; 
    background:#3e509d; 
    height:75px;   
    display:flex;
    flex-direction:row; 
    justify-content:center; 
`
export const TitleDiv = styled.div`
    width:100%; 
    background-color:transparent; 
    margin:auto;
    display:flex; 
    justify-content:center;

`
export const Stars = styled.p `
    font-size:1em;
    text-align:center;
`
export const  Loadding =styled.div` 
    width: 280px; 
    display:flex; 
    justify-content:center;   
    flex-direction:column; 
    margin:auto;
`
export const LoadGif =  styled.img `
    width: 50px;
    margin:auto; 


`
export const Logo = styled.button` 
    background-color:transparent;
    color:white;
    font-size: 3em;
    border:none;
    text-align:center; 
    margin: auto;
    display:flex; 
    justify-content:center;
`
export const LogoDiv = styled.div ` 
    width:900px; 
    display: flex;
    flex-direction:row; 
    justify-content:space-around;
`