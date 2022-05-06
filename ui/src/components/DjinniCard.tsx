import React from 'react'
import '../styles/DjinniCard.css'
import { Link } from 'react-router-dom'

export default function DjinniCard({ djinni, setSelectedDjinni }) {
  let setSelectedDjinniOnClick = () => {
    setSelectedDjinni(djinni)
  }

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

      <Link onClick={setSelectedDjinniOnClick} to={`/djinni/${djinni._id}`} className='card__link'>
        <span>
          More Info
          <img className='elemental-star' src={`img/${djinni.star}`} alt={`${djinni.element} star`} />
        </span>
      </Link>
    </figure>
  )
}
