import axios from 'axios'

// create new axios client
export const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1'
})

export * from './hooks'
