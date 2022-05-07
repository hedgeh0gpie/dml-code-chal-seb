import * as React from 'react'
import '../styles/DetailedDjinniCard.css'
import { useHistory, Link } from 'react-router-dom'
import { useDeleteDjinni } from '../client/hooks/useDeleteDjinni'

export const DetailedDjinniCard = ({ selectedDjinni }) => {
  const history = useHistory()
  const deleteMutation = useDeleteDjinni(selectedDjinni._id)

  return (
    <figure className='djinni' id='djinni-figure'>
      <Link className='djinni__back' onClick={history.goBack}>
        Back
      </Link>

      <Link className='djinni__delete' onClick={() => deleteMutation.mutate(selectedDjinni._id)} to='/'>
        Delete
      </Link>

      <div className='djinni__hero'>
        <img src={`/img/${selectedDjinni.image}`} alt={selectedDjinni.name} className='djinni__image' />
      </div>
      <h2 className='djinni__name'>{selectedDjinni.name}</h2>
      <p className='djinni__battle-effect'>{selectedDjinni.battleEffect}</p>
      <p className='djinni__set-bonuses'>Set Bonuses</p>
      <div className='djinni__details'>
        <p>HP: {selectedDjinni.hp}</p>
        <p>PP: {selectedDjinni.pp}</p>
        <p>Atk: {selectedDjinni.atk}</p>
        <p>Def: {selectedDjinni.def}</p>
        <p>Agi: {selectedDjinni.agi}</p>
        <p>Lck: {selectedDjinni.lck}</p>
        <p>Damage: {selectedDjinni.damage}</p>
        <p>Element: {selectedDjinni.element}</p>
      </div>
      <div className='djinni__bottom-banner' />
    </figure>
  )
}
