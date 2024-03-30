import Button from '../shared/Button'
import { collection, doc, writeBatch } from 'firebase/firestore'

import { adBanners } from '@/mock/data'
import { store } from '@/remote/firebase'
import { COLLECTIONS } from '@/constants'

const AdBannerListAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER))

      batch.set(docRef, card)
    })

    await batch.commit()

    alert('배너리스트 추가완료')
  }

  return <Button onClick={handleButtonClick}>카드리스트 추가</Button>
}

export default AdBannerListAddButton
