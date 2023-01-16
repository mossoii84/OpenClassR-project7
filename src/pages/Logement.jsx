import './Logement.css'
import { useParams } from 'react-router-dom'
import { getOne } from '../base-donnee/Functions'
import OneLogement from '../components/OneLogement'
import Collapsible from '../components/Collapsible'
import Error from '../error/Error'
import { Slideshow } from '../components/Slideshow'

export default function Logement() {
  const { id } = useParams()
  const oneLogement = getOne(id)

  if (!oneLogement) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  return (
    <div>
      <Slideshow children={oneLogement.pictures} />
      
      <OneLogement  data={oneLogement} />

      <div className="collapsibleForLogement">
        <div>
          <Collapsible label="Description" >
            <span className='spanCollapsibleForLogement'>
            {oneLogement.description}
            </span>
          </Collapsible>
        </div>
        <div>
          <Collapsible label="Equipments">
          <span className='spanCollapsibleForLogement'>
            {oneLogement.equipments.map((res, index) => (
              <ul key={index}>
                <li>{res}</li>
              </ul>
            ))}
            </span>
          </Collapsible>
        </div>
      </div>
      
    </div>
  )
}
