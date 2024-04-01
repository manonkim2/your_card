import { auth } from '@/remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setinitialize] = useState(false)

  onAuthStateChanged(auth, (user) => {
    console.log(user)

    setinitialize(true)
  })

  if (initialize === false) {
    return <div>인증 처리중</div>
  }

  return <div>AuthGuard</div>
}

export default AuthGuard
