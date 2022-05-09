import { useMutation, UseMutationOptions } from 'react-query'
import { AxiosError } from 'axios'
import { deleteDjinni } from '../operations'
import { djinniCacheKey } from './shared'
import { queryClient } from '../../App'

export const useDeleteDjinni = (options?: UseMutationOptions<void, AxiosError, string>) => {
  return useMutation(
    async id => {
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
