import * as React from 'react'
import { useParams } from 'react-router-dom'
import { DetailedDjinniCard } from '../components/DetailedDjinniCard'
import { useGetDjinni } from '../client/hooks/useGetDjinni'

export const DjinniPage = ({ selectedDjinni, setSelectedDjinni }) => {
  const { _id } = useParams()
  const { data: djinni, isLoading, error } = useGetDjinni(_id)

  if (Object.entries(selectedDjinni).length === 0) {
    if (isLoading) return <h1>Loading...</h1>
    if (error) {
      console.log(error)
      return (
        <>
          <h1 style={{ marginTop: '10rem' }}>Can't find this Djinni!</h1>
          <a className='error__back' href='/'>
            Go Back
          </a>
        </>
      )
    }
    setSelectedDjinni(djinni)
  }
  return <DetailedDjinniCard selectedDjinni={selectedDjinni} />
}
