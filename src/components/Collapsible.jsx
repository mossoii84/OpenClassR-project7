import { useState } from 'react';
import './Collapsible.css'
// import  arrowUp from '../assets/arrow-up.webp'
// import  arrowDown from '../assets/arrow-down.webp'

import {
  TfiAngleUp,
  TfiAngleDown
} from "react-icons/tfi";


export default function Collapsible(props){
    const [open, setOpen] = useState(false);  
    const toggle=()=>{setOpen(!open)}

return (
   <div onClick={toggle} className="containerCollapsible">
        <div className='collapsible'>
          <div  className="titleCollapsible">{props.label}</div>
            <div className='imgUpDown'>
                 { open ? <TfiAngleUp className='tfiIcon'/>
                        : <TfiAngleDown className='tfiIcon'/> } 
            </div>
        </div>   
            {open && (
              <div className="collapsibleBody">
                        {props.children}
              </div>
            )}
    </div>
)


} 