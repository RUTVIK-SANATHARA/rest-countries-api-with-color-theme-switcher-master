import React, { createContext , useState } from 'react'
const States = createContext();

const NoteState = (props) => {
    const [icon, setIcon] = useState(false);
    const [colorMode, setColorMode] = useState({
      color: "hsl(200, 15%, 8%)",
      backgroundColor:"white",
      text:"light",
      opposite:"dark"
    });
    const clicking = () => {
       if(icon===false){
        setIcon(!icon);
        setColorMode({
          color: "hsl(0, 0%, 98%)",
          backgroundColor: "hsl(200, 15%, 8%)",
          text:"dark",
          opposite:"light"
        });
       }
       else{
        setIcon(!icon);
        setColorMode({
          color: "hsl(200, 15%, 8%)",
          backgroundColor:"white",
          text:"light",
          opposite:"dark"
        });
       }
    };
  
  return (
    <>
           <States.Provider value={{colorMode , clicking , icon}}>
               {props.children} 
           </States.Provider>
    </>
  )
}

export default NoteState;
export {States} ;