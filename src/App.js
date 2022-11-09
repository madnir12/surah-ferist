import './App.css';
import Fehrist from './comps/Fehrist';
import { Surah } from './comps/Surah'
import { useState } from 'react'
function App() {
  const [searchCount, setSearchCount] = useState(0)
  const [finalSurah, setFinalSurah] = useState(Surah)
  const [searchVal, setSearchVal] = useState("")
  const changeArry = ()=>{
    const newSurah = Surah.filter(val=>{
      if(searchVal == ""){
        
        return val
      } else if(val.SurahID.includes(searchVal) || val.SurahIntro.includes(searchVal) || val.SurahNameU.includes(searchVal) || val.SurahNameE.toLowerCase().includes(searchVal.toLowerCase()) || val.Nazool.toLowerCase().includes(searchVal.toLowerCase())){
        
        return val
        
      }
    })
    console.log("change arry is in rurring")
    setFinalSurah(newSurah)
    setSearchCount(newSurah.length)
  }
  return (
   <main>
    <Fehrist Surah={finalSurah} searchCount={searchCount} setSearchVal={setSearchVal} changeArry={changeArry} searchVal={searchVal} />
    
   </main>
  );
}

export default App;
