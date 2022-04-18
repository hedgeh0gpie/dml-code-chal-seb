import DjinnDisplay from '../components/DjinnDisplay'
import { CreateDjinniForm } from '../components/CreateDjinniForm'
import '../styles/HomePage.css'
import * as React from 'react'
import { Sorting } from '../components/Sorting'
import { Pagination } from '../components/Pagination'

const HomePage = ({ djinn, setDjinn, setSelectedDjinni }) => {
  return (
    <div className='homePage'>
      <CreateDjinniForm djinn={djinn} setDjinn={setDjinn} />

      <Sorting djinn={djinn} setDjinn={setDjinn} />
      {/*<Pagination djinn={djinn} setDjinn={setDjinn} />*/}

      <DjinnDisplay setSelectedDjinni={setSelectedDjinni} djinn={djinn} />
    </div>
  )
}

export default HomePage
