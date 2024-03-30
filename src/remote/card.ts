import { COLLECTIONS } from '@/constants'
import { Card } from '@/models/card'
import {
  collection,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

// pageParam 지금 보이고있는 맨 마지막 요소
export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    // null이면 최초호출 > 10개만 불러옴
    pageParam == null
      ? query(collection(store, COLLECTIONS.CARD), limit(10))
      : // 최초 호출이 아니면 마지막 요소에서 +10 불러옴
        query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(10),
        )

  const cardSnapshot = await getDocs(cardQuery)

  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}
