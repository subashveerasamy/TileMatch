import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import React from 'react'
import Tile from './Tile';
import MyContext from '../Context/MyContext';

const Game = () => {
    
    const afg="/af-flag.gif"
    const andorra="/an-flag.gif";
    const azerbaijan= "/aj-flag.gif";
    const barbados= "/bb-flag.gif";
    const beliz= "/bh-flag.gif";
    const bhutan= "/bt-flag.gif";
    const brunei= "/bx-flag.gif";
    const cambodia= "/cb-flag.gif"
    const arr=[
        {
            value: "afg", logo: afg, isFlipped: false, isMatched: false
        },
        {
            value: "andorra", logo: andorra, isFlipped: false, isMatched: false
        },
        {
            value: "azerbaijan", logo: azerbaijan, isFlipped: false, isMatched: false
        },
        {
            value: "barbados", logo: barbados, isFlipped: false, isMatched: false
        },
        {
            value: "beliz", logo: beliz, isFlipped: false, isMatched: false
        },
        {
            value: "bhutan", logo: bhutan, isFlipped: false, isMatched: false
        },
        {
            value: "brunei", logo: brunei, isFlipped: false, isMatched: false
        },
        {
            value: "cambodia", logo: cambodia, isFlipped: false, isMatched: false
        },
        {
            value: "afg", logo: afg, isFlipped: false, isMatched: false
        },
        {
            value: "andorra", logo: andorra, isFlipped: false, isMatched: false
        },
        {
            value: "azerbaijan", logo: azerbaijan, isFlipped: false, isMatched: false
        },
        {
            value: "barbados", logo: barbados, isFlipped: false, isMatched: false
        },
        {
            value: "beliz", logo: beliz, isFlipped: false, isMatched: false
        },
        {
            value: "bhutan", logo: bhutan, isFlipped: false, isMatched: false
        },
        {
            value: "brunei", logo: brunei, isFlipped: false, isMatched: false
        },
        {
            value: "cambodia", logo: cambodia, isFlipped: false, isMatched: false
        }
       
    ];
    const [tiles, setTiles]= useState([]);
    const navigate=useNavigate();
    const {isLoggedIn, setIsLoggedIn}= useContext(MyContext)
    const [flipAllowed, setFlipAllowed]= useState(true);
   
     const reset=()=>{
        setTiles(arr.sort(()=>Math.random()-0.5));
    }; 
    useEffect(() =>
    {
        if(!isLoggedIn){
            navigate("/");
        }
        reset();
    }, []);
    const handleFlip=(index)=>{
       
        const newTiles=[...tiles];
      
        const prevTile= tiles.filter((tile) => tile.isFlipped)[0];
      
       
        newTiles[index].isFlipped=true ;
      
        setTiles(newTiles);
        
       

        if(newTiles.filter((tile)=>tile.isFlipped).length===2)
        { 
            setFlipAllowed(false);
            const unFlip=() => {
                newTiles.
                filter((tile) => tile.isFlipped).
                forEach((tile) => (tile.isFlipped = false));
                setTiles([...newTiles])
            }
          const timeoutId=setTimeout (() =>{ 
           unFlip();
           setFlipAllowed(true);
        },1500);
          if(prevTile){
            prevTile.isMatched = newTiles[index].isMatched = 
            prevTile.value == newTiles[index].value;
            if(prevTile.isMatched){

                clearTimeout(timeoutId);
                unFlip();
                setFlipAllowed(true);
            }
        }
        }

        
        
    }
 
  return (
    <div className="container">
        <div className="d-flex justify-content-center">
            <h1>Tile Match Game</h1>
        </div>
        <div className="row text-center "  >
           {
            tiles.map((value, index) => (
               <Tile key={index} value={value} index={index} handleFlip={handleFlip} flipAllowed={flipAllowed} />
            ))
           } 
        </div>
        <div className='p-5 text-center'>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Game