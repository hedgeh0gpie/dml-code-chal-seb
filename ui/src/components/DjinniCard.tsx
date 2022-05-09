import type { FC } from 'react'
import { Link } from 'react-router-dom'

import type { Djinni } from 'client/operations'
import 'styles/DjinniCard.css'

const DjinniCard: FC<Props> = ({ djinni }) => {
  return (
    <figure className='card'>
      <div className='card__icon'>
        <img className='card__icon--djinni' src={`img/${djinni.icon}`} alt={`${djinni.element} djinni`} />
      </div>

      <div className='card__djinni-name-box'>
        <h3 className='card__djinni-name'>{djinni.name}</h3>
      </div>

      <div className='card__details'>
        <div className='card__detail-box'>
          <p className='card__detail card__detail--djinni-description'>{djinni.description}</p>
        </div>
      </div>

      <Link to={`/djinni/${djinni._id}`} className='card__link'>
        <span>
          More Info
          <img className='elemental-star' src={`img/${djinni.star}`} alt={`${djinni.element} star`} />
        </span>
      </Link>
    </figure>
  )
}

interface Props {
  djinni: Djinni
}

export default DjinniCard
