import { useCallback } from 'react'

import Form from '@components/signin/Form'
import { FormValues } from '@models/signin'

function SigninPage() {
  const handleSubmit = useCallback(async (formValues: FormValues) => {
    console.log(formValues)
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
