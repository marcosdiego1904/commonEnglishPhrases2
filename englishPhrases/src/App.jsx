import { useState } from 'react'
import './App.css'
import Button from  './assets/components/buttons'
import { spanishPhrases } from './assets/components/phrases';
import { englishPhrases } from './assets/components/phrases';
function App() {
  const [selectedPhrase, setSelectedPhrase] = useState('Pick a Phrase'); 
  function getValue(id) {
    setSelectedPhrase(spanishPhrases[id] || "Pick a Phrase"); 
  }
const buttons = Array.from({ length: 40 }, (_, i) => (
  <Button
    key={i + 1} 
    id={i + 1} 
    text={englishPhrases[i+1]}
    onClicks={() => getValue(i + 1)} 
  />
));
  return (
    <>
    <div className='mai'>
      <div className='tit'>
      <h1>The 40 most common phrases in English</h1>
      <p className='sub'>& its translation to Spanish</p>
      </div>
    
    <div className='main-cont'>
    <div className='window'>
    {selectedPhrase && <p className="text-window">{selectedPhrase}</p>}
</div>
<div className='but'>
  {buttons}
</div>
    </div>
    </div>
    
 
    </>
  )
}

export default App
