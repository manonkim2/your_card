import FixedBottomButton from '@/components/shared/FixedBottomButton'
import ListRow from '@/components/shared/ListRow'
import Top from '@/components/shared/Top'
import { getCard } from '@/remote/card'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const CardPage = () => {
  const { id = '' } = useParams()

  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  })
  console.log('🚀 ~ const{data}=useQuery ~ data:', data)

  if (data == null) {
    return null
  }

  const { name, corpName, benefit, tags, promotion } = data
  const subTitle =
    promotion != null ? removeHtmlTags(promotion?.title) : tags.join(', ')

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />

      <ul>
        {benefit.map((text, index) => (
          <ListRow
            key={text}
            left={<IconCheck />}
            contents={
              <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
            }
          />
        ))}
      </ul>

      <FixedBottomButton label="신청하기" onClick={() => {}} />
    </div>
  )
}

const IconCheck = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
    >
      <path
        d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        fill="#6563ff"
      />
    </svg>
  )
}

const removeHtmlTags = (text: string) => {
  let output = ''

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === '>') {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }

  return output
}

export default CardPage
