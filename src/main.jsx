import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import {Keyboard_app} from './keyboard.jsx'
import {Phrase_app} from './phrase.jsx'
import {useEffect} from 'react'
import { useState } from 'react'



function Page(){

  const [keydown, change_key_down] = useState(null);
  const [keyup, change_key_up] = useState(null);
  const [pointer, change_pointer] = useState("T");

  const phrases = [
    "The quick brown fox jumps over the lazy dog", 
    "A journey of a thousand miles begins with a single step", 
    "To be or not to be, that is the question",
    "All that glitters is not gold", 
    "The only thing we have to fear is fear itself"];
  const [phrase_pointer, change_phrase_pointer] = useState(0);
      
   


  useEffect(()=>{
  window.addEventListener("keydown",(e)=> {
    if(e.repeat){
      return;
    }
    change_key_down(e);
  });

  window.addEventListener("keyup", (e)=> {
    change_key_up(e);
  });

},[]);



return(
    <>
    <Phrase_app keydown={keydown} pointer={pointer} change_pointer={change_pointer} phrases ={phrases}/>
    <Keyboard_app keyup={keyup} keydown={keydown} pointer={pointer}/>
    </>
    
      
)

} 



createRoot(document.getElementById('root')).render(
    <>

          <Page/>
    
    </>

);
