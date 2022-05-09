import type { FC } from 'react'
import { useParams, Link } from 'react-router-dom'

import DetailedDjinniCard from 'components/DetailedDjinniCard'
import { useGetDjinni } from 'client/hooks/useGetDjinni'

const DjinniPage: FC = () => {
  const { _id } = useParams<{ _id: string | undefined }>()
  const { data: djinni, isLoading, error } = useGetDjinni(_id)

  if (isLoading) return <h1>Loading...</h1>
  if (error || djinni === undefined) {
    console.log(error)
    return (
      <>
        <h1 style={{ marginTop: '10rem' }}>Can't find this Djinni!</h1>
        <Link className='error__back' to='/'>
          Go Back
        </Link>
      </>
    )
  }

  return <DetailedDjinniCard selectedDjinni={djinni} />
}

export default DjinniPage
