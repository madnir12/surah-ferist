import React, {useState, useEffect} from 'react'
import SingleItem from './SingleItem'
import {GoSearch} from 'react-icons/go'

const Fehrist = ({Surah,searchCount,setSearchVal,changeArry,searchVal})=>{

  return(
    <>
   <div className='centered'>
   <div className="search-div">
   
   <GoSearch className='searchIcon' />
   <input type="text" placeholder="Search Surah by name , number or any word you have" onChange={(e)=> {
    setSearchVal(e.target.value)
    changeArry()
  }
     }/>
     <span className='searchSpan'>{(searchVal == ""? 'total: 114': `found: ${searchCount}`)}</span>
   </div>
    
    {
      Surah.map((surah)=>{
        return <SingleItem key={surah.SurahID} {...surah} />
      } // ends map's inline function

      )// ends map function
      
    }
    </div> 
    </>
  ) // ends Surah comp return
} // ends Surah comp




export default Fehrist;
