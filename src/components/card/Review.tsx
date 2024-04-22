import { useInView } from 'react-intersection-observer'
import { useQuery } from 'react-query'
import Skeleton from '../shared/Skeleton'

const Review = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const { data = [], isLoading } = useQuery(
    ['review'],
    () => {
      return new Promise<string[]>((res) => {
        setTimeout(() => {
          res(['hi', '신청'])
        }, 2000)
      })
    },
    { enabled: inView },
  )

  return (
    <div ref={ref}>
      {isLoading ? (
        <>
          <Skeleton width={30} height={10} />
          <Skeleton width={30} height={10} />
        </>
      ) : (
        data.map((review) => <div>{review}</div>)
      )}
    </div>
  )
}

export default Review
