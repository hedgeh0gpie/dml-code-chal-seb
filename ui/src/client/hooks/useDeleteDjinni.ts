import { useMutation, UseMutationOptions, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { useHistory } from 'react-router-dom'

import { deleteDjinni } from 'client/operations'
import { djinniCacheKey } from './shared'
import { useGetDjinni } from './'

export const useDeleteDjinni = (options?: UseMutationOptions<void, AxiosError, string>) => {
  const queryClient = useQueryClient()
  const { push } = useHistory()
  return useMutation(
    async id => {
      await deleteDjinni(id)
    },
    {
      ...options,
      onSuccess(data, variables, context) {
        queryClient.invalidateQueries(djinniCacheKey)
        queryClient.invalidateQueries(useGetDjinni.getKey(variables))
        options?.onSuccess?.(data, variables, context)
        push('/')
      }
    }
  )
}
