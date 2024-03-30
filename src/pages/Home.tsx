import AdBanners from '@/components/home/AdBanners'
import Top from '@/components/shared/Top'
import { getAdBanners } from '@/remote/adBanner'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    getAdBanners().then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      <Top title="hi" subTitle="hihihihi" />
      <AdBanners />
    </div>
  )
}

export default HomePage
