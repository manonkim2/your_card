import { ApplyValues } from '@/models/apply'
import BasicInfo from './BasicInfo'
import CardInfo from './CardInfo'
import Terms from './Terms'

interface ApplyProps {
  step: number
  onSubmit: () => void
}

const Apply = ({ step, onSubmit }: ApplyProps) => {
  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log('terms', terms)
  }

  const handleBasicInfoChange = (
    info: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    console.log(info)
  }

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {step === 2 && <CardInfo />}
    </div>
  )
}

export default Apply
