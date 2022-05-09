import { useQuery } from 'react-query'
import { Djinni, getDjinn } from '../operations'
import { djinniCacheKey } from './shared'

export const useGetDjinn = (sort?: string) => {
  return useQuery<Djinni[], Error>([djinniCacheKey, sort], async () => {
    const response = await getDjinn(sort)
    return response.data.data.djinn
  })
}

useGetDjinn.getKey = (sort?: string) => [djinniCacheKey, sort]
