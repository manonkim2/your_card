import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

import Form from '@components/signin/Form'
import { FormValues } from '@models/signin'
import { auth } from '@/remote/firebase'
import { FirebaseError } from 'firebase/app'
import { useAlertContext } from '@/contexts/AlertContext'

function SigninPage() {
  const navigate = useNavigate()
  const { open } = useAlertContext()

  const handleSubmit = useCallback(
    async (formValues: FormValues) => {
      const { email, password } = formValues

      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/')
      } catch (error) {
        // firebase error
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/invalid-credential') {
            open({
              title: '계정 정보를 다시 확인해주세요.',
              onButtonClick: () => {},
            })
            return
          }
        }
        // 일반 에러
        open({
          title: '잠시 후 다시 시도해주세요.',
          onButtonClick: () => {},
        })
      }
    },
    [navigate, open],
  )

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
