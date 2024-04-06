import useUser from '@/hooks/auth/useUser'
import { ApplyValues, APPLY_STATUS } from '@/models/apply'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BasicInfo from './BasicInfo'
import CardInfo from './CardInfo'
import Terms from './Terms'

const Apply = ({
  onSubmit,
}: {
  onSubmit: (applyValues: ApplyValues) => void
}) => {
  const user = useUser()
  const { id } = useParams() as { id: string }

  const [step, setStep] = useState(0)
  const [applyValues, setapplyValues] = useState<Partial<ApplyValues>>({
    userId: user?.uid,
    cardId: id,
  })

  const handleTermsChange = (terms: ApplyValues['terms']) => {
    setapplyValues((prevValues) => ({
      ...prevValues,
      terms,
    }))

    setStep((prevStep) => prevStep + 1)
  }

  const handleBasicInfoChange = (
    info: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    setapplyValues((prevValues) => ({
      ...prevValues,
      ...info,
    }))

    setStep((prevStep) => prevStep + 1)
  }

  const handleCardInfoChange = (
    cardInfoValues: Pick<ApplyValues, 'isHipass' | 'isMaster' | 'isRf'>,
  ) => {
    setapplyValues((prevValues) => ({
      ...prevValues,
      ...cardInfoValues,
    }))

    setStep((prevStep) => prevStep + 1)
  }

  useEffect(() => {
    if (step === 3) {
      onSubmit({
        ...applyValues,
        appliedAt: new Date(),
        status: APPLY_STATUS.READY,
      } as ApplyValues)
    }
  }, [applyValues, onSubmit, step])

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {step === 2 ? <CardInfo onNext={handleCardInfoChange} /> : null}
    </div>
  )
}

export default Apply
