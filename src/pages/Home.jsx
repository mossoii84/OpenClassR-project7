import firstPageImage from '../assets/images/imageHomePage.jpg'
import './Home.css'
import {getAll} from '../base-donnee/Functions'
import { useEffect, useState } from 'react';
import ListLogement from '../components/ListLogement'

export default function Home() {

  const[allLogement, setAllBd]=useState([]); //заводим переменные
  //сюда предаем наш метод, с перебором бд, так наши данные попали в allLogement
  useEffect(()=>{setAllBd(getAll)}, []) 
  //пустой [] нужен чтобы сказать - запустить useEffect только после 1 рендеринга
  // useEffectпозволяет выполнять эффекты: это позволяет нашему компоненту выполнять действия после рендеринга, выбирая, когда это действие должно быть выполнено.
  //Хук   useEffect   вызывается после каждого рендеринга вашего компонента. Можно указать, какая модификация данных запускает эффекты, выполняемые в useEffect, с помощью массива зависимостей.
 //Пустой массив пустой [] (в конце кода)зависимостей позволяет запускать эффект только при первом рендеринге компонента.                
  

  return (
   <div>
     <div className="imagePrincipaleHome"
            style={{ backgroundImage:`url(${firstPageImage})` }}>
        <div className="img-overlay"></div>
        <h2>Chez vous, partotu et ailleurs</h2>
      </div>


      <div className="shopList">
         { allLogement.map(log=>(
        <ListLogement key={log.id} props={log}  />
        )    )}
      </div>


    </div>
  )
}



// return (
//   <div>
//     <div
//       className="imagePrincipaleHome"
//       style={{ backgroundImage: `url(${firstPageImage})` }}>
//       <div className="img-overlay"></div>
//       <h2>Chez vous, partotu et ailleurs</h2>
//     </div>

//     <div className="shopList">
//       {getAll.map((log) => (
//         <AllLogement key={log.id} props={log} />
//       ))}
//     </div>
//   </div>
// )
// }
