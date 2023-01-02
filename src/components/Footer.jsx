import LOGO_Footer from '../assets/images/LOGO_Footer.png';
import './Footer.css'


export default function Footer(){

    return (
        <footer>
            <div>
                <img src={LOGO_Footer} alt="LOGO_Footer"></img>
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
            )

}