import type { FC } from 'react'

import { Djinni } from 'client/operations'
import 'styles/DjinnDisplay.css'

import DjinniCard from './DjinniCard'

const DjinnDisplay: FC<Props> = ({ djinn }) => {
  return (
    <div className='cards-container'>
      {djinn.map(djinni => (
        <DjinniCard djinni={djinni} key={djinni._id} />
      ))}
    </div>
  )
}

export default DjinnDisplay

interface Props {
  djinn: Djinni[]
}
