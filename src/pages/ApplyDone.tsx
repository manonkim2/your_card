import FixedBottomButton from '@/components/shared/FixedBottomButton'
import Flex from '@/components/shared/Flex'
import FullPageLoader from '@/components/shared/FullPageLoader'
import Text from '@/components/shared/Text'
import { parse } from 'qs'

const ApplyDone = () => {
  const { success } = parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { success: string }

  return (
    <Flex
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      justify="center"
      align="center"
    >
      <Text bold typography="t4">
        {success === 'true'
          ? '카드가 발급되었습니다.'
          : '카드 발급에 실패했습니다.'}
      </Text>
      <FixedBottomButton
        label="확인"
        onClick={() => {
          window.history.back()
        }}
      />
    </Flex>
  )
}

export default ApplyDone
