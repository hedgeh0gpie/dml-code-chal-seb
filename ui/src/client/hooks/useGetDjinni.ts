import { useQuery } from 'react-query'
import { getDjinni, Djinni } from '../operations'
import { djinniCacheKey } from './shared'

export const useGetDjinni = (id: string) => {
  return useQuery<Djinni, Error>([djinniCacheKey, id], async () => {
    const response = await getDjinni(id)
    return response.data.data.djinni
  })
}

useGetDjinni.getKey = () => djinniCacheKey
