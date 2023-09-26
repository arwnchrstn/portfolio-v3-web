import { lazy } from 'react'
import { TRoutes } from '@/models/TRoutes'

const LandingPage = lazy(
  () => import('@/pages/LandingPage')
) as unknown as TRoutes['element']
const Page404 = lazy(
  () => import('@/pages/Page404')
) as unknown as TRoutes['element']
const MainLayout = lazy(
  () => import('@/pages/MainLayout')
) as unknown as TRoutes['element']
const About = lazy(
  () => import('@/pages/MainLayout/About')
) as unknown as TRoutes['element']

export const mainRoutes: TRoutes[] = [
  { path: '/', element: LandingPage },
  { path: '*', element: Page404 }
]

export const nestedRoutes: TRoutes[] = [
  {
    path: '/rwnchrstn',
    element: MainLayout,
    children: [{ path: 'about', element: About }]
  }
]
