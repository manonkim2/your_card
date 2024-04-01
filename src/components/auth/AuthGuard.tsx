import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'

import { auth } from '@/remote/firebase'
import { userAtom } from '@/atoms/user'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setinitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
      })
    } else {
      setUser(null)
    }

    setinitialize(true)
  })

  if (initialize === false) {
    return null
  }

  return <div>{children}</div>
}

export default AuthGuard
