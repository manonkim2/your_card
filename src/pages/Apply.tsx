import Apply from '@/components/apply'
import { useState } from 'react'

const ApplyPage = () => {
  const [step, setStep] = useState(2)

  const handleSubmit = () => {}

  return <Apply step={2} onSubmit={handleSubmit} />
}

export default ApplyPage
