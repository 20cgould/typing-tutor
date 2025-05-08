import React, {useEffect, useState} from 'react';
import './style.css';


export function Phrase_app({ keydown, change_pointer, pointer = "W", phrases}){
    
    console.log(phrases);
      
    
    const [phrase_pointer, change_phrase_pointer] = useState(0);
    
    const [done_with_section, change_done_with_section] = useState(false);
    
    const [typed_content, change_typed_content] = useState("");
   
    const [remaining_content, change_remaining_content] = useState(phrases[phrase_pointer].slice(1));

    
    

  

    function Keydown(){
    
        useEffect(()=> {

            if(!(keydown===null) && keydown.key===pointer )
            {
                
                change_typed_content(typed_content + pointer);
                change_pointer(remaining_content.charAt(0));
                change_remaining_content(remaining_content.slice(1));


                
                

                
                
                
                
            }
            if(remaining_content === "")
            {
                
               
                change_remaining_content(phrases[phrase_pointer+1].slice(1));
                change_typed_content("");
        
                change_pointer(phrases[phrase_pointer+1].charAt(0));
                change_phrase_pointer(phrase_pointer+1);
            }
    
        },[keydown]);
    

        
            

        
        return(
            <div className="phrase">
                <span className ="typed_content">{typed_content.replace(/ /g, "\u00A0")}</span>
                <span className = "pointer">{pointer === " " ? "\u00A0" : pointer}</span>
                <span className="remaining_content">{remaining_content.replace(/ /g, "\u00A0")} </span>
            </div>
           
        );

        
    }
    return(
        <>
            <Keydown/>
        </>
    )
    
    
    
}