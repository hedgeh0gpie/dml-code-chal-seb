import { useMutation, UseMutationOptions, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'

import { createDjinni, Djinni } from 'client/operations'
import { djinniCacheKey } from 'client/hooks/shared'

export type DjinniCreationPayload = Omit<Djinni, '_id'>

export const useCreateDjinni = (options?: UseMutationOptions<void, AxiosError, DjinniCreationPayload>) => {
  const queryClient = useQueryClient()
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
