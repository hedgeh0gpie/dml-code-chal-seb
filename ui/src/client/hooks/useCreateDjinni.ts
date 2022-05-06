import { useMutation } from 'react-query'
import { createDjinni } from '../operations'
import { djinniCacheKey } from './shared'
import { queryClient } from '../../App'

export const useCreateDjinni = (djinni: object) => {
  return useMutation(
    async () => {
      await createDjinni(djinni)
    },
    {
      onMutate: async (djinni: object) => {},
      onSuccess: () => {
        queryClient.invalidateQueries(djinniCacheKey)
      }
    }
  )
}
