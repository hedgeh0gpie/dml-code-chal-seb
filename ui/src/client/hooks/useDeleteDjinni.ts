import { useMutation, UseMutationOptions } from 'react-query'
import { AxiosError } from 'axios'
import { deleteDjinni } from '../operations'
import { djinniCacheKey } from './shared'
import { queryClient } from '../../App'

export const useDeleteDjinni = (id: string, options?: UseMutationOptions<void, AxiosError>) => {
  return useMutation<void, AxiosError>(
    async () => {
      await deleteDjinni(id)
    },
    {
      ...options,
      onSuccess(...vars) {
        //TODO: search key
        queryClient.invalidateQueries(djinniCacheKey)
        options?.onSuccess?.(...vars)
      }
    }
  )
}
