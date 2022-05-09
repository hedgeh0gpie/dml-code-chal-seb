import { useQuery } from 'react-query'
import { getDjinni, Djinni } from '../operations'
import { djinniCacheKey } from './shared'

export const sleep = (msToWait: number) => new Promise(res => setTimeout(res, msToWait))

export const useGetDjinni = (id?: string) => {
  return useQuery<Djinni, Error>(
    [djinniCacheKey, id],
    async () => {
      if (id === undefined) throw new Error('[useGetDjinni]: Djinni ID is undefined')
      const response = await getDjinni(id)
      await sleep(300)
      return response.data.data.djinni
    },
    {
      enabled: !!id
    }
  )
}

useGetDjinni.getKey = () => djinniCacheKey
