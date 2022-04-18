import * as React from 'react'
import { useParams } from 'react-router-dom'
import { render } from 'react-dom'
import { DetailedDjinniCard } from '../components/DetailedDjinniCard'

export const DjinniPage = ({ djinn, setDjinn, selectedDjinni, setSelectedDjinni }) => {
  const { _id } = useParams()

  if (Object.entries(selectedDjinni).length === 0) {
    const fetchAndSetSelectedDjinniFromUrl = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/djinn/' + _id, { mode: 'cors' })
        const data = await response.json()
        setSelectedDjinni(data.data.djinni)
      } catch (e) {
        console.log(e)
        render(
          <>
            <h1 style={{ marginTop: '10rem' }}>Can't find this Djinni!</h1>
            <a className='error__back' href='/'>
              Go Back
            </a>
          </>,

          document.getElementById('root')
        )
      }
    }
    fetchAndSetSelectedDjinniFromUrl()
  }

  return <DetailedDjinniCard djinn={djinn} setDjinn={setDjinn} selectedDjinni={selectedDjinni} />
}
