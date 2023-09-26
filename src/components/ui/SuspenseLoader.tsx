import { ReactNode, Suspense } from 'react'

import GlobalLoading from '@/components/ui/GlobalLoading'

export default function SuspenseLoader({ children }: { children: ReactNode }) {
  return <Suspense fallback={<GlobalLoading />}>{children}</Suspense>
}
