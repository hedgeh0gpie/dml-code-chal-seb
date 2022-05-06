import { useQuery } from 'react-query'
import { Djinni, getDjinn } from '../operations'
import { djinniCacheKey } from './shared'

export const useGetDjinn = () => {
  return useQuery<Djinni[], Error>(djinniCacheKey, async () => {
    const response = await getDjinn()
    return response.data.data.djinn
  })
}

useGetDjinn.getKey = () => djinniCacheKey
