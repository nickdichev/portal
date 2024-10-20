'use server'

import { getServerSidePocketBase } from '@/app/auth/actions'
import { toggleBrandSaved } from '@/lib/brands'

export async function toggleSavedBrandAction(brandId: string) {
  const pb = await getServerSidePocketBase()
  const user = pb.authStore.model

  if (!user) {
    throw new Error('User not authenticated')
  }

  const newSavedState = await toggleBrandSaved(pb, brandId, user.id)
  return newSavedState
}