import { 결제일옵션, 신용점수옵션, 연소득옵션 } from '@/constants/apply'
import { ApplyValues } from '@/models/apply'
import { ChangeEvent, useCallback, useState } from 'react'
import FixedBottomButton from '../shared/FixedBottomButton'
import Select from '../shared/Select'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

const BasicInfo = ({
  onNext,
}: {
  onNext: (infoValues: InfoValues) => void
}) => {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChage = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setInfoValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }))
    },
    [],
  )

  const allSelected = Object.values(infoValues).every((value) => value)

  return (
    <div style={{ padding: 16 }}>
      <Select
        name="salary"
        label="연소득"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        onChange={handleInfoChage}
        value={infoValues.salary}
      />
      <Select
        name="creditScore"
        label="신용점수"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        onChange={handleInfoChage}
        value={infoValues.creditScore}
      />
      <Select
        name="payDate"
        label="결제일"
        options={결제일옵션}
        placeholder={연소득옵션[0].label}
        onChange={handleInfoChage}
        value={infoValues.payDate}
      />
      <FixedBottomButton
        label="다음"
        disabled={!allSelected}
        onClick={() => {
          onNext(infoValues)
        }}
      />
    </div>
  )
}

export default BasicInfo
