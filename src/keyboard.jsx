import './style.css';
import { useEffect } from 'react';




export function Keyboard_app({keydown, keyup, pointer="W"})
{ 
    const first_row = ['`',1,2,3,4,5,6,7,8,9,0,'-','=']
    const second_row = ['q','w','e','r','t','y','u','i','o','p','[',']','\\'];
    const third_row = ['a','s','d','f','g','h','j','k','l',';',"'"];
    const fourth_row = ['Shift','z','x','c','v','b','n','m',',','.','/','Shift'];
    const fifth_row = [" "];
    const keyboard = [first_row,second_row,third_row,fourth_row, fifth_row];

    console.log(keydown);
    return(
        <div className = "keyboard">
            <Row row={first_row} pointer={pointer} keydown ={keydown} keyup={keyup}/>
            <Row row={second_row} pointer={pointer} keydown ={keydown} keyup={keyup}/>
            <Row row={third_row} pointer={pointer} keydown ={keydown} keyup={keyup}/>
            <Row row={fourth_row} pointer={pointer}keydown ={keydown} keyup={keyup}/> 
            <Row row={fifth_row} pointer ={pointer}keydown ={keydown}keyup={keyup}/>
        </div>
    );




}
function Row({row,pointer="W",keydown=null,keyup=null}){
    row = row.map(
        (key, index) => {
            return <Key pointer={pointer} key={index} label={key} keydown={keydown}keyup={keyup}/>;
          }
    );

    return(
        <div className="keyboard-row">
            {row}
        </div>
    );
}






function Key({ label = '', pointer = 'W', keydown, keyup }) {
  let key = "";

  // Check if the key is pressed
  if (keydown && keydown.key === label && !(label === " ")) {
    key = "pressed_key";  // Apply "pressed_key" style when key is pressed
  } 
  // Check if the key is released
  else if (keyup && keyup.key === label && !(label=== " ")) {
    key = "keyboard-key";  // Reset to default key style when key is released
  } 
  // Additional logic for special keys (like Shift, Spacebar, etc.)
  else if (label === "Shift" && keydown && keydown.key === "Shift") {
    key = "pointer_key";
  } 
  else if (label === pointer && !(pointer === " ")) {
    key = "pointer_key";
  } 
  else if (label === " " && pointer === " ") {
    key = "pointer_spacebar";
  } 
  else if (label === " ") {
    key = "space_bar";
  } 
  else {
    key = "keyboard-key";  // Default key style
  }

  return (
    <div className={key}>
      {label}
    </div>
  );
}

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

export default Key;
