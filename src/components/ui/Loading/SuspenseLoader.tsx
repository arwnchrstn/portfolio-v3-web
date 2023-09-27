import { ReactNode, Suspense } from 'react'

import GlobalLoading from '@/components/ui/Loading/GlobalLoading'
import PageLoading from '@/components/ui/Loading/PageLoading'

type TSuspenseLoader = 'global' | 'page'

export default function SuspenseLoader({
  children,
  type
}: {
  children: ReactNode
  type: TSuspenseLoader
}) {
  return (
    <Suspense
      fallback={type === 'global' ? <GlobalLoading /> : <PageLoading />}
    >
      {children}
    </Suspense>
  )
}
