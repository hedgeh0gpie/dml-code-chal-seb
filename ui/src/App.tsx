import { FC } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import HomePage from 'views/HomePage'
import DjinniPage from 'views/DjinniPage'
import 'styles/App.css'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10m
      keepPreviousData: true
    }
  }
})

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route path={'/djinni/:_id'}>
              <div className='container'>
                <DjinniPage />
              </div>
            </Route>
            <Route exact path='/'>
              <div className='container'>
                <HomePage />
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
