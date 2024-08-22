import { useCallback } from 'react'
import { signOut } from 'firebase/auth'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'

import { auth } from '@remote/firebase'
import useUser from '@/hooks/auth/useUser'
import MyImage from '@/components/My/MyImage'
import Spacing from '@/components/shared/Spacing'

function MyPage() {
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      direction="column"
      justify="center"
      align="center"
    >
      <MyImage size={80} mode="upload" />
      <Spacing size={8} />
      <Text bold={true}>{user?.displayName}</Text>
      <Spacing size={8} />
      <Button onClick={handleLogout}>로그아웃</Button>
    </Flex>
  )
}

export default MyPage
