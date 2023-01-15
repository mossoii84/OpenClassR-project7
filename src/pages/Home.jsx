import firstPageImage from '../assets/images/imageHomePage.jpg'
import './Home.css'
import {getAll} from '../base-donnee/Functions'
import { useEffect, useState } from 'react';
import ListLogement from '../components/ListLogement'

export default function Home() {
  const[allLogement, setAllBd]=useState([]); 
  
  //passing data after rendering to -allLogement
  useEffect(()=>{setAllBd(getAll)}, []) 

  return (
   <div>
     <div className="imagePrincipaleHome"
            style={{ backgroundImage:`url(${firstPageImage})` }}>
        <div className="img-overlay"></div>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>


      <div className="shopList">
         { allLogement.map(log=>(
        <ListLogement key={log.id} props={log}  />
        )    )}
      </div>


    </div>
  )
}
