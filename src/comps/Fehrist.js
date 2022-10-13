import React, {useState} from 'react'
import SingleItem from './SingleItem'

const Fehrist = ({Surah})=>{
  const [SearchVal,setSearchVal] = useState("")
  // let [searchCount,setSearchCount] = useState(0)
  // let count = 0;
  return(
    <>
   <div className='centered'>
   <div className="search-div">
   <input type="text" placeholder="Search Surah by name , number or any word you have" onChange={(e)=> setSearchVal(e.target.value)
     }/>
   </div>
    
    {
      Surah.filter(val=>{
        if(SearchVal == ""){
          return val
        } else if(val.SurahID.includes(SearchVal) || val.SurahIntro.includes(SearchVal) || val.SurahNameU.includes(SearchVal) || val.SurahNameE.toLowerCase().includes(SearchVal.toLowerCase()) || val.Nazool.toLowerCase().includes(SearchVal.toLowerCase())){
          
          return val
          
        }
      }).map((surah)=>{
        return <SingleItem key={surah.SurahID} {...surah} />
      } // ends map's inline function

      )// ends map function
      
    }
    </div> 
    </>
  ) // ends Surah comp return
} // ends Surah comp




export default Fehrist;
