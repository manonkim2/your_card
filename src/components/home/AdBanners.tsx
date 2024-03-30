import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { getAdBanners } from '@/remote/adBanner'
import { colors } from '@/styles/colorPalette'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const AdBanners = () => {
  const { data } = useQuery(['adBanners'], () => getAdBanners())

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banners, id) => {
          return (
            <SwiperSlide key={id}>
              <Link to={banners.link}>
                <Flex direction="column" css={bannerContainerStyles}>
                  <Text bold>{banners.title}</Text>
                  <Text typography="t7">{banners.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

export default AdBanners
