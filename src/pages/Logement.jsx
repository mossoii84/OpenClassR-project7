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
      <Slideshow children={oneLogement.pictures}  />

      <OneLogement  data={oneLogement} />

      <div className="collapsibleForLogement">
        <div>
          <Collapsible className="leftCollapsible">
            {oneLogement.description}
          </Collapsible>
        </div>
        <div>
          <Collapsible className="rightCollapsible">
            {oneLogement.equipments.map((res) => (
              <ul key={res}>
                <li>{res}</li>
              </ul>
            ))}
          </Collapsible>
        </div>
      </div>
      
    </div>
  )
}
