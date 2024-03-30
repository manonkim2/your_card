import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import Top from '@/components/shared/Top'
import { getAdBanners } from '@/remote/adBanner'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    getAdBanners().then((res) => {})
  }, [])

  return (
    <div>
      <Top title="hi" subTitle="hihihihi" />
      <AdBanners />
      <CardList />
    </div>
  )
}

export default HomePage
