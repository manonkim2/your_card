import { getCards } from '@/remote/card'
import { useInfiniteQuery } from 'react-query'
import ListRow from '../shared/ListRow'
import { flatten } from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Badge from '../shared/Badge'

const CardList = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        // 현재 들어온 데이터의 마지막 cursor를 가져옴
        return snapshot.lastVisible
      },
    },
  )

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }

    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  const cards = flatten(data?.pages.map(({ items }) => items))

  const navigate = useNavigate()

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
      >
        <ul>
          {cards?.map((card, index) => {
            return (
              <ListRow
                key={card.id}
                contents={
                  <ListRow.Texts
                    title={`${index + 1} 위`}
                    subTitle={card.name}
                  />
                }
                right={card.payback ? <Badge label={card.payback} /> : null}
                onClick={() => {
                  navigate(`/card/${card.id}`)
                }}
                withArrow
              />
            )
          })}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
