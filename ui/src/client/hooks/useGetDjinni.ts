import { useQuery, UseQueryOptions } from 'react-query'

import { getDjinni, Djinni } from 'client/operations'
import { djinniCacheKey } from './shared'
import { AxiosError } from 'axios'

export const sleep = (msToWait: number) => new Promise(res => setTimeout(res, msToWait))

export const useGetDjinni = (id?: string, options?: UseQueryOptions<Djinni, AxiosError>) => {
  return useQuery<Djinni, AxiosError>(
    [djinniCacheKey, id],
    async () => {
      if (id === undefined) throw new Error('[useGetDjinni]: Djinni ID is undefined')
      const response = await getDjinni(id)
      await sleep(300)
      return response.data.data.djinni
    },
    {
      ...options,
      enabled: !!id
    }
  )
}

useGetDjinni.getKey = (id: string) => [djinniCacheKey, id]
