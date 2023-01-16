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


<div className="Apropose__Сollapsible">
    <Collapsible label="Fiabilité">
        <span className="Apropose__Сollapsible__Text">
        Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont 
        régulièrement vérifiées  par nos équipes.
        </span>
    </Collapsible>
    
    <Collapsible label="Respect" >
    <span className="Apropose__Сollapsible__Text">
    La bienveillance fait partie des valeurs fondatrices de Kasa. 
    Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
    une exclusion de notre plateforme.
        </span>
    </Collapsible>

    <Collapsible label="Service">
    <span className="Apropose__Сollapsible__Text">
    Nos équipes se tiennent à votre disposition pour vous fournir 
    une expérience parfaite. 
    N'hésitez pas à nous contacter si vous avez la moindre question.
        </span>
    </Collapsible>
    
    <Collapsible label="Responsabilité">
    <span className="Apropose__Сollapsible__Text">
    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les 
    voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
    services. En laissant une note aussi bien à l'hôte qu'au locataire, 
    cela permet à nos équipes de vérifier que les standards sont bien respectés. 
    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </span>
    </Collapsible>
    </div>


    </div>  
        );
    }
    
