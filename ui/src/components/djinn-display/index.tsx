import type { FC } from 'react'

import { Djinni } from 'client/operations'
import DjinniCard from 'components/DjinniCard'

import styles from './DjinnDisplay.module.css'

const DjinnDisplay: FC<Props> = ({ djinn }) => {
  return (
    <div className={styles.cardContainer}>
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
