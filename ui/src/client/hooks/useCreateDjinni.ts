import { useMutation, UseMutationOptions } from 'react-query'

import { createDjinni, Djinni } from 'client/operations'
import { djinniCacheKey } from 'client/hooks/shared'
import { queryClient } from 'App'
import { AxiosError } from 'axios'

export type DjinniCreationPayload = Omit<Djinni, '_id'>

export const useCreateDjinni = (options?: UseMutationOptions<void, AxiosError, DjinniCreationPayload>) => {
  return useMutation<void, AxiosError, DjinniCreationPayload>(
    async djinni => {
      await createDjinni(djinni)
    },
    {
      ...options,
      onSuccess(...vars) {
        queryClient.invalidateQueries(djinniCacheKey)
        options?.onSuccess?.(...vars)
      }
    }
  )
}
