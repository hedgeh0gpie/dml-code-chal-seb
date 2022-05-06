import { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './styles/App.css'
import HomePage from './views/HomePage'
import { DjinniPage } from './views/DjinniPage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Dispatch, SetStateAction } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      keepPreviousData: true
    }
  }
})

interface AppProps {
  selectedDjinni?: object
  setSelectedDjinni?: Dispatch<SetStateAction<object>>
}

const App = (props: AppProps): JSX.Element => {
  const [selectedDjinni, setSelectedDjinni] = useState({})

  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <div className='container'>
                <HomePage setSelectedDjinni={setSelectedDjinni} />
              </div>
            </Route>
            <Route path={'/djinni/:_id'}>
              <div className='container'>
                <DjinniPage selectedDjinni={selectedDjinni} setSelectedDjinni={setSelectedDjinni} />
              </div>
            </Route>
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
