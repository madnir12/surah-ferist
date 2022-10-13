import './App.css';
import Fehrist from './comps/Fehrist';
import { Surah } from './comps/Surah'

function App() {
  
  return (
   <main>
    <Fehrist Surah={Surah}/>
   </main>
  );
}

export default App;
