import React from 'react'
import './Apropos.css';
import collapsiblePageImage from '../assets/images/imageApropose.jpg'
import Collapsible from '../components/Collapsible';


export default function Apropos() {
        return (
            <div>

<div className="imagePrincipaleAporose"
           style={{ backgroundImage:`url(${collapsiblePageImage})`}}>
      </div>



    <Collapsible label="Fiabilité">
        The collapsible component puts long sections of the information under a
        block enabling users to expand or collapse to access its details.
    </Collapsible>
    
    <Collapsible label="Respect">
        The collapsible component puts long sections of the information under a
        block enabling users to expand or collapse to access its details.
    </Collapsible>

    <Collapsible label="Service">
    La bienveillance fait partie des valeurs fondatrices de Kasa. 
    Tout comportement discriminatoire 
    ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
    </Collapsible>
    
    <Collapsible label="Responsabilité">
    La bienveillance fait partie des valeurs fondatrices de Kasa. 
    Tout comportement discriminatoire 
    ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
    </Collapsible>
    
    </div>  
        );
    }
    
