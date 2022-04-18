import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './styles/App.css'
import HomePage from './views/HomePage'
import { DjinniPage } from './views/DjinniPage'

const App = () => {
  const [djinn, setDjinn] = useState([])
  const [selectedDjinni, setSelectedDjinni] = useState({})

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/djinn?sort=-element,name', { mode: 'cors' })
      const data = await response.json()
      setDjinn(data.data.djinn)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, [])

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <div className='container'>
              <HomePage
                djinn={djinn}
                setDjinn={setDjinn}
                selectedDjinni={selectedDjinni}
                setSelectedDjinni={setSelectedDjinni}
              />
            </div>
          </Route>
          <Route path={'/djinni/:_id'}>
            <div className='container'>
              <DjinniPage
                djinn={djinn}
                setDjinn={setDjinn}
                selectedDjinni={selectedDjinni}
                setSelectedDjinni={setSelectedDjinni}
              />
            </div>
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
