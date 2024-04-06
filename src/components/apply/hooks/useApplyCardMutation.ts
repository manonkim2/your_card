import { useAlertContext } from '@/contexts/AlertContext'
import { ApplyValues } from '@/models/apply'
import { applyCard } from '@/remote/apply'
import { useMutation } from 'react-query'

interface useApplyCardMutationProps {
  onSuccess: () => void
  onError: () => void
}

const useApplyCardMutation = ({
  onError,
  onSuccess,
}: useApplyCardMutationProps) => {
  const { open } = useAlertContext()

  return useMutation((applyValues: ApplyValues) => applyCard(applyValues), {
    onSuccess: () => {
      onSuccess()
    },
    onError: () => {
      open({
        title: '잠시후 다시 시도해주세요.',
        onButtonClick: () => {
          onError()
        },
      })
    },
  })
}

export default useApplyCardMutation
