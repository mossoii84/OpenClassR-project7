import { Link } from 'react-router-dom'

export default function ListLogement({ props }) {
  return (
    <div className="listeProprietes">
      <Link to={`/logement/${props.id}`}>
        <img src={props.cover} alt={props.title}/>
        <span className="textListeProprietes">{props.title}</span>
      </Link>
    </div>
  )
}
