import React from 'react'
import DjinniCard from './DjinniCard'
import '../styles/DjinnDisplay.css'

function DjinnDisplay({ djinn, setSelectedDjinni }) {
  const renderDjinnCards = () => {
    return djinn.map(djinni => {
      return <DjinniCard djinni={djinni} setSelectedDjinni={setSelectedDjinni} key={djinni._id} />
    })
  }
  return <div className='cards-container'>{renderDjinnCards()}</div>
}

export default DjinnDisplay
