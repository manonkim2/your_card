import Agreement from '../shared/Agreement'
import { 약관목록 } from '@constants/apply'
import { MouseEvent, useCallback, useState } from 'react'
import { ApplyValues } from '@/models/apply'
import FixedBottomButton from '../shared/FixedBottomButton'

const Terms = ({
  onNext,
}: {
  onNext: (terms: ApplyValues['terms']) => void
}) => {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreements((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  const allAgreement = Object.values(termsAgreements).every((agree) => agree)

  return (
    <div>
      <Agreement>
        <Agreement.Title checked={allAgreement} onChange={handleAllAgreement}>
          약관 모두 동의
        </Agreement.Title>

        {약관목록.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            checked={termsAgreements[id]}
            link={link}
            onChange={(_, checked) => {
              setTermsAgreements((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={allAgreement === false}
        onClick={() => {
          onNext(Object.keys(termsAgreements))
        }}
      />
    </div>
  )
}

export default Terms
