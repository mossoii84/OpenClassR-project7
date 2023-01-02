import errorImage from '../assets/images/404.jpg'
import './Error.css'
export default function Error(){

  return(
   
    <div className="errorPage">
        <img src={errorImage} alt="errorImage"></img>
    <h1>Oups! La page que vous demandez n'existe pas.</h1>
    
    <h5>Retourner sur la page d'accueil</h5>

    </div>
    
    )
}