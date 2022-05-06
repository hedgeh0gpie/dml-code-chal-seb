import DjinnDisplay from '../components/DjinnDisplay'
import { CreateDjinniForm } from '../components/CreateDjinniForm'
import '../styles/HomePage.css'
import * as React from 'react'
import { useGetDjinn } from '../client'

const HomePage = ({ setSelectedDjinni }) => {
  const { data: djinn = [], isLoading, error } = useGetDjinn()
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error.toString()}</p>

  return (
    <div className='homePage'>
      <CreateDjinniForm />

      {/*<Sorting djinn={djinn} />*/}

      <DjinnDisplay djinn={djinn} setSelectedDjinni={setSelectedDjinni} />
    </div>
  )
}

export default HomePage
