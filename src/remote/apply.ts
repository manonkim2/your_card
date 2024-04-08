import { COLLECTIONS } from '@/constants'
import { ApplyValues } from '@/models/apply'
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { store } from './firebase'

// 전체 카드정보 저장
export async function applyCard(applyValues: ApplyValues) {
  return addDoc(collection(store, COLLECTIONS.CARD_APPLY), applyValues)
}

// firebase 카드정보 찾아서 update
export async function updateApplyCard({
  cardId,
  userId,
  applyValues,
}: {
  cardId: string
  userId: string
  applyValues: Partial<ApplyValues>
}) {
  const snapshot = await getDocs(
    query(
      collection(store, COLLECTIONS.CARD_APPLY),
      where('userId', '==', userId),
      where('cardId', '==', cardId),
    ),
  )

  const [applied] = snapshot.docs

  updateDoc(applied.ref, applyValues)
}

// 기등록된 카드 조회
export async function getAppliedCard({
  cardId,
  userId,
}: {
  cardId: string
  userId: string
}) {
  const snapshot = await getDocs(
    query(
      collection(store, COLLECTIONS.CARD_APPLY),
      where('userId', '==', userId),
      where('cardId', '==', cardId),
    ),
  )

  if (snapshot.docs.length === 0) {
    return null
  }

  const [applied] = snapshot.docs

  return applied.data() as ApplyValues
}
