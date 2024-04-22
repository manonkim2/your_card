import { Suspense, useEffect } from 'react'

import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import ListRow from '@/components/shared/ListRow'
import Top from '@/components/shared/Top'
import { getAdBanners } from '@/remote/adBanner'

const HomePage = () => {
  useEffect(() => {
    getAdBanners().then((res) => {})
  }, [])

  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위한 혜택 좋은 카드를 모아봤어요."
      />
      <AdBanners />
      <Suspense
        fallback={[
          ...new Array(10).map((_, idx) => <ListRow.Skeleton key={idx} />),
        ]}
      >
        <CardList />
      </Suspense>
    </div>
  )
}

export default HomePage
