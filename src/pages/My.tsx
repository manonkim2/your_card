import { useCallback } from 'react'
import { signOut } from 'firebase/auth'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'

import { auth } from '@remote/firebase'
import useUser from '@/hooks/auth/useUser'
import MyImage from '@/components/My/MyImage'

function MyPage() {
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex direction="column" align="center">
      <MyImage size={80} mode="upload" />

      <Text bold={true}>{user?.displayName}</Text>

      <Button onClick={handleLogout}>로그아웃</Button>
    </Flex>
  )
}

export default MyPage
